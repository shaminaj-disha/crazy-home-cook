import React, { useRef, useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useNavigate, useParams } from 'react-router-dom';

const Checkout = () => {
    const {serviceId} = useParams();
    const [agree, setAgree] = useState(false);
    const nameRef = useRef('');
    const emailRef = useRef('');
    const addressRef = useRef('');
    const phoneRef = useRef('');

    let navigate = useNavigate();

    const handleSubmit = event => {
        event.preventDefault();
        const name = nameRef.current.value;
        const email = emailRef.current.value;
        const address = addressRef.current.value;
        const phone = phoneRef.current.value;
        console.log(name, email, address, phone);
        navigate('/booking');
    }
    return (
        <div>
            <div className='container w-50 mx-auto'>
                <h2 className='text-primary text-center my-5'>Fill up the form for Service - {serviceId}</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicName">
                        <Form.Control ref={nameRef} type="text" placeholder="Your Name" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicAddress">
                        <Form.Control ref={addressRef} type="text" placeholder="Address" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicPhone">
                        <Form.Control ref={phoneRef} type="number" placeholder="Phone Number" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check onClick={() => setAgree(!agree)} className={`${agree ? '' : 'text-danger'}`} type="checkbox" label="Accept terms and conditions" />
                    </Form.Group>
                    <Button disabled={!agree} variant="primary w-50 mx-auto d-block mb-2" type="submit">Submit</Button>
                </Form>
            </div>
        </div>
    );
};

export default Checkout;