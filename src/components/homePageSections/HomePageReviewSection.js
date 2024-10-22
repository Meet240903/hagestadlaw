import React from 'react'
import '../../assets/css/homePageSectionCSS/homePageReviewSection.css'
import sectionImg1 from '../../assets/images/homeImgs/reviewSectionImgs/sectionImg1.png'
import sectionImg2 from '../../assets/images/homeImgs/reviewSectionImgs/sectionImg2.png'
import sectionImg3 from '../../assets/images/homeImgs/reviewSectionImgs/sectionImg3.png'
import sectionImg4 from '../../assets/images/homeImgs/reviewSectionImgs/sectionImg4.png'
import sectionImg5 from '../../assets/images/homeImgs/reviewSectionImgs/sectionImg5.png'
import sectionImg6 from '../../assets/images/homeImgs/reviewSectionImgs/sectionImg6.svg'

const HomePageReviewSection = ({ sectionData }) => {
    const reveiwSectionData = [
        {
            sectionImg: sectionImg1,
            content: "30 reviews",
            showReviews: true,
        },
        {
            sectionImg: sectionImg2,
            content: "6 reviews",
            showReviews: true,
        },
        {
            sectionImg: sectionImg3,
            content: "13 reviews",
            showReviews: true,
        },
        {
            sectionImg: sectionImg4,
            content: "30 reviews",
            showReviews: true,
        },
        {
            sectionImg: sectionImg5,
            content: "20 reviews",
            showReviews: false,
        },
    ]
    const reviewData = [
        {
            content: "Great experience. Very communicative, pleasant, and knowledgeable all the way from the legal secretary to the paralegal to the attorney. Everyone was on the same page at the same time, very refreshing. Everything was done online as I was in NY and my transactions were for the state of AZ. TYVM",
            userName: "Christine Alber",
        },
        {
            content: "My appointment with David and his staff was relaxing and informative. The process has resulted in a better understanding of why we must consider a living trust. The offer of a free consultation was beneficial since it provided both parties with an understanding of our needs. The finished binder layout gives one a clear overview of what was accomplished.",
            userName: "Ross Jones",
        },
        {
            content: "We have used HagEstad Law Group for multiple services for our business. We found them to be very professional, thorough, affordable, and knowledgeable.  I would recommend HagEstad Law offices to anyone in need of legal counsel regarding their business.",
            userName: "Talhia F",
        },
    ]
    return (
        <>
            <div className='home-page-reviews-section-container'>
                <div className='home-page-reviews-section-title'>
                    <div className='home-page-reviews-section-title-left-content'>
                        <h1>Our Clients <span>Speak Out</span></h1>
                    </div>
                    <div className='home-page-reviews-section-title-right-content'>
                        {
                            reveiwSectionData?.map((data, index) => (
                                <div className='home-page-reviews-section-title-right-content-boxs' key={index}>
                                    <img src={data?.sectionImg} className='reviews-section-title-right-content-boxs-logo-img' alt='section-img' />
                                    <div className='home-page-reviews-section-title-right-content-inner-boxs'>
                                        {
                                            data?.showReviews === true && <img src={sectionImg6} className='img-fluid' alt='section-img' />
                                        }
                                        <p>{data?.content}</p>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
                <div className='home-page-reviews-section-content'>
                    {
                        sectionData ? (
                            <>
                                {
                                    sectionData?.map((data, index) => (
                                        <div className='home-page-reviews-section-content-box' key={index}>
                                            <p className='review-qoute'>“</p>
                                            <p>{data?.content}</p>
                                            <small>{data?.userName}</small>
                                        </div>
                                    ))
                                }
                            </>
                        ) : (
                            <>
                                {
                                    reviewData?.map((data, index) => (
                                        <div className='home-page-reviews-section-content-box' key={index}>
                                            <p className='review-qoute'>“</p>
                                            <p>{data?.content}</p>
                                            <small>{data?.userName}</small>
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

export default HomePageReviewSection
