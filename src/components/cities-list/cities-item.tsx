import { TCityName } from '../../services/utils';

type TCitiesItemProps = {
  isActive: boolean;
  name: TCityName;
  onClick: (selectCity: boolean, newCity: TCityName) => void;
}

function CitiesItem({isActive, name, onClick}: TCitiesItemProps) : JSX.Element {
  const activeClass = isActive ? ' tabs__item--active' : '';
  return (
    <li className="locations__item">
      <div className={`locations__item-link tabs__item${activeClass}`} onClick={() => onClick(isActive, name)}>
        <span>{name}</span>
      </div>
    </li>
  );
}

export default CitiesItem;
