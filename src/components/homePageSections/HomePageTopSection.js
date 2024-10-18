import React from 'react'
import '../../assets/css/homePageSectionCSS/homePageTopSection.css'

const HomePageTopSection = () => {
    return (
        <>
            <div className='home-page-top-section-container'>
                <div className='home-page-top-section-content'>
                    <h1>Protecting <span className='title-span'>Your Legal Interests in Montana & Arizona</span></h1>
                    <p>Whether you're a business owner seeking legal advice, a family member looking to protect your loved ones' assets, or an individual facing a legal dispute, our team of experienced attorneys is here to help. We specialize in the following practice areas:</p>
                    <ul>
                        <li>Business Law</li>
                        <li>Estate & Probate</li>
                        <li>Civil Litigation</li>
                        <li>Real Estate Law</li>
                    </ul>
                </div>
                <div className='home-page-top-section-bottom-content'>
                    <div className='home-page-top-section-bottom-content-button'>
                        <button>Free Consultation</button>
                    </div>
                    <div className='home-page-top-section-bottom-content-box'>
                        <div className='home-page-top-section-bottom-content-box-inner-content'>
                            <h1>30+</h1>
                            <small>Years of Combined Experience</small>
                        </div>
                        <div className='home-page-top-section-bottom-content-box-inner-content'>
                            <h1>500+</h1>
                            <small>Clients Served</small>
                        </div>
                        <div className='home-page-top-section-bottom-content-box-inner-content'>
                            <h1>Millions</h1>
                            <small>of dollars saved for our clients</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePageTopSection
