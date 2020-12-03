import React, {useEffect , useState} from 'react';
import { useHistory } from 'react-router-dom';
import './DetailScreen.css';
// import personagem from '../../__mocks__/personagem';
// import planeta from '../../__mocks__/planeta';
// import veiculo from '../../__mocks__/veiculo';
import DetailCharacter from './components/detailCharacter/DetailCharacter';
import axios from '../../core/axios.config';
// import DetailVehicles from './components/detailVehicles/DetailVehicles';
// import DetailPlanets from './components/detailPlanets/DetailPlanets';

const DetailScreen = props => {    
    const history = useHistory();
    const [ detailPeople, setDetailPeople] = useState({});

    useEffect(() =>{
        const search = history.location.search
        const parsedSearch = search.replace("?url=", "" )
            axios.get(parsedSearch).then((response) => {
                setDetailPeople(response.data)
            }).catch(console.error)
    }, [])    

    return (
        <div className="detail-screen">
            <DetailCharacter 
                nome={detailPeople?.name}
                cabelo={detailPeople?.hair_color}
                ano={detailPeople?.birth_year}
                genero={detailPeople?.gender} 
                peso={detailPeople?.mass} 
                altura={detailPeople?.height} 
                pele={detailPeople?.skin_color} 
                olhos={detailPeople?.eye_color} 
            />

            {/* <DetailPlanets nome={planeta?.name} diaMes={planeta?.rotation_period} diaAno={planeta?.orbital_period} diametro={planeta?.diameter} 
            clima={planeta?.climate} terreno={planeta?.terrain} agua={planeta?.surface_water} populacao={planeta?.population} /> 

            <DetailVehicles nome={veiculo?.name} carga={veiculo?.cargo_capacity} tripulacao={veiculo?.passengers} velocidade={veiculo?.max_atmosphering_speed}
            consumiveis={veiculo?.consumables} comprimento={veiculo?.length} modelo={veiculo?.model} fabricante={veiculo?.manufacturer} /> */}
        </div> 
    );
};

export default DetailScreen;