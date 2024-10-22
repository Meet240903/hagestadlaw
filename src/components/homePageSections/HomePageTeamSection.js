import React, { useState } from 'react'
import '../../assets/css/homePageSectionCSS/homePageTeamSection.css'
import sectionImg1 from '../../assets/images/homeImgs/teamSectionImgs/sectionImg1.jpg'
import sectionImg2 from '../../assets/images/homeImgs/teamSectionImgs/sectionImg2.webp'
import sectionImg3 from '../../assets/images/homeImgs/teamSectionImgs/sectionImg3.webp'
import sectionImg4 from '../../assets/images/homeImgs/teamSectionImgs/sectionImg4.webp'
import sectionImg5 from '../../assets/images/homeImgs/teamSectionImgs/sectionImg5.webp'
import sectionImg6 from '../../assets/images/homeImgs/teamSectionImgs/sectionImg6.webp'
import sectionImg7 from '../../assets/images/homeImgs/teamSectionImgs/sectionImg7.webp'

const HomePageTeamSection = ({ sectionData }) => {
    const teamMemberData = [
        {
            sectionImg: sectionImg1,
            userName: "G. Patrick HagEstad",
            contentData: [
                { content: "Licensed in Arizona and Montana" },
                { content: "AV Preeminent Rated in Litigation, Insurance, and Professional liability by Martindale-Hubbell" },
            ]
        },
        {
            sectionImg: sectionImg2,
            userName: "David J. HagEstad",
            contentData: [
                { content: "Licensed in Arizona, Montana, and Texas." },
                { content: "President of Surprise Professional Center Office Condo Association" },
            ]
        },
        {
            sectionImg: sectionImg3,
            userName: "Brien B. Birge",
            contentData: [
                { content: "Licensed in Arizona and Montana" },
                { content: "Specialized in Estate Planning & Insurance Litigation" },
            ]
        },
    ]

    // Use hoveredMemberIndex instead of showMemberDetails
    const [hoveredMemberIndex, setHoveredMemberIndex] = useState(null)

    return (
        <>
            <div className='home-page-team-section-container'>
                <div className='row home-page-team-section-content'>
                    <div className='col-md-6 home-page-team-section-left-content'>
                        {
                            teamMemberData.map((data, index) => (
                                <div
                                    className='home-page-team-section-left-content-box'
                                    onMouseEnter={() => setHoveredMemberIndex(index)}  // Set the index of the hovered member
                                    onMouseLeave={() => setHoveredMemberIndex(null)}   // Reset on leave
                                    key={index}
                                    style={{
                                        padding: hoveredMemberIndex === index ? '20px' : '',
                                    }}
                                >
                                    {
                                        hoveredMemberIndex !== index ? (  // Check if the current member is hovered
                                            <>
                                                <div className='home-page-team-section-left-content-box-img'>
                                                    <img src={data.sectionImg} className='img-fluid' alt='section-img' />
                                                </div>
                                                <h1>{data.userName}</h1>
                                            </>
                                        ) : (
                                            <>
                                                <h1>{data.userName}</h1>
                                                <ul>
                                                    {data.contentData.map((contentItem, contentIndex) => (
                                                        <li key={contentIndex}>{contentItem.content}</li>
                                                    ))}
                                                </ul>
                                            </>
                                        )
                                    }
                                </div>
                            ))
                        }
                    </div>
                    <div className='col-md-6 home-page-team-section-right-content'>
                        {
                            sectionData ? (
                                <>
                                    <h1><span>Meet Our Missoula, MT </span>
                                        {sectionData?.title} Attorneys</h1>
                                    <p>At HagEstad Law Group, PLLC, our skilled attorneys are dedicated to delivering exceptional legal services, utilizing the latest technology to offer efficient and cost-effective solutions tailored to your unique needs.</p>
                                    <p>{sectionData?.content}</p>
                                </>
                            ) : (
                                <>
                                    <h1><span>Expertise In Action:</span>
                                        Meet The HagEstad Law Group, PLLC Attorneys</h1>
                                    <p>At HagEstad Law Group, PLLC, our skilled attorneys are dedicated to delivering exceptional legal services, utilizing the latest technology to offer efficient and cost-effective solutions tailored to your unique needs.</p>
                                    <p>Our proven track record of success, no-nonsense approach, and focus on achieving results ensure the best possible outcome. With a strong network of professional relationships, we are well-equipped to serve you. Communication and transparency are paramount, keeping you informed and engaged throughout the legal process.</p>
                                </>
                            )
                        }
                        <div className='home-page-team-section-right-content-box'>
                            <div className='home-page-team-section-right-content-inner-box'>
                                <h2>Saved Millions</h2>
                                <small>of client's money</small>
                            </div>
                            <div className='home-page-team-section-right-content-inner-box'>
                                <h2>Extensive Track Record</h2>
                                <small>of Achieving Client Goals</small>
                            </div>
                            <div className='home-page-team-section-right-content-inner-box'>
                                <h2>500+</h2>
                                <small>Clients Served</small>
                            </div>
                            <div className='home-page-team-section-right-content-inner-box'>
                                <h2>30+</h2>
                                <small>Years of Combined Experience</small>
                            </div>
                        </div>
                        <div className='home-page-team-section-right-content-img-section'>
                            <img src={sectionImg4} className='img-fluid' alt='section-img' />
                            <div className='home-page-team-section-right-content-inner-img-section'>
                                <img src={sectionImg5} className='img-fluid' alt='section-img' />
                                <img src={sectionImg6} className='img-fluid' alt='section-img' />
                                <img src={sectionImg7} className='img-fluid' alt='section-img' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default HomePageTeamSection
