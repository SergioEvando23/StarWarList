import React from 'react';
import './PlanetCard.css'

const PlanetCard = ({planetCard}) => {
    return (
        <div className="planet-card">
            {planetCard}
        </div>
    );
};

export default PlanetCard;