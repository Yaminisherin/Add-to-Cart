import React from 'react';

const Navbar = ({ cartCount, onCartClick }) => {
    return (
        <nav>
            <h1>Cartify</h1>
            <button onClick={onCartClick}>
                Cart ({cartCount})
            </button>
        </nav>
    );
};

export default Navbar;