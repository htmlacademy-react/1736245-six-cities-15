import React from 'react';
import { TReview } from '../../services/types/reviews';
import CommentForm from '../comment-form/comment-from';
import ReviewsList from '../reviews-list/reviews-list';
import { useAppSelector } from '../../hooks';
import { AuthorizationStatus } from '../../services/constants';

type TReviewProps = {
  reviews: TReview[];
  id: string;
}

const Reviews = React.memo(({ reviews, id }: TReviewProps): JSX.Element => {
  const authStatus = useAppSelector((state) => state.auth.authStatus);
  return (
    <section className="offer__reviews reviews">
      <ReviewsList reviewsList={reviews} />
      {authStatus === AuthorizationStatus.Auth ? <CommentForm id={id} /> : null}
    </section>
  );
});
Reviews.displayName = 'Reviews';

export default Reviews;
