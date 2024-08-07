import React from 'react';
import './cardsInfo.css';

const CardsInfo = ({ cardsData }) => {

    return (
        <div className="cardsInfo">
            <div className='group-cardsInfo'>
                {cardsData.map((card, index) => (
                    <div key={index} className='box-cardsInfo-descricao'>
                        <div className='icone-cards-info'>
                            <img src={card.icon} alt='icone serviços' />
                        </div>
                        <h3>{card.title}</h3>
                        <p>{card.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default CardsInfo;