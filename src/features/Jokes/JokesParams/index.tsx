import { ChangeEvent, KeyboardEvent } from 'react';
import './styles.scss';

interface Props {
  jokesQuantity: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  getJokes: () => void;
  sortByType: boolean;
  handleSortByTypeChange: (e: ChangeEvent<HTMLInputElement>) => void;
  sortBySetup: boolean;
  handleSortBySetupChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const JokesParams = ({
  jokesQuantity,
  handleInputChange,
  getJokes,
  sortByType,
  handleSortByTypeChange,
  sortBySetup,
  handleSortBySetupChange
}: Props) => {
  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      getJokes();
    }
  };

  return (
    <>
      <header className="jokes__params">
        <div className="quantity">
          <span>Gimme</span>
          <input type="text" value={jokesQuantity} onChange={handleInputChange} onKeyDown={handleKeyDown} />
          <span>Jokes</span>
          <button onClick={getJokes}>Get</button>
        </div>
        <div className="sort">
          <div>
            <input type="checkbox" checked={sortByType} onChange={handleSortByTypeChange} />
            <label>Sort by Type</label>
          </div>
          <div>
            <input type="checkbox" checked={sortBySetup} onChange={handleSortBySetupChange} />
            <label>Sort by Joke</label>
          </div>
        </div>
      </header>
    </>
  );
};

export default JokesParams;
