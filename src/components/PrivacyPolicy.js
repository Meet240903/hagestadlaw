import React from 'react'
import '../assets/css/privacyPolicy.css'
import BreadcrumpPage from './BreadcrumpPage'

const PrivacyPolicy = () => {
    const sectionData = [
        {
            title: "Gramm-Leach-Bliley Act",
            contentData: [
                { content: "Lawyers, together with other providers of personal financial services, are now required by the Gramm-Leach-Bliley Act to inform their clients, under some circumstances, of their policies regarding privacy of client information." },
                { content: "Your privacy is important to us, and maintaining your trust and confidence is a high priority. Lawyers have been and continue to be bound by professional standards of confidentiality that are even more stringent than those required by this Act. Therefore, we have always protected your right to privacy and will continue to do so." },
                { content: "The purpose of this notice is to explain our privacy policy and practices with regard to personal information about you that we obtain and how we keep that information secure." },
            ]
        },
        {
            title: "Nonpublic Personal Information We Collect",
            contentData: [
                { content: "We collect nonpublic personal information about you that is provided to us by you or obtained by us with your authorization or consent." },
                { content: "WE DO NOT DISCLOSE ANY PERSONAL INFORMATION ABOUT OUR CLIENTS OR FORMER CLIENTS TO ANYONE, EXCEPT AS PERMITTED BY LAW AND ANY APPLICABLE STATE ETHICS RULES." },
                { content: "For current and former clients, we do not disclose any nonpublic personal information obtained in the course of our representation, except as required or permitted by law. Permitted disclosures include, for instance, providing information to our employees and, in limited situations, to unrelated third parties (for example, accountants or appraisers) who need to know that information to assist us in providing services to you. In all such situations, we stress the confidential nature of information being shared." },
            ]
        },
        {
            title: "Confidentiality and Security Practices",
            contentData: [
                { content: "We retain records relating to professional services that we provide so that we are better able to assist you with your professional needs and to comply with professional guidelines. In order to guard your nonpublic personal information, we maintain physical, electronic and procedural safeguards that comply with our professional standards." },
                { content: "Please call (623) 294-2934 if you have any questions. Your privacy, our professional ethics, and the ability to provide you with quality legal services are very important to us." },
            ]
        },
    ]
    return (
        <>
            <BreadcrumpPage title="Privacy Policy" breadcrumpTitle="Privacy Policy" />
            <div className='privacy-policy-page-section-container'>
                <div className='row mx-0'>
                    <div className='col-md-8 privacy-policy-page-section-content'>
                        {
                            sectionData?.map((data, index) => (
                                <div key={index} className='my-5'>
                                    <h1>{data?.title}</h1>
                                    {
                                        data?.contentData?.map((data, index) => (
                                            <p key={index}>{data?.content}</p>
                                        ))
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default PrivacyPolicy
