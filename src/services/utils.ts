import { CITIES, SortingNames } from './constants';
import { TOffer } from './types/offers';


export type TCityName = typeof CITIES[number];

export function getRandomCity(): TCityName {
  const num = Math.floor(Math.random() * (CITIES.length));
  return CITIES[num];
}

export function getSortedOffersList(offers: TOffer[], sortType: SortingNames): TOffer[] {
  switch (sortType) {
    case SortingNames.High2Low:
      return offers.sort((a, b) => -(a.price - b.price));
    case SortingNames.Popular:
      return offers.sort((a, b) => a.rating - b.rating);
    case SortingNames.Low2High:
      return offers.sort((a, b) => a.price - b.price);
    case SortingNames.TopRatedFirst:
      return offers.sort((a, b) => b.rating - a.rating);
  }
}
