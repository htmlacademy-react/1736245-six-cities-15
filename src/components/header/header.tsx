import { Link, useLocation } from 'react-router-dom';
import { APP_ROUTE } from '../../services/constants';
import HeaderNavigation from '../header-navigation/header-navigation';

const Header = () => {
  const currentPath = useLocation().pathname;

  return (
    <header className="header">
      <div className="container">
        <div className="header__wrapper">
          <div className="header__left">
            <Link className={`header__logo-link${currentPath === APP_ROUTE.Main ? ' header__logo-link--active' : ''}`} to={APP_ROUTE.Main}>
              <img
                className="header__logo"
                src="img/logo.svg"
                alt="6 cities logo"
                width={81}
                height={41}
              />
            </Link>
          </div>
          {currentPath !== APP_ROUTE.Login && <HeaderNavigation />}
        </div>
      </div>
    </header>
  );

};

export default Header;
