import React from 'react'
import BreadcrumpPage from './BreadcrumpPage'
import sectionImg1 from '../assets/images/ourTeamSectionImgs/ourStaffImgs/sectionImg1.webp'
import sectionImg2 from '../assets/images/ourTeamSectionImgs/ourStaffImgs/sectionImg2.webp'
import sectionImg3 from '../assets/images/ourTeamSectionImgs/ourStaffImgs/sectionImg3.webp'
import sectionImg4 from '../assets/images/ourTeamSectionImgs/ourStaffImgs/sectionImg4.webp'
import '../assets/css/ourStaffPage.css'

const OurStaffPage = () => {
    const sectionData = [
        {
            mainTitle: "Paralegal Manager",
            innerData: [
                {
                    sectionImg: sectionImg1,
                    subTitle: "Velvet Truzzolino",
                    contentData: [
                        { content: "Velvet oversees paralegals and staff in both HLG offices as our Paralegal Manager with twenty three years of experience in civil litigation, real estate, business law, personal injury and estate planning." },
                        { content: "Velvet earned her ABA-Approved A.A.S. Degree in Paralegal Studies in 2003 and B.A.S in 2008, both at the University of Montana. Velvet has been a member of M.A.L.A. since 2003 and is the current Treasurer on the Board of Directors." },
                        { content: "When not in the office, Velvet, a single mother of two, volunteers time at local service organizations, is an active member and Board Member of the Five Valleys Church of Christ, and enjoys time with her family." }
                    ]
                }
            ]
        },
        {
            mainTitle: "Paralegals and Legal Assistants",
            innerData: [
                {
                    sectionImg: sectionImg2,
                    subTitle: "Tracy Blinov",
                    contentData: [
                        { content: "Tracy Blinov joined the HagEstad Law Group team as a Paralegal in 2019. A graduate of the University of Montana, she has a passion for working on complex civil litigation and insurance defense matters alongside the trusted attorneys at HagEstad Law Group." },
                        { content: "Tracy provides direct support to the attorneys on discovery and other litigation matters, including hearing and trial preparation with an emphasis on early and efficient case resolution." }
                    ]
                },
                {
                    sectionImg: sectionImg3,
                    subTitle: "Michelle “Shelly” Kinnee",
                    contentData: [
                        { content: "Michelle “Shelly” Kinnee joined the HagEstad Law Group team in 2021 and has been working as a Legal Assistant alongside our Arizona attorneys." },
                        { content: "Shelly has a background in education, received at Minnesota State University Mankato, and has been a licensed Realtor in the State of Arizona for the past 11 years. Shelly’s range of experience compliments her work performed for HagEstad Law Group’s estate planning, real estate and probate clients." },
                        { content: "In her personal time, Shelly enjoys spending time with her four children, running, hiking or taking a short drive to Mexico to relax on the beach." }
                    ]
                },
            ]
        },
        {
            mainTitle: "Receptionists / Legal Secretaries",
            innerData: [
                {
                    sectionImg: sectionImg4,
                    subTitle: "Mindy Scott",
                }
            ]
        },
    ]
    return (
        <>
            <BreadcrumpPage title='Our Staff' breadcrumpTitle='Our Staff' />
            <div className='our-staff-page-section-container'>
                <div className='our-staff-page-section-top-body'>
                    {
                        sectionData?.map((data, index) => (
                            <div className='my-5' key={index}>
                                <h1>{data?.mainTitle}</h1>
                                {
                                    data?.innerData?.map((data, index) => (
                                        <div className='row mx-0 our-staff-page-section-top-body-content' key={index}>
                                            <div className='col-md-4 our-staff-page-section-top-body-left-content'>
                                                <img src={data?.sectionImg} className='img-fluid' alt='section-img' />
                                            </div>
                                            <div className='col-md-8 our-staff-page-section-top-body-right-content'>
                                                <h3>{data?.subTitle}</h3>
                                                {
                                                    data?.contentData?.map((data, index) => (
                                                        <p key={index}>{data?.content}</p>
                                                    ))
                                                }
                                            </div>
                                        </div>
                                    ))
                                }
                            </div>
                        ))
                    }
                </div>
                <div className='our-staff-page-section-intern-section'>
                    <h1>Interns</h1>
                    <p>HLG employs legal interns concurrently attending Arizona State University and the University of Montana in our Arizona and Montana offices, respectively.</p>
                    <p>If you are interested in interning at one of our offices, please call one of the main numbers and ask to speak with Velvet.</p>
                </div>
            </div>
        </>
    )
}

export default OurStaffPage
