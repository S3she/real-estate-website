import React from 'react';
import {Link} from 'react-router-dom';
import "./Navbar.css"
import ReusableButton from './ReusableButton';
import logga from './logga.png'


const Nav = () => {

    const navStyle = {
        color: 'black',
        textDecoration: 'none',
    };

    const logoStyle = {
        width: '80px',
        marginLeft: '7rem'
    }

    return (
        <nav>
            <img style={logoStyle} src={logga}/>
            <ul className="nav-links-style">
            <li><Link style={navStyle} to="/">Home</Link></li>
            <li><Link style={navStyle} to="/About">About Us</Link></li>
            <li><Link style={navStyle} to="/Sale">Homes for sale</Link></li>
            <li><Link style={navStyle} to="/Services">Our Services</Link></li>
            <li><Link style={navStyle} to="/Blog">Booking</Link></li>
            <li><Link style={navStyle} to="/Blog"><ReusableButton>Contact</ReusableButton></Link></li>
            </ul>
        </nav>
    );
}

export default Nav;
