import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../images/Logo.svg'
import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <nav>
                <img src={logo} alt="" />

            </nav>
            <div>
                <Link to="/shop">Shop</Link>
                <Link to="/orders">Oders</Link>
                <Link to="/inventory">Inventory</Link>
                <Link to="/about">About</Link>
            </div>
        </div>
    );
};

export default Header;