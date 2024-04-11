import React,{ ChangeEvent, FormEvent, useState, useCallback, useEffect } from 'react';
import { CommentLength, RATING } from '../../services/constants';
import Rating from './rating';
import { useAppDispatch, useAppSelector } from '../../hooks';
import { sendReview } from '../../store/thunks/offers';

type TCommentForm = {
  id: string;
}

const CommentForm = React.memo(({ id }: TCommentForm): JSX.Element => {
  const dispatch = useAppDispatch();
  const [form, setForm] = useState({ rating: 0, comment: '' });
  const shouldFormBeDisabled = useAppSelector((state) => state.reviews.shouldFormBeDisabled);
  const isReviewSent = useAppSelector((state) => state.reviews.isReviewSent);
  const hasError = useAppSelector((state) => state.reviews.hasError);

  const updateCommentValue = useCallback((e: ChangeEvent<HTMLTextAreaElement>) => {
    setForm((prevForm) => ({
      ...prevForm,
      comment: e.target.value
    }));
  }, []);

  const updateRatingValue = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setForm((prevForm) => ({
      ...prevForm,
      rating: Number(e.target.value),
    }));
  }, []);

  const submitReview = useCallback((e: FormEvent) => {
    e.preventDefault();
    if (id) {
      dispatch(sendReview({ id, review: form }));
    }
  }, [id, form, dispatch, isReviewSent]);

  useEffect(() => {
    if (isReviewSent === true) {
      setForm({ rating: 0, comment: '' });
    }
  }, [isReviewSent]);

  const ratings = Object.entries(RATING).reverse().map(([key, value]) => <Rating disabled={shouldFormBeDisabled} key={key} title={key} value={value} checked={form.rating.toString() === value} onChange={updateRatingValue} />);

  const isSubmitDisabled = !(form.rating && form.comment.length >= Number(CommentLength.MIN_COMMENT_LENGTH) && form.comment.length <= Number(CommentLength.MAX_COMMENT_LENGTH));

  return (
    <form onSubmit={submitReview} className="reviews__form form" action="#" method="post" >
      {hasError && <p style={{ textAlign: 'center', fontSize: '16px', color: 'red', fontWeight: 'bold' }}>Error! Something went wrong</p>}
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {ratings}
      </div>
      <textarea disabled={shouldFormBeDisabled} className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" onChange={updateCommentValue} value={form.comment}></textarea>
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
