import { TReview } from '../../services/types/reviews';

type TReviewProps = {
  review: TReview;
}

const Review = ({review}: TReviewProps) => {
  const {id, user, rating, comment, date} = review; // TODO format date
  const {avatarUrl, name, isPro} = user;
  const ratingPercent: string = `${ Math.round(+rating) * 20}%`;
  return(
    <li className="reviews__item" data-id={id}>
      <div className="reviews__user user">
        <div className="reviews__avatar-wrapper user__avatar-wrapper">
          <img className="reviews__avatar user__avatar" src={avatarUrl} width="54" height="54" alt="Reviews avatar"/>
        </div>
        <span className="reviews__user-name">
          {name}
        </span>
        {isPro && <span className="offer__user-status">Pro</span>}
      </div>
      <div className="reviews__info">
        <div className="reviews__rating rating">
          <div className="reviews__stars rating__stars">
            <span style={{width: ratingPercent}}></span>
            <span className="visually-hidden">Rating</span>
          </div>
        </div>
        <p className="reviews__text">
          {comment}
        </p>
        <time className="reviews__time" dateTime={date.toString()}>{date}</time>
      </div>
    </li>
  );
};

export default Review;
