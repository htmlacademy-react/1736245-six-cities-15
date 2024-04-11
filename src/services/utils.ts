import { CITIES, SortingNames } from './constants';
import { TOffer } from './types/offers';


export type TCityName = typeof CITIES[number];

export function getRandomCity(): TCityName {
  const num = Math.floor(Math.random() * (CITIES.length));
  return CITIES[num];
}

export function getSortedOffersList(offers: TOffer[], sortType: SortingNames): TOffer[] {
  const offersCopy = [...offers]; // Create a copy of the offers array
  switch (sortType) {
    case SortingNames.High2Low:
      return offersCopy.sort((a, b) => b.price - a.price);
    case SortingNames.Popular:
      // Assuming 'Popular' means more ratings are better
      return offersCopy.sort((a, b) => b.rating - a.rating);
    case SortingNames.Low2High:
      return offersCopy.sort((a, b) => a.price - b.price);
    case SortingNames.TopRatedFirst:
      return offersCopy.sort((a, b) => b.rating - a.rating);
    default:
      return offersCopy;
  }
}

export function getRatingWidth(rating: number): string {
  return `${rating * (100 / 5)}%`;
}

