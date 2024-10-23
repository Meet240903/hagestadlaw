import React from 'react'
import '../../assets/css/practiceAreaArizonaPagesCSS/practiceAreaArizonaServiceSection.css'
import HomePageContactSection from '../homePageSections/HomePageContactSection'

const PracticeAreaArizonaServiceSection = ({ sectionData, contactSectionData, title }) => {
    return (
        <>
            <div className='practice-area-arizona-service-section-container'>
                <div className='practice-area-arizona-service-section-title'>
                    <h1>{title} Services <span>We Provide in Arizona</span></h1>
                </div>
                <div className='row mx-0 p-0 practice-area-arizona-service-section-content'>
                    {
                        sectionData?.map((data, index) => (
                            <div className='col-md-4 practice-area-arizona-service-section-content-boxs' key={index}>
                                <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                                <h1>{data?.title}</h1>
                            </div>
                        ))
                    }
                </div>
                <div className='home-page-legal-service-section-contact-container'>
                    <HomePageContactSection serviceContactData={contactSectionData} />
                </div>
            </div>
        </>
    )
}

export default PracticeAreaArizonaServiceSection
