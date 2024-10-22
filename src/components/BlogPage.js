import React from 'react'
import BreadcrumpPage from './BreadcrumpPage'
import OurTeamArticlesSection from './ourTeamSectionPages/OurTeamArticlesSection'
import blogPageData from '../data/BlogPageData'

const BlogPage = () => {
    return (
        <>
            <BreadcrumpPage title="Blog" breadcrumpTitle="Blog" />
            <OurTeamArticlesSection sectionData={blogPageData} />
        </>
    )
}

export default BlogPage
