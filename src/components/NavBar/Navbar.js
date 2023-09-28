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
                <li><Link className='home' to="">Home</Link></li>
                <li onMouseEnter={handleServicesHover} onMouseLeave={handleDropdownLeave}>
                    <Link className='navlink' to="">About</Link>
                    {isDropdownVisible && (
                        <div className="dropdown">
                            <Link className='dropdown-link' to="">Institute</Link>
                            <Link className='dropdown-link' to="">Leadership</Link>
                            <Link className='dropdown-link' to="">Governing council</Link>
                            <Link className='dropdown-link' to="">Priciple</Link>
                            <Link className='dropdown-link' to="">Acadamic council</Link>
                            <Link className='dropdown-link' to="">Afiliations & Approvals</Link>
                            <Link className='dropdown-link' to="">Audit statements</Link>
                        </div>
                    )}
                </li>
                <li onMouseEnter={handleServicesHover} onMouseLeave={handleDropdownLeave}>
                    <Link className='navlink' to="">Admission</Link>
                    {isDropdownVisible && (
                        <div className="dropdown">
                            <Link className='dropdown-link' to="">Admission procedures</Link>
                            <Link className='dropdown-link' to="studentRegistrationForm">Apply online</Link>
                            <Link className='dropdown-link' to="">Application form</Link>
                            <Link className='dropdown-link' to="">Who can apply</Link>
                        </div>
                    )}
                </li>
                <li onMouseEnter={handleServicesHover} onMouseLeave={handleDropdownLeave} >
                    <Link className='navlink' to="">LMS</Link>
                    {isDropdownVisible && (
                        <div className="dropdown">
                            <Link className='dropdown-link' to="">Teacher managemant system</Link>
                            <a className='dropdown-link' href="/libraryMain" target="_blank" rel="">Librari managemant system</a>
                            <Link className='dropdown-link' to="">Time table managemant system</Link>
                        </div>
                    )}
                </li>
                <li onMouseEnter={handleServicesHover} onMouseLeave={handleDropdownLeave} >
                    <Link className='navlink' to="">Grade Book Module</Link>
                    {isDropdownVisible && (
                        <div className="dropdown">
                            <Link className='dropdown-link' to="">Report card Generation (As per CBSE/IB/IGCSE/ICSE/State norms)</Link>
                            <a className='dropdown-link' href="/libraryMain" target="_blank" rel="">Online & Objective Examination</a>
                            <Link className='dropdown-link' to="">Activity marks entry</Link>
                            <Link className='dropdown-link' to="">Co-scholastic Report Card</Link>
                        </div>
                    )}
                </li>
                <li onMouseEnter={handleServicesHover} onMouseLeave={handleDropdownLeave} >
                    <Link className='navlink' to="">Finance Module</Link>
                    {isDropdownVisible && (
                        <div className="dropdown">
                            <Link className='dropdown-link' to="">Dynamic Fee plan</Link>
                            <a className='dropdown-link' href="/libraryMain" target="_blank" rel="">Advance Fee payment options</a>
                            <Link className='dropdown-link' to="">Reportsy</Link>
                        </div>
                    )}
                </li>
                <li><Link className='navlink' to="">Expenses Management</Link></li>
                <li><Link className='navlink' to="">HR Management </Link></li>
                <li><Link className='navlink' to="">Inventory Management</Link></li>
                <li><Link className='lms-icon' to=""><FaArrowRight /></Link></li>
            </ul>
        </nav>
    );
};

export default Navbar;
