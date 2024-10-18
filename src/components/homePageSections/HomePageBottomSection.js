import React from 'react';
import '../../assets/css/homePageSectionCSS/homePageBottomSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';

const HomePageBottomSection = () => {
    return (
        <div className='home-page-bottom-section-container'>
            <div className='row mx-0 home-page-bottom-section-content'>
                <div className='col-md-6 home-page-bottom-section-left-content'>
                    <h1>Got Legal Needs? <span>Tell Us About Them!</span></h1>
                    <p>At HagEstad Law Group, PLLC, we are here to help you with all your legal needs.</p>
                    <p>We understand that legal issues can be complex and overwhelming, but you don't have to navigate them alone!</p>

                    <div className='home-page-bottom-section-left-content-map-section'>
                        {/* Embed Google Map */}
                        <iframe
                            width="100%"
                            height="300"
                            frameBorder="0"
                            style={{ border: 0 }}
                            src={`https://www.google.com/maps/embed/v1/view?key=AIzaSyC47iPEjT2G7xSurF6OmR35wxUF2c39X-s&center=46.8797,-110.3626&zoom=5`}
                            allowFullScreen
                        />
                    </div>
                </div>
                <div className='col-md-6 home-page-bottom-section-right-content'>
                    <div className='home-page-bottom-section-right-content-box'>
                        <h3>Contact HagEstad Law Group Today!</h3>
                        <p>Discuss your legal needs with us.</p>
                        <button>Free Consultation</button>
                    </div>
                    <p className='my-5'>* Communication through our website does not establish an attorney-client relationship between you and HagEstad Law Group, PLLC</p>
                    <div className='home-page-bottom-section-contact-right-content-contact-information'>
                        <div className='home-page-bottom-section-contact-informations'>
                            <button><FontAwesomeIcon icon={faPhone} /></button>
                            <div className='home-page-bottom-section-contact-content'>
                                <small>Montana</small>
                                <p>(406) 804-6855</p>
                            </div>
                        </div>
                        <div className='home-page-bottom-section-contact-informations'>
                            <button><FontAwesomeIcon icon={faPhone} /></button>
                            <div className='home-page-bottom-section-contact-content'>
                                <small>Arizona</small>
                                <p>(623) 294-2934</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomePageBottomSection;
