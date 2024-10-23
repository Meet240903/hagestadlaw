import React, { useState } from 'react';
import headerLogo from '../assets/images/headerLogo.svg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faBars, faTimes, faChevronDown, faChevronRight, faArrowRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import '../assets/css/header.css';
import { Link } from 'react-router-dom';
import ourTeamDropDownData from '../data/OurTeamDropdownData';
import practiceAreaDropDownData from '../data/PracticeAreaDropDownData';
import practiceAreaArizonaDropdownData from '../data/PracticeAreaArizonaDropdownData';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [hoveredTitle, setHoveredTitle] = useState(null); // Track hovered title
    const [ShowPracticeAreaMenu, setShowPracticeAreaMenu] = useState(false)
    const [ShowOurTeamMenu, setShowOurTeamMenu] = useState(false)
    const [ShowAeraWeServeMenu, setShowAeraWeServeMenu] = useState(false)
    // Toggle menu visibility on mobile
    const handleToggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
        setShowAeraWeServeMenu(false);
        setShowOurTeamMenu(false);
        setShowPracticeAreaMenu(false);
    };

    const areaWeServeArizonaDropDownData = [
        {
            title: "Buckeye",
            subMenuData: [
                { title: "Buckeye Estate Planning Lawyers" },
                { title: "Buckeye Estate & Probate Lawyers" },
                { title: "Buckeye Real Estate Lawyers" },
            ]
        },
        {
            title: "Phoenix",
            subMenuData: [
                { title: "Phoenix Real Estate Lawyers" },
                { title: "Phoenix Business Lawyers" },
                { title: "Phoenix Estate & Probate Lawyers" },
            ]
        },
        {
            title: "Sun City",
            subMenuData: [
                { title: "Sun City Estate Planning Lawyers" },
            ]
        },
        {
            title: "Surprise",
            subMenuData: [
                { title: "Surprise Estate Planning Lawyers" },
                { title: "Surprise Probate Lawyers" },
                { title: "Surprise Wills & Trust Lawyers" },
            ]
        },
    ]

    const areaWeServeMontanaDropDownData = [
        { title: "Billings Trusts & Estates Lawyers" },
        { title: "Butte Trusts & Estates Lawyers" },
        { title: "Great Falls Trusts & Estates Lawyers" },
        { title: "Helena Trusts & Estates Lawyers" },
        { title: "Kalispell Trusts & Estates Lawyers" },
        { title: "Missoula Trusts & Estates Lawyers" },
        { title: "Whitefish Trusts & Estates Lawyers" },
    ]

    return (
        <>
            <div className='header-page-section-container'>
                <div className='header-page-section-logo'>
                    <Link to='/' target='_top'>
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
                    <p
                        onMouseEnter={() => { setShowAeraWeServeMenu(false); setShowPracticeAreaMenu(true); setShowOurTeamMenu(false) }}
                    >Practice Area <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '10px' }} /></p>
                    <div className={`header-page-section-menu-practice-area-dropdown-box ${ShowPracticeAreaMenu ? 'practice-open' : ''}`}
                        onMouseLeave={() => setShowPracticeAreaMenu(false)}
                    >
                        <h5 className='submenu-back-button'
                            onClick={() => { setShowAeraWeServeMenu(false); setShowPracticeAreaMenu(false); setShowOurTeamMenu(false) }}
                        ><FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '12px' }} /> Back to the Menu</h5>
                        <div className='row mx-0 header-page-section-menu-practice-area-dropdown-box-content'>
                            <div className='col-md-6 header-page-section-menu-practice-area-dropdown-box-left-content'>
                                <div className='header-page-section-menu-practice-area-dropdown-box-left-inner-content'>
                                    <h3>Montana</h3>
                                    {
                                        practiceAreaDropDownData?.map((data, index) => (
                                            <Link to={`/${data?.slugs}`} key={index} target='_top' style={{ textDecoration: 'none', color: '#000' }}>
                                                <p
                                                    onMouseEnter={() => setHoveredTitle(data?.subDropDownData ? index : null)}
                                                // Set the hovered title
                                                >
                                                    {data?.title}
                                                    <FontAwesomeIcon
                                                        icon={data?.icon}
                                                        style={{
                                                            fontSize: data?.iconRotate ? '14px' : '10px',
                                                            margin: '0',
                                                            transform: data?.iconRotate ? 'rotate(-40deg)' : ''
                                                        }}
                                                    />
                                                </p>
                                                <div className='header-page-section-menu-practice-area-dropdown-box-left-content-mobile-submenu'>
                                                    {
                                                        data?.subDropDownData?.map((data, index) => (
                                                            <Link to={`/${data?.slugs}`} key={index} target='_top' style={{ textDecoration: 'none', color: '#000' }}>
                                                                <p key={index}>{data?.title} <FontAwesomeIcon icon={faArrowRight} className={`${data?.iconRotate ? 'header-right-arrow' : ''}`} style={{ fontSize: '10px', margin: '0', transform: 'rotate(-40deg)' }} /></p>
                                                            </Link>
                                                        ))
                                                    }
                                                </div>
                                            </Link>
                                        ))
                                    }
                                </div>
                                <div
                                    className={`header-page-section-menu-practice-area-dropdown-box-left-content-submenu ${hoveredTitle === null ? 'd-none' : ''}`}
                                    onMouseLeave={() => {
                                        setHoveredTitle(null); // Hide submenu when leaving
                                    }}
                                >
                                    {
                                        practiceAreaDropDownData?.map((data, index) => (
                                            hoveredTitle === index && data?.subDropDownData && ( // Check if subDropDownData exists
                                                data?.subDropDownData?.map((subData, subIndex) => (
                                                    <Link to={`/${subData?.slugs}`} key={index} target='_top' style={{ textDecoration: 'none', color: '#000' }}>
                                                        <p key={subIndex}>{subData?.title} <FontAwesomeIcon icon={faArrowRight} className={`${data?.iconRotate ? 'header-right-arrow' : ''}`} style={{ fontSize: '14px', margin: '0', transform: 'rotate(-40deg)' }} /></p>
                                                    </Link>
                                                ))
                                            )
                                        ))
                                    }
                                </div>

                            </div>
                            <div className='col-md-6 header-page-section-menu-practice-area-dropdown-box-right-content'>
                                <h3>Arizona</h3>
                                {
                                    practiceAreaArizonaDropdownData?.map((data, index) => (
                                        <Link to={`/${data?.slugs}`} key={index} target='_top' style={{ textDecoration: 'none', color: '#000' }}>
                                            <p>{data?.title} <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '14px', margin: '0', transform: 'rotate(-40deg)' }} /></p>
                                        </Link>
                                    ))
                                }
                            </div>
                        </div>
                    </div>
                    <Link to='/cases' target='_top' style={{ textDecoration: 'none', color: '#000' }}>
                        <p
                            onMouseEnter={() => { setShowPracticeAreaMenu(false); setShowOurTeamMenu(false) }}
                        >Cases</p>
                    </Link>
                    <p
                        onMouseEnter={() => { setShowAeraWeServeMenu(false); setShowOurTeamMenu(true); setShowPracticeAreaMenu(false) }}
                    >Our Team <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '10px' }} /></p>
                    <div className={`header-page-section-menu-our-team-dropdown-box ${ShowOurTeamMenu ? 'our-team-open' : ''}`}
                        onMouseLeave={() => setShowOurTeamMenu(false)}
                    >
                        <h5 className='submenu-back-button'
                            onClick={() => { setShowAeraWeServeMenu(false); setShowPracticeAreaMenu(false); setShowOurTeamMenu(false) }}
                        ><FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '12px' }} /> Back to the Menu</h5>
                        {
                            ourTeamDropDownData?.map((data, index) => (
                                <Link to={`/our-team/${data?.slugs}`} target='_top' key={index} style={{ textDecoration: 'none', color: '#000' }} onClick={() => setShowOurTeamMenu(false)}>
                                    <p>{data?.title} <FontAwesomeIcon icon={faArrowRight} className='header-right-arrow' style={{ fontSize: '14px', margin: '0', transform: 'rotate(-40deg)' }} /></p>
                                </Link>
                            ))
                        }
                        <Link to='/our-staff' target='_top' style={{ textDecoration: 'none', color: '#000' }} onClick={() => setShowOurTeamMenu(false)}>
                            <p className='fw-bold'>Our Staff <FontAwesomeIcon className='header-right-arrow' icon={faArrowRight} style={{ fontSize: '14px', margin: '0', transform: 'rotate(-40deg)' }} /></p>
                        </Link>
                    </div>
                    <p
                        onMouseEnter={() => { setShowAeraWeServeMenu(true); setShowOurTeamMenu(false); setShowPracticeAreaMenu(false) }}
                    >Areas We Serve <FontAwesomeIcon icon={faChevronDown} style={{ fontSize: '10px' }} /></p>
                    <div className={`header-page-section-menu-area-we-serve-dropdown-box ${ShowAeraWeServeMenu ? 'area-we-serve-open' : ''}`}
                        onMouseLeave={() => setShowAeraWeServeMenu(false)}
                    >
                        <h5 className='submenu-back-button'
                            onClick={() => { setShowAeraWeServeMenu(false); setShowPracticeAreaMenu(false); setShowOurTeamMenu(false) }}
                        ><FontAwesomeIcon icon={faChevronLeft} style={{ fontSize: '12px' }} /> Back to the Menu</h5>
                        <div className='row mx-0 header-page-section-menu-area-we-serve-dropdown-box-content'>
                            <div className='col-md-6 header-page-section-menu-area-we-serve-dropdown-box-left-content'>
                                <h3>Montana</h3>
                                <div className='header-page-section-menu-area-we-serve-dropdown-box-left-inner-content'>
                                    {
                                        areaWeServeMontanaDropDownData?.map((data, index) => (
                                            <p key={index}>{data?.title} <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '14px', margin: '0', transform: 'rotate(-40deg)' }} /></p>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className='col-md-6 header-page-section-menu-area-we-serve-dropdown-box-right-content'>
                                <div className='header-page-section-menu-area-we-serve-dropdown-box-right-inner-content'>
                                    <h3>Ariozona</h3>
                                    {
                                        areaWeServeArizonaDropDownData?.map((data, index) => (
                                            <div key={index}>
                                                <p
                                                    onMouseEnter={() => setHoveredTitle(data?.subMenuData ? index : null)}
                                                // Set the hovered title
                                                >
                                                    {data?.title}
                                                    <FontAwesomeIcon
                                                        icon={faChevronRight}
                                                        style={{
                                                            fontSize: data?.iconRotate ? '14px' : '10px',
                                                            margin: '0',
                                                            transform: data?.iconRotate ? 'rotate(-40deg)' : ''
                                                        }}
                                                    />
                                                </p>
                                                <div className='header-page-section-menu-practice-area-dropdown-box-left-content-mobile-submenu'>
                                                    {
                                                        data?.subMenuData?.map((data, index) => (
                                                            <p key={index}>{data?.title} <FontAwesomeIcon icon={faArrowRight} className={`${data?.iconRotate ? 'header-right-arrow' : ''}`} style={{ fontSize: '10px', margin: '0', transform: 'rotate(-40deg)' }} /></p>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                                <div
                                    className={`header-page-section-menu-area-we-serve-dropdown-box-left-content-submenu ${hoveredTitle === null ? 'd-none' : ''}`}
                                    onMouseLeave={() => {
                                        setHoveredTitle(null); // Hide submenu when leaving
                                    }}
                                >
                                    {
                                        areaWeServeArizonaDropDownData?.map((data, index) => (
                                            hoveredTitle === index && data?.subMenuData && ( // Check if subDropDownData exists
                                                data?.subMenuData?.map((subData, subIndex) => (
                                                    <p key={subIndex}>{subData?.title} <FontAwesomeIcon icon={faArrowRight} style={{ fontSize: '14px', margin: '0', transform: 'rotate(-40deg)' }} /></p>
                                                ))
                                            )
                                        ))
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to='/contact-us' target='_top' style={{ textDecoration: 'none', color: '#000' }}>
                        <p
                            onMouseEnter={() => { setShowAeraWeServeMenu(false); setShowOurTeamMenu(false); setShowPracticeAreaMenu(false) }}
                        >Contact Us</p>
                    </Link>
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
