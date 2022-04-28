import React from 'react';
import './ConfirmedOrder.css'
import ConfirmImg from '../../img/10820.jpg';

const ConfirmedOrder = () => {
    return (
        <div className='text-center' style={{margin: "70px auto", color: "teal"}}>
            <h1>Thank You</h1>
            <p className='fs-3'>Your Order Has Been Confirmed</p>
            <img src={ConfirmImg} className='img-fluid' width="500px" alt="" />
        </div>
    );
};

export default ConfirmedOrder;