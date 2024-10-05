import React, { useState, useEffect } from 'react';
import ProductList from './Components/ProductList';
import Navbar from './Components/Navbar';
import CartModal from './Components/CartModal';

function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
            .catch(err => console.error(err));
    }, []);

    const addToCart = (product) => {
        if (cart.find(item => item.id === product.id)) {
            alert('Item already added to the cart');
        } else {
            setCart([...cart, product]);
        }
    };

    const removeFromCart = (productId) => {
        setCart(cart.filter(item => item.id !== productId));
    };

    return (
        <div>
            <Navbar cartCount={cart.length} onCartClick={() => setShowModal(true)} />
            <ProductList products={products} onAddToCart={addToCart} />
            {showModal && (
                <CartModal
                    cartItems={cart}
                    onClose={() => setShowModal(false)}
                    onRemoveFromCart={removeFromCart}
                />
            )}
        </div>
    );
}

export default App;