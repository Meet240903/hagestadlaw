import React from 'react'
import '../assets/css/footer.css'
import footerLogo from '../assets/images/footerLogo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { Link } from 'react-router-dom'

const Footer = () => {
    const montanaData = [
        { content: "Trusts & Estates Attorney in Helena, MT", slugs: "helena-trusts-estates" },
        { content: "Trusts & Estates Attorney In Butte, MT", slugs: "butte-trusts-estates" },
        { content: "Trusts & Estates Attorney in Kalispell, MT", slugs: "kalispell-trusts-estates" },
        { content: "Trusts & Estates Attorney in Missoula, MT", slugs: "missoula-trusts-estates" },
        { content: "Trusts & Estates Attorney In Great Falls, MT", slugs: "great-falls-trusts-estates" },
        { content: "Trusts & Estates Attorney in Hamilton, MT", slugs: "missoula-trusts-estates" },
        { content: "Trusts & Estates Attorney in Bozeman, MT", slugs: "kalispell-trusts-estates" },
        { content: "Trusts & Estates Attorney In Billings, MT", slugs: "billings-trusts-estates" },
        { content: "Seasoned Trusts & Estates Attorney in Polson, MT", slugs: "helena-trusts-estates" },
        { content: "Trusts & Estates Attorney in Bigfork, MT", slugs: "butte-trusts-estates" },
        { content: "Trusts & Estates Attorney in Whitefish, MT", slugs: "whitefish-trusts-estates" },
    ]
    const arizonaData = [
        { content: "Phoenix Estate & Probate Lawyers", slugs: "phoenix-estate-probate-lawyers" },
        { content: "Phoenix Business Lawyers", slugs: "phoenix-business-lawyers" },
        { content: "Phoenix Real Estate Lawyers", slugs: "phoenix-real-estate-lawyers" },
        { content: "Buckeye Estate Planning Lawyers", slugs: "buckeye-estate-planning" },
        { content: "Buckeye Probate & Estate Lawyers", slugs: "buckeye-probate-estate-planning-attorneys" },
        { content: "Buckeye Real Estate Lawyers", slugs: "buckeye-real-estate-lawyers" },
        { content: "Surprise Estate Planning Attorneys", slugs: "surprise-arizona-estate-planning-attorneys" },
        { content: "Surprise Probate Lawyers", slugs: "surprise-probate-attorneys" },
        { content: "Surprise Wills & Trust Attorneys", slugs: "surprise-wills-trusts-attorneys" },
        { content: "Sun City Estate Lawyers", slugs: "sun-city-wills-trusts-and-estates-attorneys" },
    ]
    return (
        <>
            <div className='footer-page-section-container'>
                <div className='row mx-0 footer-page-section-main-content'>
                    <div className='col-md-2 footer-page-section-main-left-content'>
                        <Link to='/' target='_top'>
                            <img src={footerLogo} className='img-fluid' alt='footer-logo' />
                        </Link>
                        <div className='footer-page-section-main-left-menu-content'>
                            <Link to='/blog' style={{ color: '#000', textDecoration: 'none' }} target='_top'>
                                <p>Blog</p>
                            </Link>
                            <Link to='/contact-us' style={{ color: '#000', textDecoration: 'none' }} target='_top'>
                                <p>Contact Us</p>
                            </Link>
                        </div>
                        <button><FontAwesomeIcon icon={faFacebookF} /></button>
                    </div>
                    <div className='col-md-8 footer-page-section-main-middle-content'>
                        <h1>Featured Legal Services</h1>
                        <h4>In Montana:</h4>
                        <div className='footer-page-section-main-middle-inner-content'>
                            {
                                montanaData?.map((data, index) => (
                                    <Link to={`/${data?.slugs}`} style={{ color: '#000', textDecoration: 'none' }} target='_top' key={index}>
                                        <p>{data?.content}</p>
                                    </Link>
                                ))
                            }
                        </div>
                        <h4>In Arizona:</h4>
                        <div className='footer-page-section-main-middle-inner-content1'>
                            {
                                arizonaData?.map((data, index) => (
                                    <Link to={`/${data?.slugs}`} style={{ color: '#000', textDecoration: 'none' }} target='_top' key={index}>
                                        <p>{data?.content}</p>
                                    </Link>
                                ))
                            }
                        </div>
                        <div className='footer-page-section-main-left-mobile-menu-content'>
                            <Link to='/blog' style={{ color: '#000', textDecoration: 'none' }} target='_top'>
                                <p>Blog</p>
                            </Link>
                            <Link to='/contact-us' style={{ color: '#000', textDecoration: 'none' }} target='_top'>
                                <p>Contact Us</p>
                            </Link>
                        </div>
                    </div>
                    <div className='col-md-2 footer-page-section-main-right-content'>
                        <div className='footer-page-section-main-right-inner-content'>
                            <h1>Montana Office:</h1>
                            <a href='#'>2425 West Central Avenue, Suite 200
                                Missoula, MT 59801</a><br />
                            <small>(406) 804-6855</small>
                        </div>
                        <div className='footer-page-section-main-right-inner-content'>
                            <h1>Arizona Office:</h1>
                            <a href='#'>15331 W. Bell Rd, Ste 322 Surprise, AZ 85374</a><br />
                            <small>(623) 244-4587</small>
                        </div>
                    </div>
                </div>
                <div className='footer-page-section-bottom-content'>
                    <p>© 2024 HagEstad Law Group, PLLC.</p>
                    <div className='footer-page-section-bottom-inner-content'>
                        <Link to='/disclaimer' style={{ color: 'gray', textDecoration: 'none' }} target='_top'>
                            <p>Legal Disclaimer</p>
                        </Link>
                        <Link to='/privacy-policy' style={{ color: 'gray', textDecoration: 'none' }} target='_top'>
                            <p>Privacy Policy</p>
                        </Link>
                    </div>
                    <p>Powered by Grow Law Firm Marketing Agency</p>
                </div>
            </div>
        </>
    )
}

export default Footer
