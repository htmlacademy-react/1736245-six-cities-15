import React, {useMemo} from 'react';
import { TReview } from '../../services/types/reviews';
import Review from '../review/review';

type TReviewsListProps = {
  reviewsList: TReview[];
}

const ReviewsList = React.memo(({ reviewsList }: TReviewsListProps): JSX.Element => {
  const sortedReviews = useMemo(() => {
    const limitedReviews = reviewsList.slice(0, 10);
    return limitedReviews.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
  }, [reviewsList]);

  return (
    <>
      <h2 className="reviews__title">Reviews &middot; <span className="reviews__amount">{reviewsList.length}</span></h2>
      <ul className="reviews__list">
        {sortedReviews.map((review) => <Review key={review.id} review={review} />)}
      </ul>
    </>
  );
});
ReviewsList.displayName = 'ReviewsList';
export default ReviewsList;
