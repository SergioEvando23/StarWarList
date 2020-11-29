import React from 'react';
import './CharacterCard.css';

const CharacterCard = ({personagemCard})=> {
    return (
        <div className="character-card">
            {personagemCard}
        </div>
    );
};

export default CharacterCard;