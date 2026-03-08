import React from 'react';
import './styles/Navbar.css';
import kmu from './assets/kmu.png';

function Navbar({ onTechnologyClick }) {
    return (
        <header className='navbar'>
            <div className="logo">
                <img src={kmu} alt="Kreasi Media Utama Logo" />
            </div>
            <nav>
                <ul className='nav-links'>
                    <li><a href="#product">Product</a></li>                    
                    <li><a href="#technology" onClick={onTechnologyClick}>Technology</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </header>
    );
}

export default Navbar;
