import React from 'react';
import '../../assets/css/homePageSectionCSS/homePageBottomSection.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import contactUsPageImg from '../../assets/images/contactUsPageImg1.png'

const HomePageBottomSection = ({ formData, content1, content2, bgColor }) => {
    return (
        <div className='home-page-bottom-section-container'
            style={{ backgroundColor: bgColor ? bgColor : '' }}
        >
            <div className='row mx-0 home-page-bottom-section-content'>
                <div className='col-md-6 home-page-bottom-section-left-content'>
                    <h1>Got Legal Needs? <span>Tell Us About Them!</span></h1>
                    <p>{content1}</p>
                    <p>{content2}</p>

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
                    {
                        formData === true ? (
                            <>
                                <div className='contact-us-page-right-content-form'>
                                    <img src={contactUsPageImg} className='img-fluid' alt='section-img' />
                                    <h3>Contact Us</h3>
                                    <hr />
                                    {/* Form starts here */}
                                    <form>
                                        <div className='contact-us-page-form-radio-button-section'>
                                            <label>Which HLG office location would you like to contact? <span style={{ color: 'red' }}>*</span></label>
                                            <div className='contact-us-page-form-radio-buttons'>
                                                <input type="radio" id="montana" name="office" value="Montana" required />
                                                <p htmlFor="montana">Montana</p>
                                            </div>
                                            <div className='contact-us-page-form-radio-buttons'>
                                                <input type="radio" id="arizona" name="office" value="Arizona" required />
                                                <p htmlFor="arizona">Arizona</p>
                                            </div>
                                        </div>
                                        <div className='contact-us-page-form-name-section'>
                                            <label htmlFor="firstName">Name <span style={{ color: 'red' }}>*</span></label>
                                            <div className='contact-us-page-form-name-section-input-boxs'>
                                                <input type="text" id="firstName" placeholder="First Name" required />
                                                <input type="text" id="middleName" placeholder="Middle Name" />
                                                <input type="text" id="lastName" placeholder="Last Name" required />
                                            </div>
                                        </div>
                                        <div className='contact-us-page-form-email-section'>
                                            <label htmlFor="email">Email <span style={{ color: 'red' }}>*</span></label>
                                            <input type="email" id="email" required />
                                        </div>
                                        <div className='contact-us-page-form-email-section'>
                                            <label htmlFor="cellPhone">Cell Phone <span style={{ color: 'red' }}>*</span></label>
                                            <input type="tel" id="cellPhone" required />
                                        </div>
                                        <div className='contact-us-page-form-email-section'>
                                            <label htmlFor="service">How may we be of service? <span style={{ color: 'red' }}>*</span></label>
                                            <textarea id="service" rows={4} required></textarea>
                                        </div>
                                        <div className='contact-us-page-form-confirmation-section'>
                                            <small>
                                                <input type="checkbox" id="confirmation" /> Send confirmation email with the submitted responses to:
                                            </small>
                                            <input type="email" id="confirmationEmail" placeholder="Email" />
                                        </div>
                                        <div className='contact-us-page-form-submit-button-section'>
                                            <button type="submit">Submit Form</button>
                                        </div>
                                    </form>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className='home-page-bottom-section-right-content-box'>
                                    <h3>Contact HagEstad Law Group Today!</h3>
                                    <p>Discuss your legal needs with us.</p>
                                    <button>Free Consultation</button>
                                </div>
                            </>
                        )
                    }

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
