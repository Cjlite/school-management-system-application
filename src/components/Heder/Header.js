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
                    <Link to="/brochure" className="link"> Brochure <span><i className="fa-duotone fa-download"></i></span></Link>
                    <Link to="/careers" className="link">Careers</Link>
                    <Link to="/events" className="link">Events</Link>
                    <Link to="/committee" className="link">Committee</Link>
                    <Link to="/alumni" className="link">Alumni</Link>
                    <Link to="/grievances" className="link">Grievances</Link>
                    <Link to="/dbit-gmaps" className="link">DBIT on G-Maps</Link>
                    <Link to="/internship" className="link">Internship</Link>
                    <Link to="/virtual-tour" className="link">Virtual Tour</Link>
                    <Link to="/erp" className="link">ERP</Link>
                </p>
            </div>
            <div className='logo-container'>
                <div className="left">Logo</div>
                <div className="center">Main</div>
                <div className="right">
                    <div className='cet-code'>Code: CET : E102 || COMED-K : E041 || PGCET : B163</div>
                    <div className='Fee-admission'>
                        <div className='fee-payment'>Online Fee Payment</div>
                        <div className='admissions-link'>Admissions 2023-24</div>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Header;
