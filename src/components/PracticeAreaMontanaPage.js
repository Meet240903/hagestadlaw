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
import PracticeAreaBenifitsSection from './practiceAreaMontanaPageSections/PracticeAreaBenifitsSection'

const PracticeAreaMontanaPage = () => {
    const { slugs } = useParams()
    let data = practiceAreaDropDownData?.find(index => index?.slugs === slugs)
    if (!data) {
        const parentData = practiceAreaDropDownData?.find(index =>
            index?.subDropDownData?.some(subIndex => subIndex?.slugs === slugs)
        );

        if (parentData) {
            data = parentData?.subDropDownData?.find(subIndex => subIndex?.slugs === slugs);
        }
    }

    return (
        <>
            <PracticeAreaMontanaTopSection sectionData={data} />
            <HomePageReviewSection sectionData={data?.reviewSectionData} />
            {
                data?.serviceSectionData && <HomePageLegalServiceSection sectionData={data?.serviceSectionData} serviceContactData={data?.serviceContactSectionData} />
            }
            {
                data?.benifitSectionData && <PracticeAreaBenifitsSection sectionData={data?.benifitSectionData} />
            }
            <PracticeAreaMontanaLegalProcessSection sectionData={data?.legalProcessSectionData} />
            <HomePageMiddleSection sectionData={data?.middleSectionData} />
            <HomePageTeamSection sectionData={data?.teamSectionData} />
            <HomePageBottomSection />
            {
                data?.faqSectionData && <PracticeAreaFAQSection sectionData={data?.faqSectionData} />
            }
        </>
    )
}

export default PracticeAreaMontanaPage
