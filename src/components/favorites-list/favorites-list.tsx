import { CITIES } from '../../services/constants';
import { TOffer } from '../../services/types/offers';
import CityOfferList from '../city-offer-list/city-offer-list';

type TFavoritesListProps = {
  offerList: TOffer[];
}

const FavoritesList = ({offerList}: TFavoritesListProps) => {
  const cities: React.ReactNode[] = [];
  let offersCityList: TOffer[] = [];
  CITIES.forEach((cityName) => {
    offersCityList = offerList.filter((offer) => offer.city?.name === cityName);
    if (offersCityList.length > 0) {
      cities.push(
        <CityOfferList cityName={cityName} key={cityName} offersList={offersCityList}/>
      );
    }
  });

  return (
    <ul className="favorites__list">
      {cities}
    </ul>
  );
};

export default FavoritesList;
