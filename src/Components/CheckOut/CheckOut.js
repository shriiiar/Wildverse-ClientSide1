import axios from 'axios';
import React, { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import AllFunctions from '../../Hooks/AllFunctions';
import { getGames, getPackages } from '../Fake Data/FakeStorage';



const CheckOut = () => {
    const axios = require('axios').default;
    const [cart, setCart, addToCart, addToPackage, DeleteItem, emptyCart, emptyPackage] = AllFunctions();
    const [email, setEmail] = useState('');
    const [name, setName] = useState('');
    const [adress, setAdress] = useState('');
    const [phoneNum, setPhoneNum] = useState('');
    const [errorMessage, setErrorMessage] = useState('');
    const navigate = useNavigate();

    const [user] = useAuthState(auth);

    const EventBlurEmail = (event) => {
        setEmail(event.target.value);
    }
    const EventBlurName = (event) => {
        setName(event.target.value);
    }
    const EventBlurAdress = (event) => {
        setAdress(event.target.value);
    }
    const EventBlurPhoneNum = (event) => {
        setPhoneNum(event.target.value);
    }
    const EventSubmit = (event) => {
        event.preventDefault();
        let products = getGames();
        const order = {
            email: user?.email,
            products: products,
            phone: phoneNum,
            adress: adress
        }
        axios.post('http://localhost:5000/order', order)
            .then(res => {
                const { data } = res;
                if (data.insertedId) {
                    toast('Your Order Has Been Confirmed');
                    event.target.reset();
                    // emptyCart();
                }
            });
    }

    const checkoutDone = (totalPrice) => {
        // emptyCart();
        // emptyPackage();
        // if (totalPrice !== 0) {
        //     navigate('/OrderConfirmed')
        // }
        // else{
        //     setErrorMessage('Cart is empty');
        // }
    }

    const data = getGames();
    const packageData = getPackages();
    let totalPrice = 0, ShippingCost = 0;
    for (let i = 0; i < data.length; i++) {
        totalPrice += data[i].price;
    }
    for (let i = 0; i < packageData.length; i++) {
        totalPrice += packageData[i].price;
    }
    ShippingCost += (data.length * 2);
    ShippingCost += (packageData.length * 2);

    return (
        <div className='form-container'>
            <div>
                <h2 className='form-title mb-5 text-center'>Check Out</h2>
                <form onSubmit={EventSubmit}>
                    <div className="input-group">
                        <label htmlFor='name'>Name</label>
                        <input value={user?.displayName} onBlur={EventBlurName} type="name" name="name" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='email'>Email</label>
                        <input value={user?.email} onBlur={EventBlurEmail} type="email" name="email" required />
                    </div>
                    <div className="input-group">
                        <label htmlFor='adress'>Adress</label>
                        <input onBlur={EventBlurAdress} type="text" name="adress" />
                    </div>
                    <div className="input-group">
                        <label htmlFor='phoneNum'>Phone Number</label>
                        <input onBlur={EventBlurPhoneNum} type="number" name="phoneNum" />
                    </div>
                    <p className='fs-5'>Total Price: $<span style={{ color: "#cf0a2c" }}>{totalPrice}</span></p>
                    <p className='fs-5'>Shipping Cost: $<span style={{ color: "#cf0a2c" }}>{ShippingCost}</span></p>
                    <p className='fs-5'>Total: $<span style={{ color: "#cf0a2c" }}>{totalPrice + ShippingCost}</span></p>
                    <p className='my-3 fs-3 text-danger'>{errorMessage}</p>
                    <input onClick={() => checkoutDone(totalPrice)} className='form-submit' type="submit" required value="Check Out" />
                </form>
            </div>
            <ToastContainer />
        </div>
    );
};

export default CheckOut;