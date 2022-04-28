import React from 'react';
import { useNavigate } from 'react-router-dom';
import AllFunctions from '../../Hooks/AllFunctions';
import './IndividualPackages.css';

const IndividualPackages = (props) => {
    const [cart, setCart, addToCart, addToPackage, DeleteItem, emptyCart, emptyPackage] = AllFunctions();
    const { img, description, name, price } = props.items;
    const navigate = useNavigate();
    const TocheckOut = (item) => {
        addToPackage(item);
        navigate('/checkout');
    }
    return (
        <div className='p-3'>
            <div className='card my-4 justify-content-center'>
                <div className="img-div">
                    <img src={img} className="img-fluid" alt="" />
                </div>
                <h5 className='my-3 text-start'>Bundle: <span className='game-name'>{name}</span></h5>
                <h5 className='text-start'>Price: $<span className='game-name'>{price}</span></h5>
                <p className='text-start fs-5'>{description}</p>
                <button onClick={() => TocheckOut(props.items)} className='border-0 img-btn fs-5'>Purchase Package</button>
            </div>
        </div>
    );
};

export default IndividualPackages;