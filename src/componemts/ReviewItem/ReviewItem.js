import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const { handleProductRemove, product } = props
    const { name, price, shipping, img, quantity } = props.product
    return (
        <div className='reivew-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-detail-container">
                <div className="review-item-detail">
                    <p className='product-name' title={name}>
                        {name.length > 20 ? name.slice(0, 20) + '...' : name}
                    </p>
                    <p><span>Price: {price}</span></p>
                    <p><small>Shipping: {shipping}</small></p>
                    <p><small>Quantity: {quantity}</small></p>
                </div>
                <div className="delete-item">
                    <button onClick={() => handleProductRemove(product)} className='delete-button'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;