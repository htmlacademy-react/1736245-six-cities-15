import { createReducer } from '@reduxjs/toolkit';
import { CITIES, SortingNames } from '../services/constants';
import { changeCity, getOffersList, sortOffers } from './action';
import { Offers } from '../mocks/offers';
import { TState } from '../services/types';

const initialState: TState = {
  city: CITIES[0],
  offers: Offers,
  activeSorting: SortingNames.Popular,
};

export const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(changeCity, (state, action) => {
      state.city = action.payload.city;
    })
    .addCase(getOffersList, (state, action) => {
      state.offers = action.payload;
    })
    .addCase(sortOffers, (state, action) => {
      state.activeSorting = action.payload;
    });
});
