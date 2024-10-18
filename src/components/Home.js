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
            <HomePageBottomSection />
        </>
    )
}

export default Home
