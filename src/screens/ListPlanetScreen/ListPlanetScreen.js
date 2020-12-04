import React, {useEffect, useState} from 'react';
import './ListPlanetScreen.css'
import PlanetCard from './planetCard/PlanetCard';
import {Link } from 'react-router-dom';
import axios from '../../core/axios.config';
import {BASE_URL} from '../../core/constants';


const ListPlanetScreen = props => {
    const [planets, setPlanets] = useState({});

    useEffect(() => {
        axios.get("planets").then((response => {
            setPlanets(response.data)
        })).catch(console.error)
    },[])


    const planetCard = planets?.results?.map((planet, index) => {
        const url = planet.url;
        const parsedUrl = url.replace(BASE_URL,"")

        return ( 
            <div key={index}>
                <Link to={`/planetdetail?url=${parsedUrl}`}><PlanetCard planetCard={planet?.name} /></Link>  
            </div>
        )
     });
    return (
        <div className="list-planet-screen">
            PLANETS    
            <div className="list-planet-screen__planet-card">
                {planetCard}
            </div> 
        </div>
    );
};

export default ListPlanetScreen;