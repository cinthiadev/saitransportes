import React from 'react';
import './cardsInfo.css';

const CardsInfo = ({ cardsData }) => {

    return (
        <div className="cardsInfo">
            <div className='group-cardsInfo'>
                {cardsData.map((card, index) => (
                    <div key={index} className='cardsInfo-descricao'>
                        <img src={card.icon} alt='icone serviços' />
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardsInfo;