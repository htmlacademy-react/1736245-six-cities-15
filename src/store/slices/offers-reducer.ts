import { createSlice } from '@reduxjs/toolkit';
import { TOffer } from '../../services/types/offers';
import { fetchOffers } from '../thunks/offers';

type TState = {
    offers: TOffer[] | [];
    areOffersFetched: boolean;
    error?: null | string | undefined;
}


const initialState: TState = {
  offers: [],
  areOffersFetched: false,
  error: null,
};

export const offersSlice = createSlice({
  name: 'offers',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchOffers.pending, (state) => {
        state.areOffersFetched = true;
      })
      .addCase(fetchOffers.fulfilled, (state, action) => {
        state.offers = action.payload;
        state.areOffersFetched = false;
      })
      .addCase(fetchOffers.rejected, (state, action) => {
        state.error = action.error.message;
        state.areOffersFetched = false;
      });
  },
});

// Export reducer
export default offersSlice.reducer;
