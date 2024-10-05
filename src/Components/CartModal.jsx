import React from 'react';

const CartModal = ({ cartItems, onClose, onRemoveFromCart }) => {
    return (
        <div className="modal">
            <div className="modal-content">
                <button className="close" onClick={onClose}>Close</button>
                <h2>My Cart</h2>
                {cartItems.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.id}>
                                <img src={item.image} alt={item.title} />
                                <p>{item.title} - ${item.price}</p>
                                <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
                            </li>
                        ))}
                    </ul>
                )}
            </div>
        </div>
    );
};

export default CartModal;