import React from 'react';
import { useNavigate } from 'react-router-dom';

const Services = ({service}) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToCheckout = id => {
        navigate(`/checkout-${id}`); // navigate to dynamic url
    }
    return (
        <div className="col">
            <div className="card h-100">
                <img className='w-100' src={img} alt="" />
                <div className="card-body">
                    <h5 className="card-title">{name}</h5>
                    <p>Price: {price}</p>
                    <p className="card-text">{description}</p>
                    <button onClick={() => navigateToCheckout(id)} className='btn btn-dark'>Checkout: {name}</button>
                </div>
            </div>
        </div>
    );
};

export default Services;