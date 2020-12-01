import React from 'react';
import './DetailVehicles.css';

const DetailVehicles = ({nome, carga, tripulacao, velocidade, consumiveis, comprimento, modelo, fabricante}) => {
    return (
        <div className="detail-vehicles">
            Detail Vehicles: 
            <div className="detail-vehicles__detail-vehicles-info">
            <p>NAME: {nome} </p>

            <p>CARGO CAPACITY: {carga} </p>

            <p>CREW: {tripulacao} </p>

            <p>MAX SPEED: {velocidade}</p>

            <p>CONSUMABLES: {consumiveis} </p>

            <p>LENGHT: {comprimento} </p>

            <p>MODEL: {modelo} </p>

            <p>MANUFACTURER: {fabricante} </p>
            </div>
        </div>
    );
};

export default DetailVehicles;