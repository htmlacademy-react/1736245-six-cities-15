import { useState } from 'react';
import { TOffer } from '../../services/types/offers';
// import OffersList from '../offers-list/offers-list';
// import { SIZES } from '../../services/constants';
import Map from '../map/map';
import { MAP_CENTER_TYPES } from '../../services/constants';
import { TCityName } from '../../services/utils';
import OfferListBlockEmpty from './offer-list-block-empty';
import OfferListBlockFull from './offer-list-block-full';

type TOffersListCardProps = {
    offers: TOffer[];
    activeCity: TCityName;
}


const OfferListBlock = ({offers, activeCity}: TOffersListCardProps) => {
  const isEmpty: boolean = offers.length === 0;
  const [activeOfferId, setActiveOfferId] = useState<string|null>(null);
  const emptyClassName = isEmpty ? ' cities__places-container--empty' : '';
  const sectionClass = isEmpty ? 'cities__no-places' : 'cities__places places';

  function handleMouseEnter(id:string) {
    setActiveOfferId(id);
  }

  function handleMouseLeave() {
    setActiveOfferId(null);
  }

  const offersBlock : JSX.Element = isEmpty ? <OfferListBlockEmpty activeCity={activeCity}/> : <OfferListBlockFull offers={offers} activeCity={activeCity} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave}/>;

  return (
    <div className="cities">
      <div className={`cities__places-container${emptyClassName} container`}>
        <section className={sectionClass}>
          {offersBlock}
        </section>
        <div className="cities__right-section">
          {offers.length > 0 && <Map activeOfferId={activeOfferId} prefixName={'cities'} type={MAP_CENTER_TYPES[0]} cityName={activeCity}/>}
        </div>
      </div>
    </div>
  );
};

export default OfferListBlock;
