import React from 'react';
import './OrderConfirmed.css';

const OrderConfirmed = () => {
    return (
        <div className='text-center mt-5' style={{color: "teal"}}>
            <h1>Thank You</h1>
            <h3 className='mt-4'>Your Order Has Been Confirmed</h3>
        </div>
    );
};

export default OrderConfirmed;