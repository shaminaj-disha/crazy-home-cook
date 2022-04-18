import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Shared/Loading/Loading';

const Booking = () => {
    const [user, loading, error] = useAuthState(auth);
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || "/";
    let errorElement;
    if (loading) {
        return <Loading></Loading>
    }
    if (!user) {
        navigate(from, { replace: true });
    }
    if(error){
        errorElement = <p className='text-danger'>Error: {error?.message}</p>

    }
    return (
        <div className='text-center my-5'>
            <h2>Thank you for the booking, <span className='text-primary'>{user?.displayName}</span></h2>
            {errorElement}
        </div>
    );
};

export default Booking;