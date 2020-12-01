import React from 'react';
import './DetailPlanets.css';

const DetailPlanets = ({nome, diasMes, diasAno, diametro, clima, terreno, agua, populacao}) => {
    return (
        <div className="detail-planets">
            Detail Planets: 
            <div className="detail-planets__detail-planets-info">
            <p>NAME: {nome} </p>

            <p>DAYS OF THE MONTH: {diasMes} </p>

            <p>DAYS OF THE YEAR: {diasAno} </p>

            <p>DIAMETER: {diametro}</p>

            <p>CLIMATE: {clima} </p>

            <p>TERRAIN: {terreno} </p>

            <p>SURFFACE WATER: {agua} </p>

            <p>POPULATION: {populacao} </p>
            </div>
        </div>
    );
};

export default DetailPlanets;