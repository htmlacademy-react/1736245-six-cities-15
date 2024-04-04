import { Link } from 'react-router-dom';
import { AppRoute } from '../../services/constants';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { AuthorizationStatus } from '../../services/constants';
import { logout } from '../../store/thunks/user';


const HeaderNavigation = (): JSX.Element => {
  const authStatus = useAppSelector((state) => state.auth.authStatus);
  const dispatch = useAppDispatch();

  return (
    <nav className="header__nav">
      {authStatus !== AuthorizationStatus.Auth ? (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <Link
              className="header__nav-link header__nav-link--profile"
              to={AppRoute.Login}
            >
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__login">Sign in</span>
            </Link>
          </li>
        </ul>
      ) : (
        <ul className="header__nav-list">
          <li className="header__nav-item user">
            <a className="header__nav-link header__nav-link--profile" href="#">
              <div className="header__avatar-wrapper user__avatar-wrapper"></div>
              <span className="header__user-name user__name">
              Oliver.conner@gmail.com
              </span>
              <span className="header__favorite-count">3</span>
            </a>
          </li>
          <li className="header__nav-item">
            <Link
              className="header__nav-link"
              to={AppRoute.Main}
              onClick={(e) => {
                e.preventDefault();
                dispatch(logout());
              }}
            >
              <span className="header__signout">Sign out</span>
            </Link>
          </li>
        </ul>
      )}
    </nav>
  );
};

export default HeaderNavigation;
