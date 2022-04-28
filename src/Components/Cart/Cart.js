import React from 'react';
import { useNavigate } from 'react-router-dom';
import AllFunctions from '../../Hooks/AllFunctions';
import { getGames } from '../Fake Data/FakeStorage';
import IndividualCart from '../Individual Cart/IndividualCart';
import './Cart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import emptyCartPic from '../../img/empty cart.jpg';

const Cart = () => {
    const [cart, setCart, addToCart, addToPackage, DeleteItem, emptyCart, emptyPackage] = AllFunctions(); // getting functions from custom function
    const data = getGames();
    const navigate = useNavigate();
    const toCheckOut = () => {
        navigate('/checkout');
    }
    return (
        <div>
            <div className='row row-cols-1 row-cols-md-2 row-cols-lg-3'>
                {
                    data.map(items => <IndividualCart key={items._id} items={items} DeleteItem={DeleteItem}></IndividualCart>)
                }
            </div>
            {
                data.length !== 0 ?
                    <div className='row justify-content-center'>
                        <button className='col-12 m-3 emptyCart-btn w-50 fs-5 d-block' onClick={() => emptyCart()}>Empty Cart <FontAwesomeIcon icon={faDeleteLeft} /></button>
                        <button onClick={toCheckOut} className='col-12 checkout-btn  fs-5 w-50'>Check Out <FontAwesomeIcon icon={faCartShopping} /></button>
                    </div>
                    :
                    <div>
                        <p className='text-center fs-2' style={{color: "teal"}}>Cart is empty :(</p>
                        <img className='img-fluid d-flex mx-auto' src={emptyCartPic} width='1000px' alt="" />
                    </div>
            }
        </div >
    );
};

export default Cart;