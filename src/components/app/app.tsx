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
import {AppRoute} from '../../services/constants';
import PrivateRoute from '../private-route/private-route';
import { fetchOffers } from '../../store/thunks/offers';
import { useAppSelector } from '../../hooks';
import { useEffect } from 'react';
import { useAppDispatch } from '../../hooks';

function App() {
  const dispatch = useAppDispatch();
  // onload get offers
  useEffect(() => {
    dispatch(fetchOffers());
  }, [dispatch]);
  const offers = useAppSelector((state) => state.offers.offers);
  const authStatus = useAppSelector((state) => state.auth.authStatus);
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage offers={offers} />}
          />
          <Route path={AppRoute.Login} element={
            <PrivateRoute authorizationStatus={authStatus} reverseOperation>
              <LoginPage/>
            </PrivateRoute>
          }
          />
          <Route path={AppRoute.Offer}>
            <Route
              path=':id'
              element={<OfferPage />}
            />
          </Route>
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={authStatus}
              >
                <FavoritesPage />
              </PrivateRoute>
            }
          />
          <Route
            path='*'
            element={<PageNotFound />}
          />
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}

export default App;
