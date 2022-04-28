import React from 'react';
import AllFunctions from '../../Hooks/AllFunctions';
import './IndividualCart.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

const IndividualCart = (props) => {
    const { img, description, name, price } = props.items;
    const { items, DeleteItem } = props;
    return (
        <div className='p-3'>
            <div className='card my-4 justify-content-center'>
                <div className="img-div">
                    <img src={img} className="img-fluid" alt="" />
                </div>
                <h5 className='my-3 text-start'>Picture Of <span className='game-name'>{name}</span></h5>
                <h5 className='text-start'>Price: $<span className='game-name'>{price}</span></h5>
                <p className='text-start fs-5'>{description}</p>
                <button onClick={() => DeleteItem(items)} className='border-0 img-btn fs-5'>Remove From Cart <FontAwesomeIcon icon={faDeleteLeft} /></button>
            </div>
        </div>
    );
};

export default IndividualCart;