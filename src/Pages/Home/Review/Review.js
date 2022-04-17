import React from 'react';
import StarRatings from 'react-star-ratings/build/star-ratings';

const Review = (props) => {
    const { name, img, rating, review } = props.review;
    return (
        <div class="col">
            <div class="card h-100">
                <img className='w-100' src={img} alt="" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p class="card-text d-flex align-items-center"><span className='font-bold me-2'>Rating: </span> <StarRatings
                        rating={rating}
                        starRatedColor="GoldenRod"
                        starDimension="20px"
                        starSpacing="5px"
                    /><span className='ms-2'>({rating})</span></p>
                    <p class="card-text">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default Review;