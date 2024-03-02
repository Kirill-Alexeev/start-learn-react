import React from 'react';

import './slider.css';

// import FirstImage from '/Users/kirus/OneDrive/Рабочий стол/STUDY/start-learn-react/boardriders/src/images/winter-sale1.jpg';
// import SecondImage from '/Users/kirus/OneDrive/Рабочий стол/STUDY/start-learn-react/boardriders/src/images/winter-sale2.jpg';
// import ThirdImage from '/Users/kirus/OneDrive/Рабочий стол/STUDY/start-learn-react/boardriders/src/images/lib-tech.jpg';
import ArrowRight from '/Users/kirus/OneDrive/Рабочий стол/STUDY/start-learn-react/boardriders/src/images/arrow-right.svg';

export function Slider(props) {
    const { sliderPictures } = props;

    return (
        <div className='slider__wrapper'>
            <div className='slider'>
                <button className='slider__button--left'>
                    <img src={ArrowRight} alt='' className='slider__button--left-picture'></img>
                </button>
                <div className='slider__items-wrapper'>
                    <div className='slider__items'>
                        {sliderPictures?.map((picture, index) => (
                            <div key={index} className='slider__item'>
                                <img src={picture.src} alt={picture.alt} className='slider__picture'></img>
                            </div>
                        ))}
                    </div>
                </div>
                <button className='slider__button--right'>
                    <img src={ArrowRight} alt='' className='slider__button--right-picture'></img>
                </button>
            </div>
        </div>
    );
}