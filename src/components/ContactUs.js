import React from 'react'
import BreadcrumpPage from './BreadcrumpPage'
import HomePageBottomSection from './homePageSections/HomePageBottomSection'

const ContactUs = () => {
    return (
        <>
            <BreadcrumpPage title="Contact Us" breadcrumpTitle="Contact Us" />
            <HomePageBottomSection
                content1="We are delighted to assist you and address any questions or inquiries regarding our services or business."
                content2="Feel free to contact us at (406) 296-6435 in Montana, (623) 233-0728 in Arizona, or simply complete the form by providing your information and message. We will respond promptly to your query."
                formData={true}
                bgColor='#fff' />
        </>
    )
}

export default ContactUs
