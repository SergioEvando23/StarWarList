import React from 'react';
import './DetailScreen.css';
import personagem from '../__mocks__/personagem';
import planeta from '../__mocks__/planeta';
import veiculo from '../__mocks__/veiculo';
import DetailCharacter from './components/detailCharacter/DetailCharacter';
import DetailVehicles from './components/detailVehicles/DetailVehicles';
import DetailPlanets from './components/detailPlanets/DetailPlanets';

const DetailScreen = props => {    

    return (
        <div className="detail-screen">
            <DetailCharacter nome={personagem?.name} cabelo={personagem?.hair_color} ano={personagem?.birth_year} genero={personagem?.gender} 
            peso={personagem?.mass} altura={personagem?.height} pele={personagem?.skin_color} olhos={personagem?.eye_color} />

            <DetailPlanets nome={planeta?.name} diaMes={planeta?.rotation_period} diaAno={planeta?.orbital_period} diametro={planeta?.diameter} 
            clima={planeta?.climate} terreno={planeta?.terrain} agua={planeta?.surface_water} populacao={planeta?.population} /> 

            <DetailVehicles nome={veiculo?.name} carga={veiculo?.cargo_capacity} tripulacao={veiculo?.passengers} velocidade={veiculo?.max_atmosphering_speed}
            consumiveis={veiculo?.consumables} comprimento={veiculo?.length} modelo={veiculo?.model} fabricante={veiculo?.manufacturer} />
        </div> 
    );
};

export default DetailScreen;