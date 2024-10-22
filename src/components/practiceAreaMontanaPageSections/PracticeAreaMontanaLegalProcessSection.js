import React from 'react'
import '../../assets/css/practiceAreaMontanaPageSectionsCSS/practiceAreaLegalProcessSection.css'

const PracticeAreaMontanaLegalProcessSection = ({ sectionData }) => {
    return (
        <>
            <div className='practice-area-montana-legal-process-section-container'>
                <div className='row mx-0 practice-area-montana-legal-process-section-content'>
                    <div className='col-md-6 practice-area-montana-legal-process-section-left-content'>
                        <h1>Our {sectionData?.leftSectionData?.title} <span>Legal Process</span></h1>
                        <p>{sectionData?.leftSectionData?.content}</p>
                        <img src={sectionData?.leftSectionData?.sectionImg} className='img-fluid' alt='section-img' />
                    </div>
                    <div className='col-md-6 practice-area-montana-legal-process-section-right-content'>
                        {
                            sectionData?.rightSectionData?.map((data, index) => (
                                <div className='practice-area-montana-legal-process-section-right-content-boxs' key={index}>
                                    <h2>{data?.title}</h2>
                                    <p>{data?.content}</p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PracticeAreaMontanaLegalProcessSection
