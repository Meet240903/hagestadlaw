import React from 'react'
import { useParams } from 'react-router-dom'
import BreadcrumpPage from './BreadcrumpPage'
import ourTeamDropDownData from '../data/OurTeamDropdownData'
import OurTeamTopSection from './ourTeamSectionPages/OurTeamTopSection'
import OurTeamArticlesSection from './ourTeamSectionPages/OurTeamArticlesSection'
import OurTeamPublishedArticlesSection from './ourTeamSectionPages/OurTeamPublishedArticlesSection'

const OurTeam = () => {
    const { slugs } = useParams()
    const data = ourTeamDropDownData?.find(index => index?.slugs === slugs)
    return (
        <>
            <BreadcrumpPage title={data?.title} breadcrumpTitle={data?.title} />\
            <OurTeamTopSection sectionData={data?.topSectionData} />
            {
                data?.articleSectionData && <OurTeamArticlesSection sectionData={data?.articleSectionData} title={data?.title} />
            }
            {
                data?.publishedArticlesData && <OurTeamPublishedArticlesSection sectionData={data?.publishedArticlesData} />
            }
        </>
    )
}

export default OurTeam
