import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import  './ListPeopleScreen.css';
// import characters from '../../__mocks__/characteres';
// import planets from '../../__mocks__/planets';
// import vehicles from '../../__mocks__/vehicles';
import axios from '../../core/axios.config';
import CharacterCard from './components/characterCard/CharacterCard';
// import PlanetCard from './components/planetCard/PlanetCard';
// import VehiclesCard from './components/vehicleCard/VehicleCard';


const ListPeopleScreen = props => {
    const [people, setPeople] = useState({});

    useEffect(() => {
        axios.get("people").then((response) => {
            setPeople(response.data)
        }).catch(console.error)
    }, [])


    const personagemCard = people?.results?.map ((personagem, index) => {
        console.log(personagem)
        return(
            <div key={index}>
               <Link to="/detail"><CharacterCard personagemCard={personagem?.name}/></Link>
            </div>
        )
    });

    // const planetCard = planets?.results?.map((planet) => {
    //     return ( 
    //         <div>
    //             <PlanetCard planetCard={planet?.name} />
    //         </div>
    //     )
    // });
    
    // const vehicleCard = vehicles?.results?.map((vehicles) => {
    //     return(
    //         <div>
    //             <VehiclesCard vehicleCard={vehicles.name}/>
    //         </div>
    //     )
    // });

    return (
        <div className="list-people-screen">
            CHARACTERS 
            <div className="list-people-screen__personagem-card">  
                {personagemCard}
            </div> 
            {/* PLANETS
            <div className="list-screen__planet-card">
                {planetCard}
            </div>   
            VEHICLES
            <div className="list-screen__vehicle-card"> 
                {vehicleCard}
            </div> */}
        </div>
    );
};

export default ListPeopleScreen;