import React, { useState } from 'react';
import headerLogo from '../assets/images/headerLogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/header.css';
import { Link } from 'react-router-dom';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    // Toggle menu visibility on mobile
    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <>
            <div className='header-page-section-container'>
                <div className='header-page-section-logo'>
                    <Link to='/'>
                        <img src={headerLogo} className='img-fluid' alt='header-logo' />
                    </Link>
                </div>
                <div className='header-page-section-mobile-contact-informations'>
                    <button><FontAwesomeIcon icon={faPhone} /></button>
                    <div className='header-page-section-contact-content'>
                        <small>MT</small>
                    </div>
                </div>
                <div className='header-page-section-mobile-contact-informations'>
                    <button><FontAwesomeIcon icon={faPhone} /></button>
                    <div className='header-page-section-contact-content'>
                        <small>AZ</small>
                    </div>
                </div>
                <button className="mobile-menu-toggle" onClick={handleToggleMenu}>
                    <FontAwesomeIcon icon={isMenuOpen ? faTimes : faBars} />
                </button>
                <div className={`header-page-section-menu-content ${isMenuOpen ? 'open' : ''}`}>
                    <p>Practice Area</p>
                    <p>Cases</p>
                    <p>Our Team</p>
                    <p>Areas We Serve</p>
                    <p>Contact Us</p>
                    <div className='header-page-section-mobile-button'>
                        <button>Free Consultation</button>
                    </div>
                </div>
                <div className='header-page-section-contact-informations'>
                    <button><FontAwesomeIcon icon={faPhone} /></button>
                    <div className='header-page-section-contact-content'>
                        <small>Montana</small>
                        <p>(406) 804-6855</p>
                    </div>
                </div>
                <div className='header-page-section-contact-informations'>
                    <button><FontAwesomeIcon icon={faPhone} /></button>
                    <div className='header-page-section-contact-content'>
                        <small>Arizona</small>
                        <p>(623) 294-2934</p>
                    </div>
                </div>
                <div className='header-page-section-button'>
                    <button>Free Consultation</button>
                </div>
            </div>
        </>
    );
};

export default Header;
