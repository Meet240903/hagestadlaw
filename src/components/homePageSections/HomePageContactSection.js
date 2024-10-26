import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import '../../assets/css/homePageSectionCSS/homePageContactSection.css'
import FadeAnimation from '../FadeAnimation'

const HomePageContactSection = ({ serviceContactData }) => {
    return (
        <>
            <FadeAnimation direction="right" duration="1s">
                <div className='home-page-legal-service-section-contact-left-content'>
                    {
                        serviceContactData ? (
                            <>
                                <h1>{serviceContactData?.title}</h1>
                                <p>{serviceContactData?.content}</p>
                            </>
                        ) : (
                            <>
                                <h1>We Are Here
                                    <br />to Help</h1>
                                <p>Ready to discuss your legal needs? Let’s get started!</p>
                            </>
                        )
                    }
                </div>
            </FadeAnimation>
            <div className='home-page-legal-service-section-contact-right-content'>
                <div className='home-page-legal-service-section-contact-right-content-button'>
                    <button>Free Consultation</button>
                </div>
                <div className='home-page-legal-service-section-contact-right-content-contact-information'>
                    <div className='home-page-section-contact-informations'>
                        <button><FontAwesomeIcon icon={faPhone} /></button>
                        <div className='home-page-section-contact-content'>
                            <small>Montana</small>
                            <p>(406) 804-6855</p>
                        </div>
                    </div>
                    <div className='home-page-section-contact-informations'>
                        <button><FontAwesomeIcon icon={faPhone} /></button>
                        <div className='home-page-section-contact-content'>
                            <small>Arizona</small>
                            <p>(623) 294-2934</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePageContactSection
