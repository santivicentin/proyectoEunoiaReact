import React from 'react';
import './NavBar.css'; 
import logo from '/imgs/logo (1).png';

const CartWidget = () => {
    return (
        <div className="cart-widget">
            🛒 (0)
        </div>
    );
};


const NavBar = () => {
    return (
        <header className="navbar-eunoia">
            
            <div className="logo-container">
                <a href="/">
                    <img src={logo} alt="Eunoia Logo" className="logo" />
                </a>
            </div>

            {}
            <nav className="nav-links">
                <a href="/indumentaria" className="nav-item">INDUMENTARIA</a>
                <a href="/accesorios" className="nav-item">ACCESORIOS</a>
                <a href="/ver-todo" className="nav-item">VER TODO</a>
            </nav>

            <CartWidget />
        </header>
    );
};

export default NavBar;