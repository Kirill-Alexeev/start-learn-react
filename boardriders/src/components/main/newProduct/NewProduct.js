import React from 'react';

import '../newProduct/newProduct.css'

import FavouritesIcon from '../../../images/favourites-icon.svg';
import ArrowRight from '../../../images/arrow-right.svg';

export function NewProduct(props) {
    const { newProducts } = props;

    return (
        <div className="new-products__wrapper">
            <h2 className="new-products__headline">Новинки</h2>
            <button className="new-products__button--left"><img src={ArrowRight} id='left' alt="Left arrow"/></button>
            <ul className="new-products__list">
                {newProducts.map((product, index) => (
                    <li key={index} className="new-products__item">
                        <img src={product.picture} alt={product.title} className="new-products__picture"></img>
                        <img src={FavouritesIcon} alt="Сохранить в избранное" className="new-products__favourites"></img>
                        <a href={product.link} className="new-products__title">{product.title}</a>
                        <p className="new-products__gender">{product.gender}</p>
                        <p className="new-products__price">{product.price}</p>
                    </li>
                ))}
            </ul>
            <button className="new-products__button--right"><img src={ArrowRight} alt="Right arrow"/></button>
            <button className="new-products__button--more">Показать больше</button>
        </div>
    );
}