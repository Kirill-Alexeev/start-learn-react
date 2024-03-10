import React from "react";
import Card from "../Card/Card";

import '../../styles/card-list.css';

function CardList({items}) {
    return (
        <div className="card-list">
            {items.map((item, index) => (
                <Card key={index} item={item}/>
            ))}
        </div>
    );
}

export default CardList;