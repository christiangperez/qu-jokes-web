import { GrPrevious, GrNext } from 'react-icons/gr';
import './styles.scss';

interface Props {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}

const JokesPagination = ({ currentPage, totalPages, onPageChange }: Props) => {
  return (
    <nav className="jokes__pagination">
      {currentPage > 1 && <GrPrevious onClick={() => onPageChange(currentPage - 1)} />}
      <span>
        {currentPage} from {totalPages}
      </span>
      {currentPage < totalPages && <GrNext onClick={() => onPageChange(currentPage + 1)} />}
    </nav>
  );
};

export default JokesPagination;
