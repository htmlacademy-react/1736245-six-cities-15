import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Main from '../../pages/main/main';
import Login from '../../pages/login/login';
import Offer from '../../pages/offer/offer';
import Favorites from '../../pages/favorites/favorites';
import PageNotFound from '../../pages/page-not-found/page-not-found';
import { HelmetProvider } from 'react-helmet-async';
import {APP_ROUTE, AuthorizationStatus} from '../../services/constants';
import PrivateRoute from '../private-route/private-route';

type TPlacesToStay = {
  placesToStay: number;
}

function App({placesToStay}: TPlacesToStay) {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route
            path={APP_ROUTE.Main}
            element={<Main placesToStay = {placesToStay} />}
          />
          {/* Login мы тоже кладем в PrivateRoute, но с флагом reverse,
          таким образом, если был вход в приложение, то мы не попадем на старницу логина, а перейдем на главную */}
          <Route
            path={APP_ROUTE.Login}
            element={<Login />}
          />
          <Route
            path={APP_ROUTE.Offer}
            element={<Offer />}
          />
          <Route
            path={APP_ROUTE.Favorites}
            element={
              <PrivateRoute
                authorizationStatus={AuthorizationStatus.Auth}
              >
                <Favorites />
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
