import { useState, ChangeEvent, Fragment, useMemo } from 'react';

const ratingTitle: { [key: string]: string } = {
  '5': 'perfect',
  '4': 'good',
  '3': 'not bad',
  '2': 'badly',
  '1': 'terribly'
};

const CommentForm = (): JSX.Element => {
  const [form, setForm] = useState({
    review: '',
    rating: ''
  });

  const isValid = useMemo(() => form.review.length >= 50 && form.rating !== '', [form.review, form.rating]);

  function handleChange(evt: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) {
    setForm((prev) => ({
      ...prev,
      [evt.target.name]: evt.target.value
    }));
  }

  return (
    <form className="reviews__form form" action="#" method="post">
      <label className="reviews__label form__label" htmlFor="review">Your review</label>
      <div className="reviews__rating-form form__rating">
        {Object.entries(ratingTitle)
          .reverse()
          .map(([score, title]) => (
            <Fragment key={score}>
              <input className="form__rating-input visually-hidden" name="rating" value={score} id={`${score}-stars`} type="radio" onChange={handleChange} checked={form.rating === score}/>
              <label htmlFor={`${score}-stars`} className="reviews__rating-label form__rating-label" title={title}>
                <svg className="form__star-image" width="37" height="33">
                  <use xlinkHref="#icon-star"></use>
                </svg>
              </label>
            </Fragment>
          ))}
      </div>
      <textarea className="reviews__textarea form__textarea" id="review" name="review" placeholder="Tell how was your stay, what you like and what can be improved" value={form.review} onChange={handleChange}></textarea>
      <div className="reviews__button-wrapper">
        <p className="reviews__help">
          To submit review please make sure to set <span className="reviews__star">rating</span> and describe your stay with at least <b className="reviews__text-amount">50 characters</b>.
        </p>
        <button className="reviews__submit form__submit button" type="submit" disabled={!isValid}>
          Submit
        </button>
      </div>
    </form>
  );
};

export default CommentForm;
