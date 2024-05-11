import { useState } from 'react';
import { MdDelete } from 'react-icons/md';
import { FaHeart, FaRegHeart } from 'react-icons/fa';
import { IJoke } from '../../../interfaces';
import { ScrollToTopButton } from '../../Navbar/components/ScrollToTopButton';
import { getCardClassName } from '../../../utils';
import './styles.scss';

interface Props {
  joke: IJoke;
  onLike?: (id: number) => void;
  onDelete?: (id: number) => void;
}

const JokeCard = ({ joke, onLike, onDelete }: Props) => {
  const [isAnimating, setAnimating] = useState(false);

  const handleLikeClick = (id: number) => {
    setAnimating(true);
    onLike?.(id);
    setTimeout(() => setAnimating(false), 1000);
  };

  return (
    <div className={`jokes__card ${getCardClassName(joke.type)}`}>
      <ScrollToTopButton />
      <article className="content">
        <div className="joke">
          <span>{joke.setup}</span>
          <span>
            <b>{joke.punchline}</b>
          </span>
        </div>
        {onLike && onDelete && (
          <div className="options">
            <div>
              {joke.likes && joke.likes > 0 ? (
                <FaHeart
                  className={isAnimating ? 'heart-pulse' : ''}
                  size={24}
                  onClick={() => handleLikeClick(joke.id)}
                />
              ) : (
                <FaRegHeart
                  className={isAnimating ? 'heart-pulse' : ''}
                  size={24}
                  onClick={() => handleLikeClick(joke.id)}
                />
              )}
              {joke.likes && <span>{joke.likes}</span>}
            </div>
            <MdDelete size={24} onClick={() => onDelete && onDelete(joke.id)} />
          </div>
        )}
        <footer className={`type ${getCardClassName(joke.type)}`}>{joke.type}</footer>
      </article>
    </div>
  );
};

export default JokeCard;
