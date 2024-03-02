import React from 'react';

import '../header/header.css';

import Pointer from '/Users/kirus/OneDrive/Рабочий стол/STUDY/start-learn-react/boardriders/src/images/pointer.svg';
import Arrow from '/Users/kirus/OneDrive/Рабочий стол/STUDY/start-learn-react/boardriders/src/images/arrow.svg';
import Delivery from '/Users/kirus/OneDrive/Рабочий стол/STUDY/start-learn-react/boardriders/src/images/delivery.svg';
import Boardriders from '/Users/kirus/OneDrive/Рабочий стол/STUDY/start-learn-react/boardriders/src/images/boardriders-logo.svg';
import Favourites from '/Users/kirus/OneDrive/Рабочий стол/STUDY/start-learn-react/boardriders/src/images/favourites.svg';

function HeaderTop() {
    return (
        <div className="header__top-wrapper">
            <div className="header__top">
                <img src={Pointer} alt='' className='header__region-picture'></img>
                <p className="header__region">Ваш регион доставки:</p>
                <button className="header__button">Москва</button>
                <img src={Arrow} alt='' className='header__button-picture'></img>
                <ul className="header__top-pages">
                    <li className="header__top-page">
                        <a href="index.html" className="header__top-link">Магазины</a>
                    </li>
                    <li className="header__top-page">
                        <a href="index.html" className="header__top-link">Помощь</a>
                    </li>
                    <li className="header__top-page">
                        <a href="index.html" className="header__top-link">Блоги</a>
                    </li>
                </ul>
                <ul className="header__service">
                    <li className="header__service-item">
                        <img src={Delivery} alt='' className='header__service-picture'></img>
                        Бесплатная доставка
                    </li>
                    <li className="header__service-item">
                        <img src={Delivery} alt='' className='header__service-picture'></img>
                        Оплата при получении
                    </li>
                    <li className="header__service-item">
                        <img src={Delivery} alt='' className='header__service-picture'></img>
                        Возврат в течении 14 дней
                    </li>
                </ul>
            </div>
        </div>
    );
}

function HeaderMiddle() {
    return (
        <div className="header__mid-wrapper">
            <div className="header__mid">
                <ul className="header__section">
                    <li className="header__section-item">
                        <a href="index.html" className="header__section-link">Мужчинам</a>
                    </li>
                    <li className="header__section-item">
                        <a href="index.html" className="header__section-link">Женщинам</a>
                    </li>
                    <li className="header__section-item">
                        <a href="index.html" className="header__section-link">Детям</a>
                    </li>
                </ul>
                <a href="index.html" className="header__logo">
                    <img src={Boardriders} alt="Логотип 'Boardriders'" className="header__logo-picture"></img>
                </a>
                <ul className="header__actions">
                    <li className="header__actions-item">
                        <a href="index.html" className="header__actions-link">
                            <img src={Favourites} alt="" className="header__actions-picture"></img>
                            ВОЙТИ
                        </a>
                    </li>
                    <li className="header__actions-item">
                        <a href="index.html" className="header__actions-link">
                            <img src={Favourites} alt="" className="header__actions-picture"></img>
                            ИЗБРАННОЕ
                        </a>
                    </li>
                    <li className="header__actions-item">
                        <a href="index.html" className="header__actions-link">
                            <img src={Favourites} alt="" className="header__actions-picture"></img>
                            КОРЗИНА
                        </a>
                    </li>
                    <li className="header__actions-item">
                        <a href="index.html" className="header__actions-link">
                            <img src={Favourites} alt="" className="header__actions-picture"></img>
                            ПОИСК
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    );
}

function HeaderBottom() {
    return (
        <nav className="header__navigation">
            <ul className="header__nav-list">
                <li className="header__nav-item">
                    <a href="index.html" className="header__nav-link">Новинки</a>
                </li>
                <li className="header__nav-item">
                    <a href="index.html" className="header__nav-link">Сноуборд</a>
                </li>
                <li className="header__nav-item">
                    <a href="index.html" className="header__nav-link">Лыжи</a>
                </li>
                <li className="header__nav-item">
                    <a href="index.html" className="header__nav-link">Скейт</a>
                </li>
                <li className="header__nav-item">
                    <a href="index.html" className="header__nav-link">Лонгборд</a>
                </li>
                <li className="header__nav-item">
                    <a href="index.html" className="header__nav-link">Вейкборд</a>
                </li>
                <li className="header__nav-item">
                    <a href="index.html" className="header__nav-link">Серф</a>
                </li>
                <li className="header__nav-item">
                    <a href="index.html" className="header__nav-link">Sup</a>
                </li>
                <li className="header__nav-item">
                    <a href="index.html" className="header__nav-link">Одежда</a>
                </li>
                <li className="header__nav-item">
                    <a href="index.html" className="header__nav-link">Обувь</a>
                </li>
                <li className="header__nav-item">
                    <a href="index.html" className="header__nav-link">Аксессуары</a>
                </li>
                <li className="header__nav-item">
                    <a href="index.html" className="header__nav-link">Бренды</a>
                </li>
                <li className="header__nav-item">
                    <a href="index.html" className="header__nav-link" id="sale">Распродажа</a>
                </li>
            </ul>
        </nav>
    );
}

export function Header() {
    return (
        <div className='header__wrapper'>
            <HeaderTop />
            <HeaderMiddle />
            <HeaderBottom />
        </div>
    );
}