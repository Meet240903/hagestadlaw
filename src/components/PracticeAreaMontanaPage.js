import React from 'react'
import { useParams } from 'react-router-dom'
import PracticeAreaMontanaTopSection from './practiceAreaMontanaPageSections/PracticeAreaMontanaTopSection'
import practiceAreaDropDownData from '../data/PracticeAreaDropDownData'
import HomePageReviewSection from './homePageSections/HomePageReviewSection'
import HomePageLegalServiceSection from './homePageSections/HomePageLegalServiceSection'
import HomePageTeamSection from './homePageSections/HomePageTeamSection'
import HomePageBottomSection from './homePageSections/HomePageBottomSection'
import HomePageMiddleSection from './homePageSections/HomePageMiddleSection'
import PracticeAreaMontanaLegalProcessSection from './practiceAreaMontanaPageSections/PracticeAreaMontanaLegalProcessSection'
import PracticeAreaFAQSection from './practiceAreaMontanaPageSections/PracticeAreaFAQSection'

const PracticeAreaMontanaPage = () => {
    const { slugs } = useParams()
    const data = practiceAreaDropDownData?.find(index => index?.slugs === slugs)

    return (
        <>
            <PracticeAreaMontanaTopSection sectionData={data} />
            <HomePageReviewSection sectionData={data?.reviewSectionData} />
            <HomePageLegalServiceSection sectionData={data?.serviceSectionData} serviceContactData={data?.serviceContactSectionData} />
            <PracticeAreaMontanaLegalProcessSection sectionData={data?.legalProcessSectionData} />
            <HomePageMiddleSection sectionData={data?.middleSectionData} />
            <HomePageTeamSection sectionData={data?.teamSectionData} />
            <HomePageBottomSection />
            <PracticeAreaFAQSection sectionData={data?.faqSectionData} />
        </>
    )
}

export default PracticeAreaMontanaPage
