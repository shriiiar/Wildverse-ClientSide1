import AllFunctions from '../../Hooks/AllFunctions';
import './IndividualItems.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'

const IndividualItems = (props) => {
    const [cart, setCart, addToCart, addToPackage, DeleteItem, emptyCart, emptyPackage] = AllFunctions();
    const { img, description, name, price } = props.items;
    return (
        <div className='p-3'>
            <div className='card h-100 my-4 justify-content-center'>
                <div className="img-div">
                    <img src={img} className="img-fluid" alt="" />
                </div>
                <h5 className='my-3 text-start'>Picture Of <span className='game-name'>{name}</span></h5>
                <h5 className='text-start'>Price: $<span className='game-name'>{price}</span></h5>
                <p className='text-start fs-5'>{description}</p>
                <button onClick={() => addToCart(props.items)} className='border-0 img-btn fs-5'>Add to Cart <FontAwesomeIcon icon={faCartShopping} /></button>
            </div>
        </div>
    );
};

export default IndividualItems;