import React from 'react';
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
    const { id, name, img, description, price } = service;
    const navigate = useNavigate();
    const navigateToCheckout = id => {
        navigate(`/${id}/checkout`);
    }
    return (
        <div class="col">
            <div class="card h-100">
                <img className='w-100' src={img} alt="" />
                <div class="card-body">
                    <h5 class="card-title">{name}</h5>
                    <p>Price: {price}</p>
                    <p class="card-text">{description}</p>
                    <button onClick={() => navigateToCheckout(id)} className='btn btn-primary'>Book: {name}</button>
                </div>
            </div>
        </div>
    );
};

export default Service;