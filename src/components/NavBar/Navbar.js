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
                    <Link className='navlink' to="/services">About</Link>
                    {isDropdownVisible && (
                        <div className="dropdown">
                            <Link className='dropdown-link' to="/service1">Institute</Link>
                            <Link className='dropdown-link' to="/service2">Leadership</Link>
                            <Link className='dropdown-link' to="/service2">Governing council</Link>
                            <Link className='dropdown-link' to="/service2">Priciple</Link>
                            <Link className='dropdown-link' to="/service2">Acadamic council</Link>
                            <Link className='dropdown-link' to="/service2">Afiliations & Approvals</Link>
                            <Link className='dropdown-link' to="/service2">Audit statements</Link>
                        </div>
                    )}
                </li>
                <li onMouseEnter={handleServicesHover} onMouseLeave={handleDropdownLeave}>
                    <Link className='navlink' to="/about">Admission</Link>
                    {isDropdownVisible && (
                        <div className="dropdown">
                            <Link className='dropdown-link' to="/service1">Admission procedures</Link>
                            <Link className='dropdown-link' to="/service1">Apply online</Link>
                            <Link className='dropdown-link' to="/service1">Application form</Link>
                            <Link className='dropdown-link' to="/service1">Who can apply</Link>
                        </div>
                    )}
                </li>
                <li onMouseEnter={handleServicesHover} onMouseLeave={handleDropdownLeave} >
                    <Link className='navlink' to="/contact">LMS</Link>
                    {isDropdownVisible && (
                        <div className="dropdown">
                            <Link className='dropdown-link' to="/service1">Teacher managemant system</Link>
                            <Link className='dropdown-link' to="/service1">Library managemant system</Link>
                            <Link className='dropdown-link' to="/service1">Time table managemant system</Link>
                        </div>
                    )}
                </li>
                <li><Link className='navlink' to="/contact">Administration</Link></li>
                <li><Link className='navlink' to="/contact">Expenses Management</Link></li>
                <li><Link className='navlink' to="/contact">Research</Link></li>
                <li><Link className='navlink' to="/contact">Placements</Link></li>
                <li><Link className='navlink' to="/contact">Contact</Link></li>
                <li><Link className='navlink' to="/contact">Links</Link></li>
                <li><Link className='navlink' className='lms-icon' to="/contact"><FaArrowRight /></Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
