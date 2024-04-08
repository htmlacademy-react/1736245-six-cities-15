import React from 'react';
import { CITIES } from '../../services/constants';
import { TCityName } from '../../services/utils';
import CitiesItem from './cities-item';

type TCitiesListProps = {
  activeCity: TCityName;
  handleCityClick: (isSelected: boolean, newCity: TCityName) => void;
}

const CitiesList = React.memo(({ activeCity, handleCityClick }: TCitiesListProps): JSX.Element => {
  const cities = CITIES.map((item) => <CitiesItem key={item} isActive={item === activeCity} name={item} onClick={handleCityClick} />);
  return (
    <>
      <h1 className="visually-hidden">Cities</h1>
      <div className="tabs">
        <section className="locations container">
          <ul className="locations__list tabs__list">
            {cities}
          </ul>
        </section>
      </div>
    </>
  );
});
CitiesList.displayName = 'CitiesList';
export default CitiesList;
