import React, { useState } from 'react'
import '../../assets/css/homePageSectionCSS/homePageLegalServiceSection.css'
import sectionImg1 from '../../assets/images/homeImgs/legalServiceImgs/sectionImg1.jpg'
import sectionImg2 from '../../assets/images/homeImgs/legalServiceImgs/sectionImg2.jpg'
import sectionImg3 from '../../assets/images/homeImgs/legalServiceImgs/sectionImg3.jpg'
import sectionImg4 from '../../assets/images/homeImgs/legalServiceImgs/sectionImg4.jpg'
import HomePageContactSection from './HomePageContactSection'

const HomePageLegalServiceSection = () => {
    const titleData = [
        {
            title: "Estate & Probate Law",
            sectionImg: sectionImg1,
            content: "At HagEstad Law Group, PLLC, we understand that your legacy is important to you. That's why we offer comprehensive estate and probate law services to ensure that your assets and loved ones are protected. Our experienced attorneys will guide you through every step of the estate planning process, from drafting wills and trusts to establishing powers of attorney and healthcare directives. We'll help you create a plan that reflects your wishes and safeguards your family's future.",
            montanaSerivce: [
                { title: "Estate Planning" },
                { title: "Probate & Estate Administration" },
                { title: "Trust Administration" },
            ],
            arizonaService: true,
        },
        {
            title: "Civil Litigation",
            sectionImg: sectionImg2,
            content: "When legal disputes arise, it's important to have an experienced civil litigation team on your side. At HagEstad Law Group, PLLC, we are committed to protecting your rights and interests in a variety of civil litigation matters, including contract disputes, business litigation, personal injury claims, and much more. Our attorneys have a proven track record of success and will fight tirelessly to ensure the best possible outcome for your case.",
            montanaSerivce: [
                { title: "Bad Faith" },
                { title: "Professional Negligence" },
                { title: "Liquor Liability" },
                { title: "Product Liability" },
                { title: "Insurance Defense" },
            ],
            arizonaService: false,
        },
        {
            title: "Business Law",
            sectionImg: sectionImg3,
            content: "As a business owner, you face a variety of legal challenges in the corporate world. At HagEstad Law Group, PLLC, we are committed to providing expert legal guidance tailored to your specific needs. Our team has extensive experience in business law, including entity formation, contract drafting and negotiation, mergers and acquisitions, and much more. We'll work with you to protect your business and achieve your goals.",
            montanaSerivce: [
                { title: "Business Litigation & Disputes" },
                { title: "Business Contracts" },
                { title: "Business Operations" },
            ],
            arizonaService: true,
        },
        {
            title: "Real Estate Law",
            sectionImg: sectionImg4,
            content: "At HagEstad Law Group, PLLC, we understand that your legacy is important to you. That's why we offer comprehensive estate and probate law services to ensure that your assets and loved ones are protected. Our experienced attorneys will guide you through every step of the estate planning process, from drafting wills and trusts to establishing powers of attorney and healthcare directives. We'll help you create a plan that reflects your wishes and safeguards your family's future.",
            montanaSerivce: [
                { title: "Residential Real Estate" },
                { title: "Land Use" },
                { title: "Partition Law" },
            ],
            arizonaService: true,
        },
    ]
    const [serviceData, setServiceData] = useState(titleData[0])
    return (
        <>
            <div className='home-page-legal-service-section-container'>
                <div className='home-page-legal-service-section-title'>
                    <div className='home-page-legal-service-section-title-left-content'>
                        <h1>Legal Services <span>We Provide</span></h1>
                    </div>
                    <div className='home-page-legal-service-section-title-right-content'>
                        {
                            titleData?.map((data, index) => (
                                <button key={index} onClick={() => setServiceData(titleData[index])}
                                    style={{
                                        backgroundColor: serviceData?.title === data?.title ? '#627a93' : '',
                                        color: serviceData?.title === data?.title ? '#fff' : '',
                                    }}
                                >{data?.title}</button>
                            ))
                        }
                    </div>
                </div>
                <div className='row home-page-legal-service-section-content'>
                    <div className='col-md-4 home-page-legal-service-section-left-content'>
                        <img src={serviceData?.sectionImg} className='img-fluid' alt='section-img' />
                    </div>
                    <div className='col-md-8 home-page-legal-service-section-right-content'>
                        <div className='home-page-legal-service-section-right-inner-content'>
                            <h1>{serviceData?.title}</h1>
                            <p className='service-section-right-inner-content-para'>{serviceData?.content}</p>
                            <div className='home-page-legal-service-section-right-inner-bottom-content'>
                                <div className='home-page-legal-service-section-right-inner-bottom-left-content'>
                                    <h4>in Montana</h4>
                                    {
                                        serviceData?.montanaSerivce?.map((data, index) => (
                                            <p key={index}>{data?.title}</p>
                                        ))
                                    }
                                    <a href='#'>All Montana {serviceData?.title} Services</a>
                                </div>
                                {
                                    serviceData?.arizonaService === true && <div className='home-page-legal-service-section-right-inner-bottom-left-content'>
                                        <h4>in Arizona</h4>
                                        {
                                            serviceData?.montanaSerivce?.map((data, index) => (
                                                <p key={index}>{data?.title}</p>
                                            ))
                                        }
                                        <a href='#'>All Montana {serviceData?.title} Services</a>
                                    </div>
                                }
                            </div>
                        </div>
                    </div>
                </div>
                <div className='home-page-legal-service-section-contact-container'>
                    <HomePageContactSection />
                </div>
            </div>
        </>
    )
}

export default HomePageLegalServiceSection
