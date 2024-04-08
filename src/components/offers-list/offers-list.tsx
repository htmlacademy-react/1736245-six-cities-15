import React from 'react';
import { TOffer } from '../../services/types/offers';
import OfferCard from '../offer-card/offer-card';
import { TCardSizes } from '../../services/types/offers';

type TOffersListProps = {
    offers: TOffer[];
    listClassName: string;
    cardSize: TCardSizes;
    prefixClass: string;
    handleMouseEnter?: (id: string) => void;
    handleMouseLeave?: () => void;
}

const OffersList = React.memo(({ offers, listClassName, cardSize, prefixClass, handleMouseEnter, handleMouseLeave }: TOffersListProps): JSX.Element => {
  let offersList: React.ReactNode[] = [];
  //check of there are methods
  if (handleMouseEnter && handleMouseLeave) {
    offersList = offers.map((offer) => <OfferCard offer={offer} prefixClass={prefixClass} key={offer.id} cardSizes={cardSize} onMouseEnter={() => handleMouseEnter(offer.id)} onMouseLeave={handleMouseLeave} />);
  } else {
    offersList = offers.map((offer) => <OfferCard offer={offer} prefixClass={prefixClass} key={offer.id} cardSizes={cardSize} />);
  }

  return (
    <div className={listClassName}>
      {offersList}
    </div>
  );
});
OffersList.displayName = 'OffersList';

export default OffersList;
