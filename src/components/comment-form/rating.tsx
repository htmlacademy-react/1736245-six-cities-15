import React, { ChangeEventHandler } from 'react';

type TRatingProps = { title: string;
  value: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;
  disabled: boolean;
}

const Rating = React.memo(({ disabled,value, title, checked, onChange }: TRatingProps): JSX.Element => (

  <>
    <input disabled={disabled} className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" checked={checked} onChange={onChange} />
    <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  </>
));
Rating.displayName = 'Rating';
export default Rating;
