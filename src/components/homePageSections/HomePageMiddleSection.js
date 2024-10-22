import React from 'react'
import sectionImg1 from '../../assets/images/homeImgs/middleSectionImgs/sectionImg1.svg'
import sectionImg2 from '../../assets/images/homeImgs/middleSectionImgs/sectionImg2.svg'
import sectionImg3 from '../../assets/images/homeImgs/middleSectionImgs/sectionImg3.svg'
import '../../assets/css/homePageSectionCSS/homePageMiddleSection.css'

const HomePageMiddleSection = ({ sectionData }) => {
    const MiddlesectionData = [
        {
            sectionImg: sectionImg1,
            title: "Experienced",
            content: "A team of lawyers with extensive experience and a proven track record of success",
        },
        {
            sectionImg: sectionImg2,
            title: "Approachable",
            content: "A focus on results, with a no-nonsense approach to getting clients the best possible outcome",
        },
        {
            sectionImg: sectionImg3,
            title: "Affordable",
            content: "Affordable and flexible fee structures, including contingency and flat-fee arrangements",
        },
    ]
    return (
        <>
            <div className='home-page-middle-section-container'
                style={{
                    backgroundImage: sectionData?.bgImg
                        ? `url(${sectionData.bgImg})` : '',
                }}
            >
                <div className='home-page-middle-section-title'>
                    {
                        sectionData ? (
                            <>
                                <h1>{sectionData?.title}<span>{sectionData?.subTitle}</span></h1>
                                <p>{sectionData?.content}</p>
                            </>
                        ) : (
                            <>
                                <h1>Why Put Your <span>Trust In Us?</span></h1>
                            </>
                        )
                    }
                </div>
                <div className='home-page-middle-section-content'>
                    {
                        sectionData ? (
                            <>
                                {
                                    sectionData?.innerSectionData?.map((data, index) => (
                                        <div className='home-page-middle-section-content-box' key={index}>
                                            <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                                            <h3>{data?.title}</h3>
                                            <p>{data?.content}</p>
                                        </div>
                                    ))
                                }
                            </>
                        ) : (
                            <>
                                {
                                    MiddlesectionData?.map((data, index) => (
                                        <div className='home-page-middle-section-content-box' key={index}>
                                            <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                                            <h3>{data?.title}</h3>
                                            <p>{data?.content}</p>
                                        </div>
                                    ))
                                }
                            </>
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default HomePageMiddleSection
