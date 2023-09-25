import React, { useState } from 'react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import { FaArrowRight } from 'react-icons/fa';

const Navbar = () => {
    const [isDropdownVisible, setDropdownVisible] = useState(false);

    const handleServicesHover = () => {
        setDropdownVisible(true);
    };

    const handleDropdownLeave = () => {
        setDropdownVisible(false);
    };

    return (
        <nav>
            <ul>
                <li><Link className='home' to="/">Home</Link></li>
                <li onMouseEnter={handleServicesHover} onMouseLeave={handleDropdownLeave}>
                    <Link to="/services">About</Link>
                    {isDropdownVisible && (
                        <div className="dropdown">
                            <Link to="/service1">Service 1</Link>
                            <Link to="/service2">Service 2</Link>
                        </div>
                    )}
                </li>
                <li><Link to="/about">Academics</Link></li>
                <li><Link to="/contact">Campus Life</Link></li>
                <li><Link to="/contact">Administration</Link></li>
                <li><Link to="/contact">Research</Link></li>
                <li><Link to="/contact">Placements</Link></li>
                <li><Link to="/contact">Contact</Link></li>
                <li><Link to="/contact">Links</Link></li>
                <li><Link className='lms-icon' to="/contact"><FaArrowRight /></Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
