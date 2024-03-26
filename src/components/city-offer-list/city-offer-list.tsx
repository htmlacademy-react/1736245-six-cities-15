import { SIZES, CITIES } from '../../services/constants';
import { TOffer } from '../../services/types/offers';
import OfferList from '../offers-list/offers-list';
import { Link } from 'react-router-dom';
import { AppRoute } from '../../services/constants';

export type TCityName = typeof CITIES[number];

type TCityOfferListProps = {
  cityName: TCityName;
  offersList: TOffer[];
}

// TODO Link should navigate to specific town
const CityOfferList = ({cityName, offersList}: TCityOfferListProps) => {
  const cardSize = SIZES.favorites; // get the sizes of images for favorite cards
  return (
    <li className="favorites__locations-items">
      <div className="favorites__locations locations locations--current">
        <div className="locations__item">
          <Link to={AppRoute.Main} className="locations__item-link"><span>{cityName}</span></Link>
        </div>
      </div>
      <OfferList offers={offersList} listClassName='favorites__places' cardSize={cardSize} prefixClass={'favorites'}/>
    </li>
  );
};

export default CityOfferList;
