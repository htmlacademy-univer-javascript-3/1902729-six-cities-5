import ReviewItem from '../review-item/review-item';
import { ReviewType } from '../../types/review';

type ReviewListProps = {
  reviews: ReviewType[];
}

const ReviewList = ({reviews}: ReviewListProps): JSX.Element => (
  <ul className="reviews__list">
    {reviews.map((review) => (
      <ReviewItem key={review.id} review={review} />
    ))}
  </ul>
);

export default ReviewList;
