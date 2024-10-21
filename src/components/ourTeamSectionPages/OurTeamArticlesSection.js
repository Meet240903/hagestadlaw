import React from 'react'
import sectionImg1 from '../../assets/images/ourTeamSectionImgs/articlesImgs/sectionImg1.webp'
import '../../assets/css/ourTeamSectionPagesCSS/ourTeamArticlesSection.css'

const OurTeamArticlesSection = ({ sectionData, title }) => {
    return (
        <>
            <div className='our-team-page-articles-section-container'>
                <h1>Articles by {title}</h1>
                <div className='row mx-0 our-team-page-articles-section-content'>
                    {
                        sectionData?.map((data, index) => (
                            <div className='col-md-4 our-team-page-articles-section-left-content' key={index}>
                                <div className='our-team-page-articles-section-left-content-img'>
                                    <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                                </div>
                                <h2>{data?.title}</h2>
                                <div className='our-team-page-articles-section-left-footer-content'>
                                    <small>By {title}</small>
                                    <small>Updated {data?.date}</small>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default OurTeamArticlesSection
