import React from 'react';
import { TCityName } from '../../services/utils';

type TOfferListBlockEmptyProps = {
  activeCity: TCityName;
}

const OfferListBlockEmpty = React.memo(({ activeCity }: TOfferListBlockEmptyProps): JSX.Element => (
  <div className="cities__status-wrapper tabs__content">
    <b className="cities__status">No places to stay available</b>
    <p className="cities__status-description">We could not find any property available at the moment in {activeCity}</p>
  </div>
));
OfferListBlockEmpty.displayName = 'OfferListBlockEmpty';
export default OfferListBlockEmpty;
