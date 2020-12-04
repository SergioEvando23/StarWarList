import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import './ListVehicleScreen.css';
import VehiclesCard from './vehicleCard/VehicleCard';
import axios from '../../core/axios.config';
import {BASE_URL} from '../../core/constants';

const ListVehicleScreen = props => {
    const [vehicles, setVehicles] = useState({});

    useEffect(() =>{ 
        axios.get("vehicles").then((response) => {
            setVehicles(response.data)
        }).catch(console.error)
    },[])


    const vehicleCard = vehicles?.results?.map((vehicles, index) => {
        const url = vehicles.url;
        const parsedUrl = url.replace(BASE_URL,"")

        return(
            <div key={index}>
              <Link to={`/vehicledetail?url=${parsedUrl}`}><VehiclesCard vehicleCard={vehicles.name}/></Link>  
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