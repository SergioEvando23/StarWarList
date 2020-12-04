import React, {useEffect , useState} from 'react';
import { useHistory } from 'react-router-dom';
import './DetailPeopleScreen.css';
import DetailCharacter from './detailCharacter/DetailCharacter';
import axios from '../../core/axios.config';

const DetailPeopleScreen = props => {    
    const history = useHistory();
    const [ detailPeople, setDetailPeople] = useState({});

    useEffect(() =>{
        const search = history?.location?.search
        const parsedSearch = search.replace("?url=", "" )
            axios.get(parsedSearch).then((response) => {
                setDetailPeople(response.data)
            }).catch(console.error)
    }, [])    

    return (
        <div className="detail-people-screen">
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
        </div> 
    );
};

export default DetailPeopleScreen;