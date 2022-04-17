import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../../hooks/useReviews';
import Banner from '../Banner/Banner';
import Reviews from '../Reviews/Reviews';
import Services from '../Services/Services';

const Home = () => {
    const [reviews] = useReviews();
    const newReviews = reviews.slice(0, 3);
    let navigate = useNavigate();
    const showAllReviews = () => {
        const path = "/reviews";
        navigate(path);
    }
    return (
        <div>
            <Banner></Banner>
            <Services></Services>
            <div id='reviews' className='container my-5'>
                <h1 className='text-center text-primary my-5'>Customer Reviews ({newReviews.length})</h1>
                <div className='row row-cols-1 row-cols-md-3 g-4'>
                    {newReviews.map(review => <Reviews
                        key={review.id}
                        review={review}></Reviews>)}
                </div>
                <div className='my-5 d-flex justify-content-center'>
                <button onClick={showAllReviews} className='btn btn-primary'>See all reviews</button>
                </div>
            </div>
        </div>
    );
};

export default Home;