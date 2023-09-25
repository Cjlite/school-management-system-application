import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { IoDocumentTextOutline } from 'react-icons/io5';
import { FaArrowDown } from 'react-icons/fa';

const Header = () => {
    return (
        <header>
            <div className='Announcement'>
                <p className='Announcement-text'>
                    Announcement |
                    <span className="icon-container">
                        <i className="fa fa-bullhorn" aria-hidden="true"></i>
                        <Link to="" className="sliding-text-link">
                            <span className="sliding-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum is simply dummy text of the</span>
                        </Link>
                    </span>
                </p>
            </div>
            <div className='Brochure'>
                <p className='Brochure-text'>
                    Brochure <span><i class="fa-duotone fa-download"></i></span>   | Careers | Events | Committee | Alumni | Grievances | DBIT on G-Maps | Internship | Virtual Tour | ERP
                </p>
            </div>
            <div className="logo">Logo</div>
        </header>
    );
};

export default Header;
