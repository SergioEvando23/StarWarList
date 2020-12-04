import React from 'react';
import './DetailPlanets.css';

const DetailPlanets = ({nome, diaMes, diaAno, diametro, clima, terreno, agua, populacao}) => {
    return (
        <div className="detail-planets">
            Detail Planets: 
            <div className="detail-planets__detail-planets-info">
            <p>NAME: {nome} </p>

            <p>DAYS OF THE MONTH: {diaMes} </p>

            <p>DAYS OF THE YEAR: {diaAno} </p>

            <p>DIAMETER: {diametro} Km² </p>

            <p>CLIMATE: {clima} </p>

            <p>TERRAIN: {terreno} </p>

            <p>SURFFACE WATER: {agua} </p>

            <p>POPULATION: {populacao} </p>
            </div>
        </div>
    );
};

export default DetailPlanets;