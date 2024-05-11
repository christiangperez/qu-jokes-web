import { useEffect, useState } from 'react';
import { enqueueSnackbar } from 'notistack';
import { PageTitle } from '../../components/PageTitle';
import jokesApi from '../../api/jokesApi';
import { IJoke } from '../../interfaces';
import JokeCard from '../Jokes/JokeCard';
import { getCardClassName } from '../../utils';
import './styles.scss';

export const TopTenScreen = () => {
  const [topTenJokes, setTopTenJokes] = useState<IJoke[]>([]);

  useEffect(() => {
    const getTopTenJokes = async () => {
      try {
        const response = await jokesApi.Jokes.getTopTen();
        setTopTenJokes(response);
      } catch (error) {
        console.error('Failed to fetch top ten jokes:', error);
        enqueueSnackbar('Failed to fetch top ten jokes', { variant: 'error' });
      }
    };

    getTopTenJokes();
  }, []);

  return (
    <div className="top-ten">
      <PageTitle title="Top Ten" subtitle="The best Jokes" />
      <div className="container">
        {topTenJokes &&
          topTenJokes.map((joke, index) => (
            <div key={joke.id} className="item">
              <div className={`index ${getCardClassName(joke.type)}`}>{index + 1}</div>
              <JokeCard joke={joke} />
            </div>
          ))}
      </div>
    </div>
  );
};
