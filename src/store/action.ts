import {createAction} from '@reduxjs/toolkit';
import { TCityName } from '../services/utils';
import { TOffer } from '../services/types/offers';
import { SortingNames } from '../services/constants';

// const OFFERS_LOADED_STATUS = ['Unrequested', 'Loaded', 'Success', 'Error'] as const;
// export type TOfferLoadStatus = typeof OFFERS_LOADED_STATUS[number];

export const changeCity = createAction<{city:TCityName}>('city/change');
export const getOffersList = createAction<TOffer[]>('offers/full');
export const sortOffers = createAction<SortingNames>('sorting/change');

export const setError = createAction<string | null>('error/set');

// export const getOfferById = createAction<TOffer>('currentOffer/set');

