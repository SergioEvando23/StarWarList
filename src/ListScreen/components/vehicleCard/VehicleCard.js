import React from 'react';
import './VehicleCard.css'

const VehicleCard = ({vehicleCard}) => {
    return (
        <div className="vehicle-card">
           {vehicleCard}
        </div>
    );
};

export default VehicleCard;