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
import { TOffer } from '../../services/types/offers';

type TAppProps = {
  offers: TOffer[];
}

function App({offers}: TAppProps) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={AppRoute.Main}
            element={<MainPage offers={offers} />}
          />
          <Route path={AppRoute.Login} element={
            <PrivateRoute authorizationStatus={AuthorizationStatus.NoAuth} reverseOperation>
              <LoginPage/>
            </PrivateRoute>
          }
          />
          <Route
            path={AppRoute.Offer}
            element={<OfferPage />}
          />
          <Route
            path={AppRoute.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.NoAuth}
              >
                <FavoritesPage offers={offers} />
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
