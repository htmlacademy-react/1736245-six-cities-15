import { TOffer } from '../../services/types/offers';
import OfferCard from '../offer-card/offer-card';
import { TCardSizes } from '../../services/types/offers';

type TOffersListProps = {
    offers: TOffer[];
    listClassName: string;
    cardSize: TCardSizes;
    handleMouseEnter?: (id: string) => void;
    handleMouseLeave?: () => void;
}

const OffersList = ({offers, listClassName, cardSize, handleMouseEnter, handleMouseLeave}: TOffersListProps) => {
  let offersList: React.ReactNode[] = [];
  //check of there are methods
  if (handleMouseEnter && handleMouseLeave) {
    offersList = offers.map((offer) => <OfferCard offer={offer} prefixClass='cities' key={offer.id} cardSizes={cardSize} onMouseEnter={() => handleMouseEnter(offer.id)} onMouseLeave={handleMouseLeave}/>);
  } else {
    offersList = offers.map((offer) => <OfferCard offer={offer} prefixClass='cities' key={offer.id} cardSizes={cardSize}/>);
  }

  return (
    <div className={listClassName}>
      {offersList}
    </div>
  );
};


export default OffersList;
