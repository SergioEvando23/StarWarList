import React from 'react';
import './DetailVehicles.css';

const DetailVehicles = ({nome, carga, tripulacao, velocidade, consumiveis, comprimento, modelo, fabricante}) => {
    return (
        <div className="detail-vehicles">
            Detail Vehicles: 
            <div className="detail-vehicles__detail-vehicles-info">
            <p>NAME: {nome} </p>

            <p>CARGO CAPACITY: {carga} Kg</p>

            <p>CREW: {tripulacao} manning </p>

            <p>MAX SPEED: {velocidade} anos-luz/h</p>

            <p>CONSUMABLES: {consumiveis} Kg</p>

            <p>LENGHT: {comprimento} m²</p>

            <p>MODEL: {modelo} </p>

            <p>MANUFACTURER: {fabricante} </p>
            </div>
        </div>
    );
};

export default DetailVehicles;