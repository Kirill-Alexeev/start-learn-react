import React from 'react';

import { Slider } from './slider/Slider';
import { Company } from './company/Company';
import { Promo } from './promotion/Promo';
import { NewProduct } from './newProduct/NewProduct';

function Main() {
    const sliderPictures = [
        { src: require('../../images/winter-sale1.jpg'), alt: 'Зимняя распродажа до -70%' },
        { src: require('../../images/winter-sale2.jpg'), alt: 'Зимняя распродажа до -70%' },
        { src: require('../../images/lib-tech.jpg'), alt: 'LIB TECH' }
    ];
    
    const companyPictures = [
        { src: require('../../images/elka.png'), alt: 'Компания1' },
        { src: require('../../images/scullcandy.png'), alt: 'Компания2' },
        { src: require('../../images/elka.png'), alt: 'Компания3' },
        { src: require('../../images/scullcandy.png'), alt: 'Компания4' },
        { src: require('../../images/elka.png'), alt: 'Компания5' },
        { src: require('../../images/scullcandy.png'), alt: 'Компания6' },
        { src: require('../../images/elka.png'), alt: 'Компания7' },
        { src: require('../../images/scullcandy.png'), alt: 'Компания8' },
        { src: require('../../images/elka.png'), alt: 'Компания9' },
        { src: require('../../images/scullcandy.png'), alt: 'Компания10' }
    ];
      
    const promotion = [
        { src: require('../../images/promo.jpg'), caption: 'НАЗВАНИЕ АКЦИИ №1' },
        { src: require('../../images/promo.jpg'), caption: 'НАЗВАНИЕ АКЦИИ №2' }
    ];

    const newProducts = [
        {   picture: require('../../images/board.png'),
            title: 'LIB TECH',
            gender: 'Мужской Сноуборд',
            price: '34392 ₽',
            link: '#',
        },
        {   picture: require('../../images/board.png'),
            title: 'LIB TECH',
            gender: 'Мужской Сноуборд',
            price: '34392 ₽',
            link: '#',
        },
        {   picture: require('../../images/board.png'),
            title: 'LIB TECH',
            gender: 'Мужской Сноуборд',
            price: '34392 ₽',
            link: '#',
        },
        {   picture: require('../../images/board.png'),
            title: 'LIB TECH',
            gender: 'Мужской Сноуборд',
            price: '34392 ₽',
            link: '#',
        }
    ];
    
    return (
        <div>
            <Slider sliderPictures={sliderPictures} />
            <Company companyPictures={companyPictures} />
            <Promo promotion={promotion} />
            <NewProduct newProducts={newProducts} />
        </div>
      );
}

export default Main;