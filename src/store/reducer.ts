import { combineReducers } from '@reduxjs/toolkit';
import citiesReducer from './slices/cities-reducer';
import offersReducer from './slices/offers-reducer';
import authReducer from './slices/auth-reducer';
import currentOfferReducer from './slices/current-offer-reducer';
import reviewsReducer from './slices/reviews-reducer';

const rootReducer = combineReducers({
  cities: citiesReducer,
  offers: offersReducer,
  auth: authReducer,
  currentOffer: currentOfferReducer,
  reviews: reviewsReducer
});

export default rootReducer;
