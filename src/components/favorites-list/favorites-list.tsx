import React, {useMemo} from 'react';
import { CITIES } from '../../services/constants';
import { TOffer } from '../../services/types/offers';
import CityOfferList from '../city-offer-list/city-offer-list';

type TFavoritesListProps = {
  offerList: TOffer[];
}

const FavoritesList = React.memo(({ offerList }: TFavoritesListProps): JSX.Element => {
  const cities = useMemo(() => {
    const citiesComponents: React.ReactNode[] = [];
    let offersCityList: TOffer[] = [];
    CITIES.forEach((cityName) => {
      offersCityList = offerList.filter((offer) => offer.city?.name === cityName);
      if (offersCityList.length > 0) {
        citiesComponents.push(
          <CityOfferList cityName={cityName} key={cityName} offersList={offersCityList} />
        );
      }
    });
    return citiesComponents;
  }, [offerList]);

  return (
    <ul className="favorites__list">
      {cities}
    </ul>
  );
});
FavoritesList.displayName = 'FavoritesList';
export default FavoritesList;
