import { CITIES } from './constants';

export type TCityName = typeof CITIES[number];

export function getRandomCity(): TCityName {
  const num = Math.floor(Math.random() * (CITIES.length));
  return CITIES[num];
}
