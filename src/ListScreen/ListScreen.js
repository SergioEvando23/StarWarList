import React from 'react';
import  './ListScreen.css';
import characters from '../__mocks__/characteres'
import planets from '../__mocks__/planets'
import vehicles from '../__mocks__/vehicles'

import CharacterCard from './components/characterCard/CharacterCard';
import PlanetCard from './components/planetCard/PlanetCard'
import VehiclesCard from './components/vehicleCard/VehicleCard'

const ListScreen = props => {
//   console.log(characters)
    const personagemCard = characters?.results.map ((personagem) => {
        return (
            <div>
                <CharacterCard personagemCard={personagem?.name}/>
            </div>
        )
    });

    const planetCard = planets?.results.map((planet) => {
        return ( 
            <div>
                <PlanetCard planetCard={planet?.name} />
            </div>
        )
    });
    
    const vehicleCard = vehicles?.results.map((vehicles) => {
        return(
            <div>
                <VehiclesCard vehicleCard={vehicles.name}/>
            </div>
        )
    });

    return (
        <div className="list-screen">
            CHARACTERS 
            <div className="list-screen__personagem">  
                {personagemCard}
            </div> 
            PLANETS
            <div className="list-screen__planet-card">
                {planetCard}
            </div>   
            VEHICLES
            <div className="list-screen__vehicle-card"> 
                {vehicleCard}
            </div>
        </div>
    );
};

export default ListScreen;