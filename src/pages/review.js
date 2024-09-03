// pages/review.js
import React, { useState } from 'react';
import { useRouter } from 'next/router';
import Layout from '@/components/Layout';

const Review = () => {
  const router = useRouter();
  const { query } = router;
  const [review, setReview] = useState('');
  const [rating, setRating] = useState(5);

  const handleReviewChange = (event) => {
    setReview(event.target.value);
  };

  const handleRatingChange = (event) => {
    setRating(Number(event.target.value));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Here you would typically send the review data to your server
    // For example:
    // fetch('/api/submit-review', {
    //   method: 'POST',
    //   body: JSON.stringify({ productId: query.productId, review, rating }),
    // });

    alert('Review submitted!');
    router.push('/thank-you');
  };

  return (
    <Layout>
      <div style={{ padding: '20px' }}>
        <h1>Submit Your Review</h1>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Rating:
              <select value={rating} onChange={handleRatingChange}>
                {[1, 2, 3, 4, 5].map((star) => (
                  <option key={star} value={star}>{star} Star(s)</option>
                ))}
              </select>
            </label>
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label>
              Review:
              <textarea
                value={review}
                onChange={handleReviewChange}
                rows="5"
                style={{ width: '100%' }}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-primary">
            Submit Review
          </button>
        </form>
      </div>
    </Layout>
  );
};

export default Review;
