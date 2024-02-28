import React from 'react';
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

type TPlacesToStay = {
  placesToStay: number;
}

function App({placesToStay}: TPlacesToStay) {
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path='/'
          element={<Main placesToStay = {placesToStay} />}
        />
        <Route
          path='/login'
          element={<Login />}
        />
        <Route
          path='/offer/:id'
          element={<Offer />}
        />
        <Route
          path='/favorites'
          element={<Favorites />}
        />
        <Route
          path='*'
          element={<PageNotFound />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
