import { combineReducers } from '@reduxjs/toolkit';
import citiesReducer from './slices/cities-reducer';
import offersReducer from './slices/offers-reducer';
import authReducer from './slices/auth-reducer';
import currentOfferReducer from './slices/current-offer-reducer';


const rootReducer = combineReducers({
  cities: citiesReducer,
  offers: offersReducer,
  auth: authReducer,
  currentOffer: currentOfferReducer,
});

export default rootReducer;

// import { createReducer } from '@reduxjs/toolkit';
// import { CITIES, SortingNames } from '../services/constants';
// import { changeCity, getOffersList, sortOffers, setError } from './action';
// import { TState } from '../services/types';
// import { AuthorizationStatus } from '../services/constants';
// import { fetchOffers } from './thunks/offers';

// const initialState: TState = {
//   city: CITIES[0],
//   offers: [],
//   activeSorting: SortingNames.Popular,
//   authStatus: AuthorizationStatus.NoAuth,
//   areOffersFetched: false,
//   currentOffer: null,
// };

// export const reducer = createReducer(initialState, (builder) => {
//   builder
//     .addCase(changeCity, (state, action) => {
//       state.city = action.payload.city;
//     })
//     .addCase(getOffersList, (state, action) => {
//       state.offers = action.payload;
//     })
//     .addCase(sortOffers, (state, action) => {
//       state.activeSorting = action.payload;
//     })
//     .addCase(setError, (state, action) => {
//       state.error = action.payload;
//     })
//     // Handle the async thunk lifecycle actions
//     .addCase(fetchOffers.pending, (state) => {
//       state.areOffersFetched = true;
//     })
//     .addCase(fetchOffers.fulfilled, (state, action) => {
//       state.offers = action.payload;
//       state.areOffersFetched = false;
//     })
//     .addCase(fetchOffers.rejected, (state, action) => {
//       state.areOffersFetched = false;
//       state.error = action.error.message;
//     });
// });
