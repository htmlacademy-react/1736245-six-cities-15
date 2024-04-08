import {createAsyncThunk} from '@reduxjs/toolkit';
import { setError } from '../action';
import { TIMEOUT_SHOW_ERROR } from '../../services/constants';

export const clearError = createAsyncThunk(
  'data/clearError',
  (_arg, { dispatch }) => {
    setTimeout(
      () => dispatch(setError(null)),
      TIMEOUT_SHOW_ERROR,
    );
  },
);
