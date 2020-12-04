import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom'
import './DetailVehicleScreen.css';
import DetailVehicles from './detailVehicles/DetailVehicles';
import axios from '../../core/axios.config';

const DetailVehicleScreen = props => {
    const history = useHistory();
    const [ detailVehicles, setDetailVehicles] = useState({});
    
    useEffect(() =>{
        const search = history.location.search
        const parsedSearch = search.replace("?url=", "" )
            axios.get(parsedSearch).then((response) => {
                setDetailVehicles(response.data)
            }).catch(console.error)
    }, [])    

    return (
        <div className="detail-vehicle-screen">
            <DetailVehicles 
            nome={detailVehicles?.name} 
            carga={detailVehicles?.cargo_capacity} 
            tripulacao={detailVehicles?.passengers} 
            velocidade={detailVehicles?.max_atmosphering_speed}
            consumiveis={detailVehicles?.consumables} 
            comprimento={detailVehicles?.length} 
            modelo={detailVehicles?.model} 
            fabricante={detailVehicles?.manufacturer} /> 
        </div>
    );
};

export default DetailVehicleScreen;