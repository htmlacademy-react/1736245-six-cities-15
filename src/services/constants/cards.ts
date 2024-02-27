export type TCardInfo = {
  id: number;
  isPremium: boolean;
  src: string;
  price: number;
  description: string;
  type: string;
  isInBookmarks: boolean;
}

export const cards: TCardInfo[] = [
  {
    id: 1,
    isPremium: true,
    src: 'img/apartment-01.jpg',
    price: 120,
    description: 'Beautiful &amp; luxurious apartment at great location',
    type: 'Apartment',
    isInBookmarks: false,
  },
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
  {
    id: 5,
    isPremium: false,
    src: 'img/room.jpg',
    price: 80,
    description: 'Wood and stone place',
    type: 'Room',
    isInBookmarks: true,
  },
];
