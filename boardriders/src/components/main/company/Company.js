import React from 'react';

import '../company/company.css';

export function Company(props) {
    const { companyPictures } = props;

    return (
        <div className="company__wrapper">
            <ul className="company__list">
                {companyPictures?.map((picture, index) => (
                    <li key={index} className="company__item">
                        <img src={picture.src} alt={picture.alt} className='company__picture'></img>
                    </li>
                ))}
            </ul>
        </div>
    );
}