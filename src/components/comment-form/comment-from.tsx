import { ChangeEvent, FormEvent, useState } from 'react';
import { MIN_COMMENT_LENGHT, MAX_COMMENT_LENGHT, RATING } from '../../services/constants';
import Rating from './rating';
import { useAppDispatch } from '../../hooks';
import { sendReview } from '../../store/thunks/offers';

type TCommentForm = {
  id: string;
}

const CommentForm = ({id}: TCommentForm) => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({rating: 0, comment: ''});

  function handleTextChange(e:ChangeEvent<HTMLTextAreaElement>) {
    setForm({
      ...form,
      comment: e.target.value
    });
  }

  function handleRatingChange(e:ChangeEvent<HTMLInputElement>) {
    setForm({
      ...form,
      rating: Number(e.target.value)
    });
  }

  function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (id) {
      dispatch(sendReview({ id, review: form }));
    }
  }
  // TODO use Memo
  const ratings = Object.entries(RATING).reverse().map(([key, value]) => <Rating key={key} title={key} value={value} checked={form.rating.toString() >= value.toString()} onChange={handleRatingChange}/>);
  return (
    <form onSubmit={handleSubmit} className="reviews__form form" action="#" method="post" >
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratings}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={handleTextChange} value={form.comment}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button disabled={!(form.rating && form.comment.length >= MIN_COMMENT_LENGHT && form.comment.length < MAX_COMMENT_LENGHT)} className="reviews__submit form__submit button" type="submit" >Submit</button>
      </div>
    </form>
  );
};

export default CommentForm;
