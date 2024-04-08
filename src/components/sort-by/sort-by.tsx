import React, { useState, useCallback } from 'react';
import { useAppDispatch } from '../../hooks';
import { SortingNames } from '../../services/constants';
import { sortOffers } from '../../store/action';

type TSortingItemProps = {
  name: SortingNames;
  onClick: (newItem: SortingNames) => void;
  isActive: boolean;
}

type TSortByProps = {
  activeSort: SortingNames;
}

const SortingItem = React.memo(({ name, onClick, isActive }: TSortingItemProps): JSX.Element => {
  const className = isActive ? ' places__option--active' : '';
  return <li onClick={() => onClick(name)} className={`places__option${className}`} tabIndex={0}>{name}</li>;
});

const SortBy = React.memo(({ activeSort }: TSortByProps): JSX.Element => {
  const dispatch = useAppDispatch();
  const [isOpened, setIsOpened] = useState(false);
  const listClassName = isOpened ? 'places__options--opened' : 'places__options--closed';

  const openList = () => {
    setIsOpened(!isOpened);
  };

  const changeOffersBySortingName = useCallback((sortingItem: SortingNames) => {
    dispatch(sortOffers(sortingItem));
  }, [dispatch]);

  const sorting = Object.values(SortingNames).map((name) => <SortingItem name={name} key={name} isActive={activeSort === name} onClick={changeOffersBySortingName} />);
  return (
    <form className="places__sorting" action="#" method="get" onClick={openList}>
      <span className="places__sorting-caption">Sort by</span>
      <span className="places__sorting-type" tabIndex={0}>
        {activeSort}
        <svg className="places__sorting-arrow" width="7" height="4">
          <use xlinkHref="#icon-arrow-select"></use>
        </svg>
      </span>
      <ul className={`places__options places__options--custom ${listClassName}`}>
        {sorting}
      </ul>
    </form>
  );
});

SortingItem.displayName = 'SortingItem';
SortBy.displayName = 'SortBy';
export default SortBy;
