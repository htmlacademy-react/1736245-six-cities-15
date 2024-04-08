import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import MainPage from '../../pages/main-page/main-page';
import LoginPage from '../../pages/login-page/login-page';
import OfferPage from '../../pages/offer-page/offer-page';
import FavoritesPage from '../../pages/favorites-page/favorites-page';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { HelmetProvider } from 'react-helmet-async';
import {AppRoute, AuthorizationStatus} from '../../services/constants';
import PrivateRoute from '../private-route/private-route';
import { fetchOffers, fetchFavorites } from '../../store/thunks/offers';
import { useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';
import { getToken } from '../../services/token';
import { checkAuth } from '../../store/thunks/user';

function App() {
  const dispatch = useAppDispatch();
  const authStatus = useAppSelector((state) => state.auth.authStatus);

  useEffect(() => {
    const token = getToken();
    if (token) {
      dispatch(checkAuth());
    }
  }, [authStatus, dispatch]);

  useEffect(() => {
    dispatch(fetchOffers());
    if(authStatus === AuthorizationStatus.Auth) {
      dispatch(fetchFavorites());
    }
  }, [dispatch, authStatus]);
  const offers = useAppSelector((state) => state.offers.offers);
  const favorites = useAppSelector((state) => state.offers.favorites);

  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage offers={offers} />}
          />
          <Route path={AppRoute.Login} element={
            <PrivateRoute redirectIfAuth={AppRoute.Main}><LoginPage /></PrivateRoute>
          }
          />
          <Route path={AppRoute.Offer}>
            <Route
              path=':id'
              element={<OfferPage />}
            />
          </Route>
          <Route path={AppRoute.Favorites} element={
            <PrivateRoute redirectIfNotAuth={AppRoute.Login}>
              <FavoritesPage favorites={favorites} />
            </PrivateRoute>
          }
          />
          <Route
            path='*'
            element={<PageNotFound isOffer={false} />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
