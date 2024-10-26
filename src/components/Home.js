import React from 'react'
import HomePageTopSection from './homePageSections/HomePageTopSection'
import HomePageReviewSection from './homePageSections/HomePageReviewSection'
import HomePageLegalServiceSection from './homePageSections/HomePageLegalServiceSection'
import HomePageMiddleSection from './homePageSections/HomePageMiddleSection'
import HomePageTeamSection from './homePageSections/HomePageTeamSection'
import HomePageBottomSection from './homePageSections/HomePageBottomSection'
import FadeAnimation from './FadeAnimation'

const Home = () => {
    return (
        <>
            <HomePageTopSection />
            <FadeAnimation direction="up" duration="1.5s">
                <HomePageReviewSection />
            </FadeAnimation>
            <FadeAnimation direction="up" duration="1.5s">
                <HomePageLegalServiceSection />
            </FadeAnimation>
            <HomePageMiddleSection />
            <FadeAnimation direction="up" duration="1.5s">
                <HomePageTeamSection />
            </FadeAnimation>
            <HomePageBottomSection
                content1="At HagEstad Law Group, PLLC, we are here to help you with all your legal needs."
                content2="We understand that legal issues can be complex and overwhelming, but you don't have to navigate them alone!"
            />
        </>
    )
}

export default Home
