import React from 'react';
import { TOffer } from '../../services/types/offers';
import Reviews from '../reviews/reviews';
import Gallery from '../gallery/gallery';
import HostInfo from './host-info';
import Map from '../map/map';
import Goods from './goods';
import {MAP_CENTER_TYPES} from '../../services/constants';
import { TReview } from '../../services/types/reviews';
import LoadingSpinner from '../loading-spinner/loading-spinner';
import FavoriteLabel from '../ui/favorite-label';
import { getRatingWidth } from '../../services/utils';

type TSingleOfferProps = {
  offer: TOffer;
  reviews: TReview[];
}

const SingleOffer = React.memo(({ offer, reviews }: TSingleOfferProps): JSX.Element => {
  const { bedrooms, maxAdults, price, rating, title, id, goods, isPremium, isFavorite, images, host, description } = offer;
  const classNamePremium: string = !isPremium ? 'offer__mark  visually-hidden' : 'offer__mark';
  const classNameActive = isFavorite ? 'offer__bookmark-button--active' : 'offer__bookmark-button';

  if (!offer) {
    return <LoadingSpinner />;
  }

  return (
    <section className="offer">
      {images && <Gallery images={images} />}
      <div className="offer__container container">
        <div className="offer__wrapper">
          <div className={classNamePremium}>
            <span>Premium</span>
          </div>
          <div className="offer__name-wrapper">
            <h1 className="offer__name">
              {title}
            </h1>
            <FavoriteLabel id={id} isFavorite={isFavorite} className={`${classNameActive} button`} width={'31'} height={'33'} />
          </div>
          <div className="offer__rating rating">
            <div className="offer__stars rating__stars">
              <span style={{ width: getRatingWidth(rating) }}></span>
              <span className="visually-hidden">Rating</span>
            </div>
            <span className="offer__rating-value rating__value">{rating}</span>
          </div>
          <ul className="offer__features">
            <li className="offer__feature offer__feature--entire">
              Apartment
            </li>
            <li className="offer__feature offer__feature--bedrooms">
              {bedrooms} Bedrooms
            </li>
            <li className="offer__feature offer__feature--adults">
              Max {maxAdults} adults
            </li>
          </ul>
          <div className="offer__price">
            <b className="offer__price-value">&euro;{price}</b>
            <span className="offer__price-text">&nbsp;night</span>
          </div>
          <div className="offer__inside">
            <h2 className="offer__inside-title">What&apos;s inside</h2>
            {goods && <Goods goods={goods} />}
          </div>
          {host && <HostInfo host={host} description={description} />}
          <Reviews id={id} reviews={reviews} />
        </div>
      </div>
      <Map activeOfferId={id} prefixName={'offer'} type={MAP_CENTER_TYPES[1]} />
    </section>
  );
});

SingleOffer.displayName = 'SingleOffer';

export default SingleOffer;
