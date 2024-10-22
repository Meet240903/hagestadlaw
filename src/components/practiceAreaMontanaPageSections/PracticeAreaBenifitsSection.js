import React from 'react'
import sectionImg2 from '../../assets/images/montanaPagesImgs/benifitsSectionImgs/RightSectionImg1.webp'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import '../../assets/css/practiceAreaMontanaPageSectionsCSS/practiceAreaBenifitsSection.css'

const PracticeAreaBenifitsSection = ({ sectionData }) => {
    return (
        <>
            <div className='practice-area-page-benifits-section-container'>
                <div className='row mx-0 p-0 practice-area-page-benifits-section-content'>
                    <div className='col-md-7 p-0 practice-area-page-benifits-section-left-content'>
                        <img src={sectionData?.sectionImg} className='img-fluid' alt='section-img' />
                        {
                            sectionData?.innerSectionDetailsData?.map((data, index) => (
                                <div key={index}>
                                    <h1>{data?.title}</h1>
                                    {
                                        data?.contentData?.map((innerData, index) => (
                                            <div key={index}>
                                                <p>{innerData?.content}</p>
                                                <ul>
                                                    {
                                                        innerData?.contentListData?.map((listData, index) => (
                                                            <li key={index}>{listData?.contentList}</li>
                                                        ))
                                                    }
                                                </ul>
                                            </div>
                                        ))
                                    }
                                </div>
                            ))
                        }
                        <div className='practice-area-page-benifits-section-left-content-box'>
                            <h1>{sectionData?.boxTitle}</h1>
                            <p>{sectionData?.boxContent}</p>
                            <div className='practice-area-page-benifits-section-left-content-box-inner-content'>
                                <button>Free Consultation</button>
                                <div className='practice-area-page-benifits-section-left-content-box-contact-informations'>
                                    <button><FontAwesomeIcon icon={faPhone} /></button>
                                    <p>(406) 792-7577</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='col-md-5 p-0 practice-area-page-benifits-section-right-content'>
                        <div className='practice-area-page-benifits-section-right-content-box'>
                            <img src={sectionImg2} className='img-fluid' alt='section-img' />
                            <div className='practice-area-page-benifits-section-right-inner-content-box'>
                                <h1>Schedule Your Free Consultation Today!</h1>
                                <p>Our attorneys can answer your questions and provide the legal advice you need to make informed decisions.</p>
                                <div className='practice-area-page-benifits-section-right-inner-content-box-inner-content'>
                                    <button>Free Consultation</button>
                                    <div className='practice-area-page-benifits-section-right-inner-content-box-contact-informations'>
                                        <button><FontAwesomeIcon icon={faPhone} /></button>
                                        <p>(406) 792-7577</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default PracticeAreaBenifitsSection
