import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('review.json')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, []);
    return (
        <div id='services' className='container my-5'>
            <h1 className='text-center text-primary my-5'>Customer Reviews</h1>
            <div className='row row-cols-1 row-cols-md-3 g-4'>
                {reviews.map(review => <Review
                    key={review.id}
                    review={review}></Review>)}
            </div>
        </div>
    );
};

export default Reviews;