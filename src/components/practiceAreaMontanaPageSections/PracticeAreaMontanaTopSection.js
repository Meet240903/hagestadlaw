import React from 'react'
import '../../assets/css/practiceAreaMontanaPageSectionsCSS/practiceAreaMontanaTopSection.css'
import { Link } from 'react-router-dom'

const PracticeAreaMontanaTopSection = ({ sectionData }) => {
    return (
        <>
            <div className='practice-area-montana-page-top-section-container'>
                <p>
                    <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
                        Home
                    </Link> / MT {sectionData?.title}
                </p>
                <div className='practice-area-montana-page-top-section-content'>
                    <h1>{sectionData?.topSectionData?.title} <span className='title-span'>{sectionData?.topSectionData?.subTitle}</span></h1>
                    <p>{sectionData?.topSectionData?.content}</p>
                </div>
                <div className='practice-area-montana-page-top-section-bottom-content'>
                    <div className='practice-area-montana-page-top-section-bottom-content-button'>
                        <button>Free Consultation</button>
                    </div>
                    <div className='practice-area-montana-page-top-section-bottom-content-box'>
                        <div className='practice-area-montana-page-top-section-bottom-content-box-inner-content'>
                            <h1>30+</h1>
                            <small>Years of Combined Experience</small>
                        </div>
                        <div className='practice-area-montana-page-top-section-bottom-content-box-inner-content'>
                            <h1>500+</h1>
                            <small>Clients Served</small>
                        </div>
                        <div className='practice-area-montana-page-top-section-bottom-content-box-inner-content'>
                            <h1>Millions</h1>
                            <small>of dollars saved for our clients</small>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PracticeAreaMontanaTopSection
