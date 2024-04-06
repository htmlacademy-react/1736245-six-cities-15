import Header from '../../components/header/header';
import { Helmet } from 'react-helmet-async';
import Favorites from '../../components/favorites/favorites';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../services/constants';
import LoadingSpinner from '../../components/loading-spinner/loading-spinner';
import { useAppSelector, useAppDispatch } from '../../hooks';
import { useEffect } from 'react';
import { fetchFavorites } from '../../store/thunks/offers';


const FavoritesPage = () => {
  const favorites = useAppSelector((state) => state.offers.favorites);
  const areFavoritesFetched = useAppSelector((state) => state.offers.areFavoritesFetched);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchFavorites());
  }, [dispatch]);

  return (
    <div className="page">
      <Helmet>
        <title>Шесть городов. Избранное</title>
      </Helmet>
      <Header />
      {areFavoritesFetched ?
        (
          <>
            <Favorites offers={favorites} />
            <footer className={favorites ? 'footer container' : 'footer'}>
              <Link to={AppRoute.Main} className="footer__logo-link">
                <img className="footer__logo" src="img/logo.svg" alt="6 cities logo" width="64" height="33" />
              </Link>
            </footer>
          </>
        ) : <LoadingSpinner />}

    </div>
  );
};

export default FavoritesPage;
