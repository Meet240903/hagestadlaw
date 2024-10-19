import React from 'react'
import HomePageTopSection from './homePageSections/HomePageTopSection'
import HomePageReviewSection from './homePageSections/HomePageReviewSection'
import HomePageLegalServiceSection from './homePageSections/HomePageLegalServiceSection'
import HomePageMiddleSection from './homePageSections/HomePageMiddleSection'
import HomePageTeamSection from './homePageSections/HomePageTeamSection'
import HomePageBottomSection from './homePageSections/HomePageBottomSection'

const Home = () => {
    return (
        <>
            <HomePageTopSection />
            <HomePageReviewSection />
            <HomePageLegalServiceSection />
            <HomePageMiddleSection />
            <HomePageTeamSection />
            <HomePageBottomSection
                content1="At HagEstad Law Group, PLLC, we are here to help you with all your legal needs."
                content2="We understand that legal issues can be complex and overwhelming, but you don't have to navigate them alone!"
            />
        </>
    )
}

export default Home
