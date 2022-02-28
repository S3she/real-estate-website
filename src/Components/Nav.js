import React from 'react';
import {Link} from 'react-router-dom';


const Nav = () => {

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
                <Link style={navStyle} to="/Booking">
                    <li>Booking</li>
                </Link>
            </ul>
        </nav>
    );
}

export default Nav;
