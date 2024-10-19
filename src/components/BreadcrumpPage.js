import React from 'react';
import { Link } from 'react-router-dom';
import '../assets/css/breadcrumpPage.css';

const BreadcrumpPage = ({ buttonData, title, breadcrumpTitle, setSelectedType, selectedType }) => {
    return (
        <>
            <div className='breadcrump-page-section-container'>
                <p>
                    <Link to='/' style={{ textDecoration: 'none', color: '#fff' }}>
                        Home
                    </Link> / {breadcrumpTitle}
                </p>
                <h1>{title}</h1>
                {
                    buttonData && (
                        <div className='breadcrump-page-section-buttons'>
                            {
                                buttonData?.map((data, index) => (
                                    <button key={index} onClick={() => setSelectedType(data?.title)}
                                        style={{
                                            backgroundColor: data?.title?.toLowerCase() === selectedType?.toLowerCase() ? '#fff' : '',
                                            color: data?.title?.toLowerCase() === selectedType?.toLowerCase() ? '#000' : '',
                                        }}
                                    >
                                        {data?.title}
                                    </button>
                                ))
                            }
                        </div>
                    )
                }
            </div>
        </>
    );
};

export default BreadcrumpPage;
