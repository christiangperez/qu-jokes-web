import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IconContext } from 'react-icons';
import { FaBattleNet, FaBars, FaTimes, FaHome, FaRocket } from 'react-icons/fa';
import { SiFunimation } from 'react-icons/si';
import { IoMdInformationCircle } from 'react-icons/io';
import cn from 'classnames';
import './styles.scss';

const Navbar = () => {
  const navigate = useNavigate();
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showNavbarBackgroundColor, setShowNavbarBackgroundColor] = useState(false);

  const [menuItems] = useState([
    {
      description: 'HOME',
      icon: <FaHome />,
      goTo: '/'
    },
    {
      description: 'JOKES',
      icon: <SiFunimation />,
      goTo: '/jokes'
    },
    {
      description: 'TOP TEN',
      icon: <FaRocket />,
      goTo: '/top-ten'
    },
    {
      description: 'ABOUT',
      icon: <IoMdInformationCircle />,
      goTo: '/about'
    }
  ]);

  const changeNavBackgroundColor = () => {
    if (window.scrollY >= 30) {
      setShowNavbarBackgroundColor(true);
    } else {
      setShowNavbarBackgroundColor(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', changeNavBackgroundColor);

    return () => {
      window.removeEventListener('scroll', changeNavBackgroundColor);
    };
  }, []);

  return (
    <div className={cn('navbar', { showBackground: showNavbarBackgroundColor })}>
      <div className="wrapper">
        <IconContext.Provider value={{ style: { fontSize: '2em' } }}>
          <div className="logo-container" onClick={() => navigate('/')}>
            <FaBattleNet />
            <p>Qu Beyond</p>
          </div>

          <div className="mobile-icon" onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </div>

          <ul className={cn('menu', { isOpen: showMobileMenu })}>
            {menuItems.map((item) => (
              <li className="menu-item" key={item.description}>
                <a
                  className="menu-item-link line-effect"
                  onClick={() => {
                    setShowMobileMenu(!showMobileMenu);
                    navigate(item.goTo);
                  }}
                >
                  <div>
                    {item.icon}
                    {item.description}
                  </div>
                </a>
              </li>
            ))}
          </ul>
        </IconContext.Provider>
      </div>
    </div>
  );
};

export default Navbar;
