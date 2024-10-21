import React from 'react'
import '../../assets/css/ourTeamSectionPagesCSS/ourTeamPublishedArticlesSection.css'

const OurTeamPublishedArticlesSection = ({ sectionData }) => {
    return (
        <>
            <div className='our-team-page-published-articles-section-container'>
                <div className='our-team-page-published-articles-section-title'>
                    <h1>Externally Published Articles</h1>
                </div>
                <div className='row our-team-page-published-articles-section-content'>
                    {
                        sectionData?.map((data, index) => (
                            <div className='col-md-6 our-team-page-published-articles-section-content-boxs' key={index}>
                                <div className='our-team-page-published-articles-section-content-boxs-content'>
                                    <h2 className='article-box-title'>{data?.title}</h2>
                                    <p>{data?.content}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    )
}

export default OurTeamPublishedArticlesSection
