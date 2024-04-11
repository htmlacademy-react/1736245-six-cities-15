import {createAction} from '@reduxjs/toolkit';
import { TCityName } from '../services/utils';
import { SortingNames } from '../services/constants';

export const changeCity = createAction<{city:TCityName}>('city/change');
export const sortOffers = createAction<SortingNames>('sorting/change');
export const setError = createAction<string | null>('error/set');
