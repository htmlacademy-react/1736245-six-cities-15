import { useState } from 'react';
import { TOffer } from '../../services/types/offers';
import OffersList from '../offers-list/offers-list';
import { SIZES } from '../../services/constants';
import Map from '../map/map';
import { MAP_CENTER_TYPES } from '../../services/constants';
import SortBy from '../sort-by/sort-by';

type TOffersListCardProps = {
    offers: TOffer[];
}


const OfferListBlock = ({offers}: TOffersListCardProps) => {
  const [activeOfferId, setActiveOfferId] = useState<string|null>(null);

  function handleMouseEnter(id:string) {
    setActiveOfferId(id);
  }

  function handleMouseLeave() {
    setActiveOfferId(null);
  }

  return (
    <div className="cities__places-container container">
      <section className="cities__places places">
        <h2 className="visually-hidden">Places</h2>
        <b className="places__found">{offers.length} places to stay in Amsterdam</b>
        <SortBy/>
        <OffersList offers={offers} listClassName={'cities__places-list places__list tabs__content'} cardSize={SIZES.offers} prefixClass={'cities'} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>
      </section>
      <div className="cities__right-section">
        <Map activeOfferId={activeOfferId} offers={offers} prefixName={'cities'} type={MAP_CENTER_TYPES[0]}/>
      </div>
    </div>
  );
};

export default OfferListBlock;
