import React from 'react';
import './DetailCharacter.css';

const DetailCharacter = ({nome, cabelo, ano, genero, peso,  altura, pele, olhos }) => {
    return (
        <div className="detail-character">
            Detail Character: 
            <div className="detail-character__detail-character-info">
            <p>NAME: {nome} </p>

            <p>HAIR COLOR: {cabelo} </p>

            <p>YEAR OF BIRTH: {ano} </p>

            <p>GENDER: {genero}</p>

            <p>MASS: {peso}kg </p>

            <p>HEIGHT: {altura}cm </p>

            <p>SKIN COLOR: {pele} </p>

            <p>EYE COLOR: {olhos} </p>
            </div>
        </div>
    );
};

export default DetailCharacter;