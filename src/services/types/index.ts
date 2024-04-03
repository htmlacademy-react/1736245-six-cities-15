import { store } from '../../store';
import { TCityName } from '../utils';
import { TOffer } from './offers';
import { SortingNames } from '../constants';
import { AuthorizationStatus } from '../constants';

// for store
export type TAppDispatch = typeof store.dispatch;
export type TState = {
    city: TCityName;
    offers: TOffer[];
    activeSorting: SortingNames;
    error: null | string;
    authStatus: AuthorizationStatus;
    areOffersFetched: boolean;
}
