import { ChangeEvent, useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import jokesApi from '../../../api/jokesApi';
import { IJoke } from '../../../interfaces';
import { ScrollToTopButton } from '../../Navbar/components/ScrollToTopButton';
import { Spinner } from '../../../components/Spinner';
import { DeleteModal } from '../../../components/DeleteModal';
import { CreateJokeModal } from '../CreateJokeModal';
import JokesParams from '../JokesParams';
import JokesPagination from '../JokesPagination';
import JokeCard from '../JokeCard';
import { PageTitle } from '../../../components/PageTitle';
import './styles.scss';

export const JokesScreen = () => {
  const [jokes, setJokes] = useState<IJoke[]>([]);
  const [jokesQuantity, setJokesQuantity] = useState('10');
  const [currentPage, setCurrentPage] = useState(1);
  const jokesPerPage = 6;
  const [sortByType, setSortByType] = useState(false);
  const [sortBySetup, setSortBySetup] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [deleteModalIsOpen, setDeleteModalIsOpen] = useState(false);
  const [createJokeModalIsOpen, setCreateJokeModalIsOpen] = useState(false);
  const [jokeToDelete, setJokeToDelete] = useState<number | null>(null);

  const totalPages = Math.ceil(jokes.length / jokesPerPage);
  const currentJokes = jokes.slice((currentPage - 1) * jokesPerPage, (currentPage - 1) * jokesPerPage + jokesPerPage);

  const openDeleteModal = () => {
    setDeleteModalIsOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalIsOpen(false);
  };

  const openCreateJokeModal = () => {
    setCreateJokeModalIsOpen(true);
  };

  const closeCreateJokeModal = () => {
    setCreateJokeModalIsOpen(false);
  };

  const getJokes = async () => {
    if (jokesQuantity !== '' && Number(jokesQuantity) > 0) {
      try {
        setIsLoading(true);
        setCurrentPage(1);
        const response = await jokesApi.Jokes.getRandomJokesByQuantity(Number(jokesQuantity));
        setJokes(response);
      } catch (error) {
        console.error('Failed to fetch jokes:', error);
        enqueueSnackbar('Failed to fetch jokes', { variant: 'error' });
      } finally {
        setIsLoading(false);
      }
    }
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;

    if (value === '' || /^[0-9\b]+$/.test(value)) {
      setJokesQuantity(value);
    }
  };

  const handlePageChange = (newPage: number) => {
    setCurrentPage(newPage);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const handleSortByTypeChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSortByType(e.target.checked);
    sortJokes(e.target.checked, sortBySetup);
  };

  const handleSortBySetupChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSortBySetup(e.target.checked);
    sortJokes(sortByType, e.target.checked);
  };

  const sortJokes = (sortType: boolean, sortSetup: boolean) => {
    const sortedJokes = [...jokes];

    if (sortType) {
      sortedJokes.sort((a, b) => a.type.localeCompare(b.type));
    }
    if (sortSetup) {
      sortedJokes.sort((a, b) => a.setup.localeCompare(b.setup));
    }

    setJokes(sortedJokes);
  };

  const handleDelete = async (id: number) => {
    setJokeToDelete(id);
    openDeleteModal();
  };

  const deleteJoke = async () => {
    try {
      if (jokeToDelete) {
        await jokesApi.Jokes.deleteJoke(jokeToDelete);
        setJokes(jokes.filter((joke) => joke.id !== jokeToDelete));
        enqueueSnackbar('Joke deleted!', { variant: 'success' });
      }
    } catch (error) {
      console.error('Failed to delete joke:', error);
      enqueueSnackbar('Failed to delete joke', { variant: 'error' });
    } finally {
      setJokeToDelete(null);
      closeDeleteModal();
    }
  };

  const handleLike = async (id: number) => {
    try {
      await jokesApi.Jokes.likeJoke(id);
      setJokes(
        jokes.map((joke) => {
          if (joke.id === id) {
            return { ...joke, likes: joke.likes ? joke.likes + 1 : 1 };
          }
          return joke;
        })
      );
      enqueueSnackbar('Joke liked!', { variant: 'success' });
    } catch (error) {
      console.error('Failed to like joke:', error);
      enqueueSnackbar('Failed to like joke', { variant: 'error' });
    }
  };

  const createJoke = async (joke: IJoke) => {
    try {
      const ret = await jokesApi.Jokes.createJoke(joke);
      enqueueSnackbar('Joke created!', { variant: 'success' });
      setJokes([...jokes, { ...joke, id: ret.id }]);
    } catch (error) {
      console.error('Failed to create joke:', error);
      enqueueSnackbar('Failed to create joke', { variant: 'error' });
    } finally {
      closeCreateJokeModal();
    }
  };

  return (
    <div className="jokes">
      <ScrollToTopButton />
      <DeleteModal modalIsOpen={deleteModalIsOpen} closeModal={closeDeleteModal} acceptModal={deleteJoke} />
      <CreateJokeModal
        title="Create new Joke"
        modalIsOpen={createJokeModalIsOpen}
        closeModal={closeCreateJokeModal}
        acceptModal={createJoke}
      />
      <PageTitle title="Jokes" subtitle="Explore and have fun" />
      <JokesParams
        jokesQuantity={jokesQuantity}
        handleInputChange={handleInputChange}
        getJokes={getJokes}
        sortByType={sortByType}
        handleSortByTypeChange={handleSortByTypeChange}
        sortBySetup={sortBySetup}
        handleSortBySetupChange={handleSortBySetupChange}
      />
      <div className="create-button">
        <button onClick={openCreateJokeModal}>Create</button>
      </div>
      {isLoading ? (
        <Spinner />
      ) : (
        <main>
          {jokes.length > 0 && (
            <div className="container">
              {currentJokes.map((joke: IJoke) => (
                <JokeCard key={joke.id} joke={joke} onLike={handleLike} onDelete={handleDelete} />
              ))}
            </div>
          )}
          {jokes.length > 6 && (
            <JokesPagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
          )}
        </main>
      )}
    </div>
  );
};
