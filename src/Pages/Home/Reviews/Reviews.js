import React from 'react';
import StarRatings from 'react-star-ratings/build/star-ratings';

const Reviews = (props) => {
    const { name, img, rating, review } = props.review;
    return (
        <div className="col">
            <div className="card h-100">
                <div className='d-block text-center mt-2'><img className='border border-2 border-primary rounded-circle' style={{width:'150px', height:'150px'}} src={img} alt="" /></div>
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text d-flex align-items-center"><span className='font-bold me-2'>Rating: </span> <StarRatings
                        rating={rating}
                        starRatedColor="GoldenRod"
                        starDimension="20px"
                        starSpacing="5px"
                    /><span className='ms-2'>({rating})</span></p>
                    <p className="card-text">{review}</p>
                </div>
            </div>
        </div>
    );
};

export default Reviews;