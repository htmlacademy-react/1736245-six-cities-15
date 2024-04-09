import React,{ ChangeEvent, FormEvent, useState, useCallback } from 'react';
import { MIN_COMMENT_LENGTH, MAX_COMMENT_LENGTH, RATING } from '../../services/constants';
import Rating from './rating';
import { useAppDispatch } from '../../hooks';
import { sendReview } from '../../store/thunks/offers';

type TCommentForm = {
  id: string;
}

const CommentForm = React.memo(({ id }: TCommentForm): JSX.Element => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({ rating: 0, comment: '' });

  const handleTextChange = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setForm((prevForm) => ({
      ...prevForm,
      comment: e.target.value
    }));
  }, []);

  const handleRatingChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => ({
      ...prevForm,
      rating: Number(e.target.value),
    }));
  }, []);

  const handleSubmit = useCallback((e: FormEvent) => {
    e.preventDefault();
    if (id) {
      dispatch(sendReview({ id, review: form }));
      setForm({ rating: 0, comment: '' });
    }
  }, [id, form, dispatch]);

  const ratings = Object.entries(RATING).reverse().map(([key, value]) => <Rating key={key} title={key} value={value} checked={form.rating.toString() >= value.toString()} onChange={handleRatingChange} />);

  const isSubmitDisabled = !(form.rating && form.comment.length >= MIN_COMMENT_LENGTH && form.comment.length <= MAX_COMMENT_LENGTH);

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
        <button disabled={isSubmitDisabled} className="reviews__submit form__submit button" type="submit" >Submit</button>
      </div>
    </form>
  );
});
CommentForm.displayName = 'CommentForm';
export default CommentForm;
