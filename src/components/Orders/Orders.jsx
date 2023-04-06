import React from 'react';
import Cart from '../Cart/Cart';
import { useLoaderData } from 'react-router-dom';


const Orders = () => {
    const cart = useLoaderData()

    return (
        <div>
            <div className="shop-container">
                <div className="cart-container">
                    <h3>This is order page:{cart.length}</h3>
                </div>
                <div className="cart-container">
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </div>
    );
};

export default Orders;