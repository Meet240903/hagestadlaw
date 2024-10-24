import React from 'react'
import BreadcrumpPage from './BreadcrumpPage'
import '../assets/css/legalDisclaimer.css'

const LegalDesclaimer = () => {
    return (
        <>
            <BreadcrumpPage title="Disclaimer" breadcrumpTitle="Disclaimer" />
            <div className='legal-disclaimer-page-section-container'>
                <div className='row mx-0'>
                    <div className='col-md-6 legal-disclaimer-page-section-content'>
                        <p>
                            This site is designed for general information about our law firm. You agree that the information presented should not be construed to be formal legal advice, nor the formation of an attorney-client relationship. We welcome and encourage persons accessing our site to send us electronic mail. However, such mail cannot provide confidential information to this law firm until a conflicts check has been completed. Also, the sole act of sending an email to our law firm does not create an attorney-client relationship with you. Such a relationship cannot be entered into until we have personally discussed any matter you may have, checked for possible conflicts of interest, sent you written confirmation accepting your matter, and received in return a signed engagement letter acknowledgment, thereby creating an attorney-client relationship.</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default LegalDesclaimer
