import { TReview } from '../../services/types/reviews';
import Review from '../review/review';

type TReviewsListProps = {
  reviewsList: TReview[];
}

const ReviewsList = ({reviewsList}: TReviewsListProps) => (
  <>
    <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsList.length}</span></h2>
    <ul className="reviews__list">
      {reviewsList.map((review) => <Review key={review.id} review={review}/>)}
    </ul>
  </>
);

export default ReviewsList;
