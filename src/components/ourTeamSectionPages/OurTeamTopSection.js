import React from 'react'
import '../../assets/css/ourTeamSectionPagesCSS/ourTeamTopSection.css'
import sectionImg1 from '../../assets/images/homeImgs/teamSectionImgs/sectionImg4.webp'
import sectionImg2 from '../../assets/images/homeImgs/teamSectionImgs/sectionImg5.webp'
import sectionImg3 from '../../assets/images/homeImgs/teamSectionImgs/sectionImg6.webp'

const OurTeamTopSection = ({ sectionData }) => {
    return (
        <>
            <div className='our-team-page-top-section-container'>
                <div className='row mx-0 our-team-page-top-section-content'>
                    <div className='col-md-7 our-team-page-top-section-left-content'>
                        {
                            sectionData?.sectionMainContent?.map((data, index) => (
                                <div key={index}>
                                    <p>{data?.content}</p>
                                    <ul>
                                        {
                                            data?.contentListData?.map((data, index) => (
                                                <li key={index}>{data?.contentList}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                        {
                            sectionData?.sectionContentListData?.map((data, index) => (
                                <div key={index} className='my-5'>
                                    <h1>{data?.listTitle}</h1>
                                    <ul>
                                        {
                                            data?.listContentData?.map((data, index) => (
                                                <li key={index}>{data?.content}</li>
                                            ))
                                        }
                                    </ul>
                                </div>
                            ))
                        }
                    </div>
                    <div className='col-md-5 our-team-page-top-section-right-content'>
                        <img src={sectionData?.sectionImg} className='img-fluid' alt='section-img' />
                        <div className='our-team-page-top-section-right-content-imgs'>
                            <div className='our-team-page-top-section-right-content-img-boxs'>
                                <img src={sectionImg1} className='our-team-section-img-sponser' alt='section-img' />
                            </div>
                            <div className='our-team-page-top-section-right-content-img-boxs'>
                                <img src={sectionImg2} className='img-fluid' alt='section-img' />
                            </div>
                            <div className='our-team-page-top-section-right-content-img-boxs'>
                                <img src={sectionImg3} className='img-fluid' alt='section-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default OurTeamTopSection
