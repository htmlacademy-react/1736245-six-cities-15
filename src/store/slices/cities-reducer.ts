import { createSlice} from '@reduxjs/toolkit';
import { CITIES, SortingNames } from '../../services/constants';
import { changeCity, sortOffers } from '../action';
import { TCityName } from '../../services/utils';

type TState = {
    city: TCityName;
    activeSorting: SortingNames;
}

const initialState: TState = {
  city: CITIES[0],
  activeSorting: SortingNames.Popular,
};

export const citiesSlice = createSlice({
  name: 'cities',
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder
      .addCase(changeCity, (state, action) => {
        state.city = action.payload.city;
      })
      .addCase(sortOffers, (state, action) => {
        state.activeSorting = action.payload;
      });
  }
});


// Export reducer
export default citiesSlice.reducer;

