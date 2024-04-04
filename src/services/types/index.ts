
import { TCityName } from '../utils';
import { TOffer } from './offers';
import { SortingNames } from '../constants';
import { AuthorizationStatus } from '../constants';

export type TState = {
    city: TCityName;
    offers: TOffer[] | [];
    activeSorting: SortingNames;
    error?: null | string | undefined;
    authStatus: AuthorizationStatus;
    areOffersFetched: boolean;
    currentOffer?: null | TOffer;
}
