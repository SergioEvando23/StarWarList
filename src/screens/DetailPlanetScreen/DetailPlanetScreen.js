import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router-dom'
import './DetailPlanetScreen.css';
import DetailPlanets from './detailPlanets/DetailPlanets';
import axios from '../../core/axios.config';

const DetailPlanetScreen = props => {
    const history = useHistory();
    const [ detailPlanets, setDetailPlanets] = useState({});
    
    useEffect(() =>{
        const search = history.location.search
        const parsedSearch = search.replace("?url=", "" )
            axios.get(parsedSearch).then((response) => {
                setDetailPlanets(response.data);
            }).catch(console.error)
    }, [])    
    
    return (
        <div className="detail-planet-screen">
            <DetailPlanets 
            nome={detailPlanets?.name} 
            diaMes={detailPlanets?.rotation_period} 
            diaAno={detailPlanets?.orbital_period} 
            diametro={detailPlanets?.diameter} 
            clima={detailPlanets?.climate} 
            terreno={detailPlanets?.terrain}
            agua={detailPlanets?.surface_water} 
            populacao={detailPlanets?.population} />
        </div>
    );
};

export default DetailPlanetScreen;