import { AppRoute } from '../../services/constants';
import { TOffer, TCardSizes } from '../../services/types/offers';
import { Link } from 'react-router-dom';

type TOfferCardProps = {
  offer: TOffer;
  prefixClass: string;
  cardSizes: TCardSizes;
  onMouseEnter?: React.MouseEventHandler;
  onMouseLeave?: React.MouseEventHandler;
}

const OfferCard = ({offer, prefixClass, cardSizes, onMouseEnter, onMouseLeave}: TOfferCardProps) => {
  const {title, id, isFavorite, isPremium, previewImage, price, rating, type} = offer;
  // TODO check rating later
  const ratingPercent: string = `${ Math.round(+rating) * 20}%`;
  const classNamePremium: string = !isPremium ? 'place-card__mark  visually-hidden' : 'place-card__mark';
  const classNameActive = isFavorite ? 'place-card__bookmark-button--active' : 'place-card__bookmark-button';
  const {width, height} = cardSizes;

  return (
    <article
      className={`${prefixClass}__card place-card`}
      data-id={id}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <div className={classNamePremium}>
        <span>Premium</span>
      </div>
      <div className="cities__image-wrapper place-card__image-wrapper">
        <Link to={AppRoute.Offer}>
          <img className="place-card__image" src={previewImage} width={width} height={height} alt="Place image"/>
        </Link>
      </div>
      <div className="place-card__info">
        <div className="place-card__price-wrapper">
          <div className="place-card__price">
            <b className="place-card__price-value">&euro;{price}</b>
            <span className="place-card__price-text">&#47;&nbsp;night</span>
          </div>
          <button className={`place-card__bookmark-button ${classNameActive} button`} type="button">
            <svg className="place-card__bookmark-icon" width="18" height="19">
              <use xlinkHref="#icon-bookmark"></use>
            </svg>
            <span className="visually-hidden">In bookmarks</span>
          </button>
        </div>
        <div className="place-card__rating rating">
          <div className="place-card__stars rating__stars">
            <span style={{ width: ratingPercent }}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <h2 className="place-card__name">
          <Link to={AppRoute.Offer}>{title}</Link>
        </h2>
        <p className="place-card__type">{type}</p>
      </div>
    </article>
  );
};

export default OfferCard;
