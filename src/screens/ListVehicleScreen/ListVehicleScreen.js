import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './ListVehicleScreen.css';
import VehiclesCard from './vehicleCard/VehicleCard';
// import vehicles from '../../__mocks__/vehicles';
import axios from '../../core/axios.config';

const ListVehicleScreen = props => {
    const [vehicles, setVehicles] = useState({});

    useEffect(() =>{ 
        axios.get("vehicles").then((response) => {
            setVehicles(response.data)
        }).catch(console.error)
    },[])


    const vehicleCard = vehicles?.results?.map((vehicles) => {
        return(
            <div>
              <Link to="/detail"><VehiclesCard vehicleCard={vehicles.name}/></Link>  
            </div>
        )
    });
    return (
        <div className="list-vehicle-screen">
            VEHICLES
            <div className="list-vehicle-screen__vehicle-card"> 
                {vehicleCard}
            </div> 
        </div>
    );
};
export default ListVehicleScreen;