import React from 'react';
import { Link, BrowserRouter} from 'react-router-dom';
import './header.css';

const Header = () => (
    <div className="header navbar navbar-dark bg-dark shadow-sm">
        <div className="container d-flex justify-content-between">
        <BrowserRouter>
            <Link className="navbar-brand d-flex align-items-center" to={'/'}>Shop</Link>
            <Link className="shopping-cart-button btn btn-outline-secondary my-2" to='/cart'>
               Shopping Cart
            </Link>
            
        </BrowserRouter>
        </div>
    </div>
    
);

export default Header;

