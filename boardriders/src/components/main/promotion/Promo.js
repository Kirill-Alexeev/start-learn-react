import React from 'react';

import '../promotion/promo.css';

export function Promo(props) {
    const { promotion } = props;

    return (
        <div className="promo__wrapper">
            {promotion?.map((picture, index) => (
                <a href="index.html" className="promo__link" key={index}>
                    <figure className="promo__picture-wrapper">
                        <img className="promo__picture" src={picture.src} alt={`Акция_${index + 1}`} />
                        <figcaption className="promo__text">{picture.caption}</figcaption>
                    </figure>
                </a>
            ))}
        </div>
    );
}