import React, { useState } from 'react';
import {Link} from 'react-router-dom';
import bootstrap from 'bootstrap';
import "./Nav.css";

const Nav = () => {
    const [toggleMenu, setToggleMenu] = useState(false);

    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <><img src={require('../images/logga_g.png')} alt="logo" /></>
            <ul className="nav-links-style">
                <li><Link style={navStyle} to="/">Home</Link></li>
                <li><Link style={navStyle} to="/About">About Us</Link></li>
                <li><Link style={navStyle} to="/Sale">Homes for sale</Link></li>
                <li><Link style={navStyle} to="/Services">Our Services</Link></li>
                <li><Link style={navStyle} to="/Blog">Blog</Link></li>
                <li><Link style={navStyle} to="/Booking">Booking</Link></li>
            <button type="button" className="new_button">Contact</button>       
            </ul>

        {/* <div> */}
        <div className="nav-small-screen">
            <i class="bi bi-list" fontSize={27} onClick={() => setToggleMenu(true)}></i>
            </div>
            
            {toggleMenu && (
            <div className="nav-small-screen-overlay">
                <i class="bi bi-x" fontSize={27} alt="close" onClick={() => setToggleMenu(false)}></i>
            <ul className="nav-small-links">
                <li><Link style={navStyle} to="/">Home</Link></li>
                <li><Link style={navStyle} to="/About">About Us</Link></li>
                <li><Link style={navStyle} to="/Sale">Homes for sale</Link></li>
                <li><Link style={navStyle} to="/Services">Our Services</Link></li>
                <li><Link style={navStyle} to="/Blog">Blog</Link></li>
                <li><Link style={navStyle} to="/Booking">Booking</Link></li>
            <button type="button" className="button_contact">Contact</button>       
            </ul>
            </div>
            )}
        </nav>
    );
}

export default Nav;
