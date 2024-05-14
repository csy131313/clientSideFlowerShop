import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { updateQuantity, removeFromBasket } from './OrdersSlice';

const QuantityUpdater = ({ productId, currentQuantity }) => {
    const dispatch = useDispatch();
    const basket = useSelector(state => state.order.basket);

    const handleIncrement = () => {
        const newQuantity = currentQuantity + 1;
        dispatch(updateQuantity({ _id: productId, quantity: newQuantity }));
    };

    const handleDecrement = () => {
        if (currentQuantity > 1) {
            const newQuantity = currentQuantity - 1;
            dispatch(updateQuantity({ _id: productId, quantity: newQuantity }));
        } else {
            const newQuantity = currentQuantity - 1;
            dispatch(updateQuantity({ _id: productId, quantity: newQuantity }));
            // Remove item from basket if quantity is zero
            // dispatch(removeFromBasket(productId));
        }
    };

    const handleInputChange = (e) => {
        const newQuantity = parseInt(e.target.value, 10);
        if (newQuantity === 0) {
            dispatch(removeFromBasket(productId));
        } else {
            dispatch(updateQuantity({ _id: productId, quantity: newQuantity }));
        }
    };

    return (
        <div>
            <button onClick={handleDecrement}>-</button>
            <input
                type="number"
                value={currentQuantity}
                onChange={handleInputChange}
                style={{ width: '40px', textAlign: 'center' }}
            />
            <button onClick={handleIncrement}>+</button>
        </div>
    );
};

export default QuantityUpdater;
