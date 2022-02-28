import React from 'react';
import {Link} from 'react-router-dom';

const Nav = () => {

    const navStyle = {
        color: 'white'
    };

    return (
        <nav>
            <h3>Logo</h3>
            <ul className="nav-links-style">
            <li><Link style={navStyle} to="/">Home</Link></li>
            <li><Link style={navStyle} to="/About">About Us</Link></li>
            <li><Link style={navStyle} to="/Sale">Homes for sale</Link></li>
            <li><Link style={navStyle} to="/Services">Our Services</Link></li>
            <li><Link style={navStyle} to="/Blog">Contact</Link></li>
                <Link style={navStyle} to="/Booking">
                    <li>Booking</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
