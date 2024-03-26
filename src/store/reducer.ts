import { createReducer } from '@reduxjs/toolkit';
import { CITIES } from '../services/constants';
import { changeCity, fullOffersList } from './action';
import { Offers } from '../mocks/offers';
import { TState } from '../services/types';

const initialState: TState = {
  city: CITIES[0],
  offers: Offers,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(fullOffersList, (state, action) => {
      state.offers = action.payload;
    });
});
