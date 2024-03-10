import React, {useState} from "react";

import '../../styles/card.css';

function Card({item}) {
    const [like, setLike] = useState(false);

    const likeToggle = () => {
        setLike(!like);
    };

    return (
        <div className='card'>
            <img className='card__picture' src={item.url} alt="Изображение собаки" />
            <p className="card__text">Прикольная собака, поставьте ей лайк!</p>
            <button className={`card__button card__button--${like ? 'like' : 'not-like'}`} onClick={likeToggle}>{like ? 'Убрать лайк' : 'Поставить лайк'}</button>
        </div>
    );
}

export default Card;