import { TCardSizes, TCity } from './types/offers';

// cities names
export const CITIES = ['Paris', 'Cologne', 'Brussels', 'Amsterdam', 'Hamburg', 'Dusseldorf'];

// TODO - delete these cards
// cards
export type TCardInfo = {
  id: number;
  isPremium: boolean;
  src: string;
  price: number;
  description: string;
  type: string;
  isInBookmarks: boolean;
}


export const CARDS_ON_OFFER: TCardInfo[] = [
  {
    id: 2,
    isPremium: false,
    src: 'img/room.jpg',
    price: 80,
    description: 'Wood and stone place',
    type: 'Room',
    isInBookmarks: true,
  },
  {
    id: 3,
    isPremium: false,
    src: 'img/apartment-02.jpg',
    price: 132,
    description: 'Canal View Prinsengracht',
    type: 'Apartment',
    isInBookmarks: false,
  },
  {
    id: 4,
    isPremium: true,
    src: 'img/apartment-03.jpg',
    price: 180,
    description: 'Nice, cozy, warm big bed apartment',
    type: 'Apartment',
    isInBookmarks: false,
  },
];


// offer gallery pics
type TOfferGallery = {
  id: number;
  src: string;
};

export const OFFER_GALLERY: TOfferGallery[] = [
  {
    'id': 1,
    'src': 'img/room.jpg'
  },
  {
    'id': 2,
    'src': 'img/apartment-01.jpg'
  },
  {
    'id': 3,
    'src': 'img/apartment-02.jpg'
  },
  {
    'id': 4,
    'src': 'img/apartment-03.jpg'
  },
  {
    'id': 5,
    'src': 'img/studio-01.jpg'
  },
  {
    'id': 6,
    'src': 'img/apartment-01.jpg'
  }
];


// routes on website
export const AppRoute = {
  Main: '/',
  Login: '/login',
  Favorites: '/favorites',
  Offer: '/offer/:id'
} as const;

// private routing
export enum AuthorizationStatus {
  Auth = 'AUTH',
  NoAuth = 'NO_AUTH',
  Unknown = 'UNKNOWN',
}

// types of living available on offer
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

// sizes of image cards depending on the page
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

// TODO - ?
export const RATING = {
  'terribly':'1',
  'badly':'2',
  'not bad':'3',
  'good':'4',
  'perfect':'5',
} as const;

// limitations for comment form
export const MIN_COMMENT_LENGHT = 50;
export const MAX_COMMENT_LENGHT = 300;


// Default city for leaflet map
export const DEFAULT_CITY: TCity = {
  name: 'Amsterdam',
  location: {
    latitude: 52.37454,
    longitude: 4.897976,
    zoom: 13
  },
} as const;

// leaflet markers
export const URL_MARKER_DEFAULT = '/img/pin.svg';
export const URL_MARKER_CURRENT = '/img/pin-active.svg';

// single offer (OfferPage)
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
