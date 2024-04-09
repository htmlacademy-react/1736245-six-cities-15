import React from 'react';
import { TCityName } from '../../services/utils';

type TCitiesItemProps = {
  isActive: boolean;
  name: TCityName;
  onClick: (selectCity: boolean, newCity: TCityName) => void;
}

const CitiesItem = React.memo(({ isActive, name, onClick }: TCitiesItemProps): JSX.Element => {
  const activeClass = isActive ? ' tabs__item--active' : '';
  return (
    <li className="locations__item">
      <div className={`locations__item-link tabs__item ${activeClass}`} onClick={() => onClick(isActive, name)}>
        <span>{name}</span>
      </div>
    </li>
  );
});
CitiesItem.displayName = 'CitiesItem';
export default CitiesItem;
