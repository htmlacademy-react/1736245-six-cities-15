import { createSlice } from '@reduxjs/toolkit';
import { TOffer } from '../../services/types/offers';
import { fetchOffers, fetchFavorites} from '../thunks/offers';

type TState = {
    offers: TOffer[] | [];
    areOffersLoading: boolean;
    areFavoritesFetched: boolean;
    error?: null | string | undefined;
    favorites: TOffer[] | [];
}

const initialState: TState = {
  offers: [],
  areOffersLoading: false,
  areFavoritesFetched: false,
  error: null,
  favorites: [],
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.areOffersLoading = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.areOffersLoading = false;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.error = action.error.message;
        state.areOffersLoading = false;
      })
      .addCase(fetchFavorites.pending, (state) => {
        state.areFavoritesFetched = false;
      })
      .addCase(fetchFavorites.fulfilled, (state, action) => {
        state.favorites = action.payload;
        state.areFavoritesFetched = true;
      })
      .addCase(fetchFavorites.rejected, (state) => {
        state.areFavoritesFetched = false;
      });
  },
});

// Export reducer
export default offersSlice.reducer;
