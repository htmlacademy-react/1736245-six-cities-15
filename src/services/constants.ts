import { TCardSizes, TCity } from './types/offers';
import { StatusCodes } from 'http-status-codes';

export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

export type TCardInfo = {
  id: number;
  isPremium: boolean;
  src: string;
  price: number;
  description: string;
  type: string;
  isInBookmarks: boolean;
}


export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorite',
  Offer: '/offer',
} as const;

export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

export const enum TypesOfLiving {
  apartment = 'apartment',
  room = 'room',
  house = 'house',
  hotel = 'hotel'
}

export const enum Locations {
  Paris ='Paris',
  Cologne = 'Cologne',
  Brussels = 'Brussels',
  Amsterdam = 'Amsterdam',
  Hamburg = 'Hamburg',
  Dusseldorf = 'Dusseldorf'
}

export const SIZES = {
  'offers' : <TCardSizes>{
    width: '260',
    height: '200',
  },
  'favorites': <TCardSizes>{
    width: '150',
    height: '110',
  },
} as const;

export const RATING = {
  'terribly':'1',
  'badly':'2',
  'not bad':'3',
  'good':'4',
  'perfect':'5',
} as const;

export enum CommentLength {
  MIN_COMMENT_LENGTH = 50,
  MAX_COMMENT_LENGTH = 300,
}

export enum MapMarkers {
  URL_MARKER_DEFAULT = '/img/pin.svg',
  URL_MARKER_CURRENT = '/img/pin-active.svg',
}

export const MAX_GALLERY_SIZE = 6;
export const MAX_NEAREST_OFFERS_COUNT = 3;
export const MAP_CENTER_TYPES = ['city', 'offer'] as const;

export const CITIES_LIST_LOCATIONS :TCity[] = [
  {
    name: 'Paris',
    location: {
      latitude: 48.85661,
      longitude: 2.351499,
      zoom: 13
    },
  },
  {
    name: 'Cologne',
    location: {
      latitude: 50.938361,
      longitude: 6.959974,
      zoom: 13
    },
  },
  {
    name: 'Brussels',
    location: {
      latitude: 50.846557,
      longitude: 4.351697,
      zoom: 13
    },
  },
  {
    name: 'Amsterdam',
    location: {
      latitude: 52.37454,
      longitude: 4.897976,
      zoom: 13
    },
  },
  {
    name: 'Hamburg',
    location: {
      latitude: 53.550341,
      longitude: 10.000654,
      zoom: 13
    },
  },
  {
    name: 'Dusseldorf',
    location: {
      latitude: 51.225402,
      longitude: 6.776314,
      zoom: 13
    },
  },
];

export enum SortingNames {
  Popular = 'Popular',
  Low2High = 'Price: low to high',
  High2Low = 'Price: high to low',
  TopRatedFirst = 'Top rated first',
}

export const TIMEOUT = 5000;
export const TIMEOUT_SHOW_ERROR = 2000;
export const BASE_URL = 'https://15.design.htmlacademy.pro/six-cities';

export enum Endpoints {
  Offers = '/offers',
  Favorite = '/favorite',
  Login = '/login',
  Logout = '/logout',
  Comments = '/comments'
}

export const StatusCodeMapping: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: true,
  [StatusCodes.NOT_FOUND]: true
};
