import { useEffect, useState } from 'react';
import { FaAngleUp } from 'react-icons/fa';
import './styles.scss';

export const ScrollToTopButton = () => {
  const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);

  const changeScrollToTop = () => {
    if (window.scrollY > 400) {
      setShowScrollToTopButton(true);
    } else {
      setShowScrollToTopButton(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeScrollToTop);

    return () => {
      window.removeEventListener('scroll', changeScrollToTop);
    };
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="scroll-to-top-button">
      {' '}
      {showScrollToTopButton && <FaAngleUp className="icon" onClick={goToTop} />}{' '}
    </div>
  );
};
