import React from 'react'
import '../assets/css/footer.css'
import footerLogo from '../assets/images/footerLogo.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    const montanaData = [
        { content: "Trusts & Estates Attorney in Helena, MT" },
        { content: "Trusts & Estates Attorney In Butte, MT" },
        { content: "Trusts & Estates Attorney in Kalispell, MT" },
        { content: "Trusts & Estates Attorney in Missoula, MT" },
        { content: "Trusts & Estates Attorney In Great Falls, MT" },
        { content: "Trusts & Estates Attorney in Hamilton, MT" },
        { content: "Trusts & Estates Attorney in Bozeman, MT" },
        { content: "Trusts & Estates Attorney In Billings, MT" },
        { content: "Seasoned Trusts & Estates Attorney in Polson, MT" },
        { content: "Trusts & Estates Attorney in Bigfork, MT" },
        { content: "Trusts & Estates Attorney in Whitefish, MT" },
    ]
    const arizonaData = [
        { content: "Phoenix Estate & Probate Lawyers" },
        { content: "Phoenix Business Lawyers" },
        { content: "Phoenix Real Estate Lawyers" },
        { content: "Buckeye Estate Planning Lawyers" },
        { content: "Buckeye Probate & Estate Lawyers" },
        { content: "Buckeye Real Estate Lawyers" },
        { content: "Surprise Estate Planning Attorneys" },
        { content: "Surprise Probate Lawyers" },
        { content: "Surprise Wills & Trust Attorneys" },
        { content: "Sun City Estate Lawyers" },
    ]
    return (
        <>
            <div className='footer-page-section-container'>
                <div className='row mx-0 footer-page-section-main-content'>
                    <div className='col-md-2 footer-page-section-main-left-content'>
                        <img src={footerLogo} className='img-fluid' alt='footer-logo' />
                        <div className='footer-page-section-main-left-menu-content'>
                            <p>Blog</p>
                            <p>Contact Us</p>
                        </div>
                        <button><FontAwesomeIcon icon={faFacebookF} /></button>
                    </div>
                    <div className='col-md-8 footer-page-section-main-middle-content'>
                        <h1>Featured Legal Services</h1>
                        <h4>In Montana:</h4>
                        <div className='footer-page-section-main-middle-inner-content'>
                            {
                                montanaData?.map((data, index) => (
                                    <p key={index}>{data?.content}</p>
                                ))
                            }
                        </div>
                        <h4>In Arizona:</h4>
                        <div className='footer-page-section-main-middle-inner-content1'>
                            {
                                arizonaData?.map((data, index) => (
                                    <p key={index}>{data?.content}</p>
                                ))
                            }
                        </div>
                        <div className='footer-page-section-main-left-mobile-menu-content'>
                            <p>Blog</p>
                            <p>Contact Us</p>
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
                        <p>Legal Disclaimer</p>
                        <p>Privacy Policy</p>
                    </div>
                    <p>Powered by Grow Law Firm Marketing Agency</p>
                </div>
            </div>
        </>
    )
}

export default Footer
