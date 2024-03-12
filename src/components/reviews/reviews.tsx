// TODO - get as props reviews from app
import { REVIEWS } from '../../mocks/reviews';
import CommentForm from '../comment-form/comment-from';
import ReviewsList from '../reviews-list/reviews-list';

const Reviews = () => {
  const isAuth = true;
  return (
    <section className="offer__reviews reviews">
      <ReviewsList reviewsList={REVIEWS}/>
      {isAuth && <CommentForm/>}
    </section>
  );
};


export default Reviews;
