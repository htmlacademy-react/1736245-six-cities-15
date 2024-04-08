import { useCallback } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { AppRoute } from '../../services/constants';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { AuthorizationStatus } from '../../services/constants';
import { logout } from '../../store/thunks/user';


const HeaderNavigation = (): JSX.Element => {
  const authStatus = useAppSelector((state) => state.auth.authStatus);
  const favorites = useAppSelector((state) => state.offers.favorites);
  const dispatch = useAppDispatch();
  const user = useAppSelector((state) => state.auth.user);
  const navigate = useNavigate();

  const handleLogout = useCallback((e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    dispatch(logout())
      .then(() => {
        navigate(AppRoute.Main);
      });
  }, [dispatch, navigate]);

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
            <Link to={`${AppRoute.Favorites}/`} className="header__nav-link header__nav-link--profile">
              <div className="header__avatar-wrapper user__avatar-wrapper">
              </div>
              <span className="header__user-name user__name">
                {user?.email ?? 'User'}
              </span>
              <span className="header__favorite-count">
                {favorites?.length ?? null}
              </span>
            </Link>
          </li>
          <li className="header__nav-item">
            <Link
              className="header__nav-link"
              to={AppRoute.Main}
              onClick={handleLogout}
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
