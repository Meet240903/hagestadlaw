import React, { useState } from 'react';
import BreadcrumpPage from './BreadcrumpPage';
import '../assets/css/casesPage.css';

const CasesPage = () => {
    const [selectedType, setSelectedType] = useState("All");

    const buttonData = [
        { title: "All" },
        { title: "Business" },
        { title: "Civil Litigation" },
        { title: "Estate & Probate" },
        { title: "Real Estate" },
    ];

    const sectionData = [
        {
            type: "Business",
            title: "Successful Formation of Nonprofit and Business Phoenix, Arizona",
            content: "Our client approached us to form a nonprofit (501c3) to run their charitable initiative. They were unsure of whether to simultaneously also form a business to support the nonprofit. We walked them through a cohesive strategy that will enable both entities to prosper, filed the paperwork on their behalf, and guided them toward launching operations. Both entities continue to thrive.",
        },
        // Add more cases...
    ];

    // Filter sectionData based on selectedType
    const filteredSectionData = selectedType === "All"
        ? sectionData
        : sectionData.filter(data => data.type === selectedType);

    return (
        <>
            <BreadcrumpPage
                buttonData={buttonData}
                title="Case Results"
                breadcrumpTitle="Cases"
                setSelectedType={setSelectedType}
                selectedType={selectedType} // Passing selectedType
            />
            <div className='cases-page-section-container'>
                <div className='row mx-0 cases-page-section-content'>
                    {
                        filteredSectionData?.map((data, index) => (
                            <div className='col-md-6 cases-page-section-content-boxs' key={index}>
                                <button>{data?.type}</button>
                                <h1 className='cases-title'>{data?.title}</h1>
                                <p>{data?.content}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </>
    );
};

export default CasesPage;
