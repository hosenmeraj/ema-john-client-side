import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { addToDb, getStoreData } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import useProducts from '../hooks/useProducts';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useProducts()
    const [cart, setCart] = useState([])

    useEffect(() => {
        const storedCart = getStoreData()
        const savedCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id)
            if (addedProduct) {
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                savedCart.push(addedProduct)
            }
        }
        setCart(savedCart)
    }, [products])

    const handleAddToCard = (selectedProduct) => {
        console.log(selectedProduct);
        let newCart = [];
        const exists = cart.find(product => product.id === selectedProduct.id)
        if (!exists) {
            selectedProduct.quantity = 1
            newCart = [...cart, selectedProduct]
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id)
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists]
        }
        setCart(newCart)
        addToDb(selectedProduct.id)
    }
    return (
        <div className='shop'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} handleAddToCard={handleAddToCard}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}>
                    <Link to='/orders'>
                        <button>Review order</button>
                    </Link>
                </Cart>
            </div>
        </div>
    );
};

export default Shop;