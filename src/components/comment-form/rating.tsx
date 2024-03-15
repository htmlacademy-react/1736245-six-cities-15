import { ChangeEventHandler } from 'react';

type TRatingProps = { title: string;
  value: string;
  checked: boolean;
  onChange: ChangeEventHandler<HTMLInputElement>;

}

const Rating = ({value, title, checked, onChange}: TRatingProps) => (

  <>
    <input className="form__rating-input visually-hidden" name="rating" value={value} id={`${value}-stars`} type="radio" checked={checked} onChange={onChange}/>
    <label htmlFor={`${value}-stars`} className="reviews__rating-label form__rating-label" title={title}>
      <svg className="form__star-image" width="37" height="33">
        <use xlinkHref="#icon-star"></use>
      </svg>
    </label>
  </>
);

export default Rating;
