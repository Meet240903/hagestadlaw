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
import practiceAreaArizonaDropdownData from '../data/PracticeAreaArizonaDropdownData'
import PracticeAreaArizonaServiceSection from './practiceAreaArizonaSectionPages/PracticeAreaArizonaServiceSection'
import areaWeServeMontanaDropDownData from '../data/AreaWeServeMontanaDropDownData'
import areaWeServeArizonaDropDownData from '../data/AreaWeServeArizonaDropDownData'
import FadeAnimation from './FadeAnimation'

const PracticeAreaMontanaPage = () => {
    const { slugs } = useParams();

    let data;

    if (practiceAreaDropDownData) {
        data = practiceAreaDropDownData?.find(index => index?.slugs === slugs);
    }

    if (!data) {
        const parentData = practiceAreaDropDownData?.find(index =>
            index?.subDropDownData?.some(subIndex => subIndex?.slugs === slugs)
        );

        if (parentData) {
            data = parentData?.subDropDownData?.find(subIndex => subIndex?.slugs === slugs);
        }
    }

    if (!data && practiceAreaArizonaDropdownData) {
        data = practiceAreaArizonaDropdownData?.find(index => index?.slugs === slugs);
    }

    if (!data && areaWeServeMontanaDropDownData) {
        data = areaWeServeMontanaDropDownData?.find(index => index?.slugs === slugs);
    }

    if (!data && areaWeServeArizonaDropDownData) {
        data = areaWeServeArizonaDropDownData?.find(index => index?.slugs === slugs);
    }

    if (!data) {
        const parentData = areaWeServeArizonaDropDownData?.find(index =>
            index?.subMenuData?.some(subIndex => subIndex?.slugs === slugs)
        );

        if (parentData) {
            data = parentData?.subMenuData?.find(subIndex => subIndex?.slugs === slugs);
        }
    }

    return (
        <>
            <PracticeAreaMontanaTopSection sectionData={data} />
            <FadeAnimation direction="up" duration="1.5s">
                <HomePageReviewSection sectionData={data?.reviewSectionData} />
            </FadeAnimation>
            {
                data?.arizonaServiceSectionData && <FadeAnimation direction="up" duration="1.5s">
                    <PracticeAreaArizonaServiceSection contactSectionData={data?.arizonaServiceContactSectionData} sectionData={data?.arizonaServiceSectionData} title={data?.title} />
                </FadeAnimation>
            }
            {
                data?.serviceSectionData && <FadeAnimation direction="up" duration="1.5s"><HomePageLegalServiceSection sectionData={data?.serviceSectionData} serviceContactData={data?.serviceContactSectionData} />
                </FadeAnimation>
            }
            {
                data?.benifitSectionData && <FadeAnimation direction="up" duration="1.5s"><PracticeAreaBenifitsSection sectionData={data?.benifitSectionData} />
                </FadeAnimation>
            }
            <FadeAnimation direction="up" duration="1.5s">
                <PracticeAreaMontanaLegalProcessSection sectionData={data?.legalProcessSectionData} />
            </FadeAnimation>
            <HomePageMiddleSection sectionData={data?.middleSectionData} />
            <FadeAnimation direction="up" duration="1.5s">
                <HomePageTeamSection sectionData={data?.teamSectionData} />
            </FadeAnimation>
            <HomePageBottomSection />
            {
                data?.faqSectionData && <PracticeAreaFAQSection sectionData={data?.faqSectionData} />
            }
        </>
    )
}

export default PracticeAreaMontanaPage
