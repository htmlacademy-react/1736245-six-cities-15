import { Locations, TypesOfLiving, MAP_CENTER_TYPES } from '../constants';

export type TLocation = {
  latitude: number;
  longitude: number;
  zoom: number;
}

export type TCity = {
  name: keyof typeof Locations;
  location: {
    latitude: number;
    longitude: number;
    zoom: number;
    };
}

export type TOffer = {
  id: string;
  title: string;
  type: keyof typeof TypesOfLiving;
  price: number;
  city: TCity;
  location: TLocation;
  isFavorite: boolean;
  isPremium: boolean;
  rating: number;
  previewImage?: string;
  bedrooms?: number;
  goods?: string[];
  host?: THost;
  images?: string[];
  maxAdults?: number;
  description?: string;
};

export type THost = {
  name: string;
  avatarUrl: string;
  isPro: boolean;
  id: number;
}

export type TCardSizes = {
  width: string;
  height: string;
}

export type TMapCenterType = typeof MAP_CENTER_TYPES[number];
