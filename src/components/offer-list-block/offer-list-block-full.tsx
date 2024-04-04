import { TCityName } from '../../services/utils';
import { TOffer } from '../../services/types/offers';
import OffersList from '../offers-list/offers-list';
import SortBy from '../sort-by/sort-by';
import { SIZES } from '../../services/constants';
import { useAppSelector } from '../../hooks';
import { getSortedOffersList } from '../../services/utils';

type TOfferListBlockFullProps = {
  offers: TOffer[];
  activeCity: TCityName;
  handleMouseEnter: (id: string) => void;
  handleMouseLeave: () => void;
}

const OfferListBlockFull = ({offers, activeCity, handleMouseEnter, handleMouseLeave}: TOfferListBlockFullProps) => {
  const activeSorting = useAppSelector((state) => state.cities.activeSorting);
  const sortedOffers = getSortedOffersList(offers, activeSorting);
  return (
    <>
      <h2 className="visually-hidden">Places</h2>
      <b className="places__found">{offers.length} place{offers.length === 1 ? '' : 's'} to stay in {activeCity}</b>
      <SortBy activeSort={activeSorting} />
      <OffersList offers={sortedOffers} listClassName={'cities__places-list places__list tabs__content'} cardSize={SIZES.offers} prefixClass={'cities'} handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} />
    </>
  );
};

export default OfferListBlockFull;
