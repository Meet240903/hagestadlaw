import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import '../../assets/css/practiceAreaMontanaPageSectionsCSS/practiceAreaMontanaFAQSection.css';
import FadeAnimation from '../FadeAnimation';

const PracticeAreaFAQSection = ({ sectionData }) => {
    const [activeIndex, setActiveIndex] = useState(null); // Track the currently active accordion item

    const handleAccordionClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index); // Toggle accordion open/close
    };

    return (
        <>
            <div className='practice-area-faq-section-container'>
                <div className='row mx-0 p-0 practice-area-faq-section-content'>
                    <div className='col-md-6 p-0 practice-area-faq-section-left-content'>
                        <FadeAnimation direction="right" duration="1.5s">
                            <h1>FAQ</h1>
                        </FadeAnimation>
                    </div>
                    <div className='col-md-6 p-0 practice-area-faq-section-right-content'>
                        {
                            sectionData?.map((data, index) => (
                                <FadeAnimation key={index} direction="left" duration="1.5s">
                                    <div
                                        className={`practice-area-faq-section-right-content-accordion-boxs ${activeIndex === index ? 'active' : ''}`}
                                        onClick={() => handleAccordionClick(index)}
                                    >
                                        <div className='practice-area-faq-section-right-content-accordion-boxs-title'>
                                            <h3>{data?.title}</h3>
                                            <FontAwesomeIcon icon={activeIndex === index ? faChevronUp : faChevronDown} />
                                        </div>
                                        <p>{data?.content}</p> {/* Animated content */}
                                    </div>
                                </FadeAnimation>
                            ))
                        }
                    </div>
                </div>
            </div>
        </>
    );
};

export default PracticeAreaFAQSection;
