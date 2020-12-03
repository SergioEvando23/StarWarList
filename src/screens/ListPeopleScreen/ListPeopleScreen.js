import React, {useEffect, useState} from 'react';
import {Link} from 'react-router-dom';
import  './ListPeopleScreen.css';
// import characters from '../../__mocks__/characteres';
import axios from '../../core/axios.config';
import CharacterCard from './characterCard/CharacterCard';
import {BASE_URL} from '../../core/constants'

const ListPeopleScreen = props => {
    const [people, setPeople] = useState({});

    useEffect(() => {
        axios.get("people").then((response) => {
            setPeople(response.data)
        }).catch(console.error)
    }, [])

    const personagemCard = people?.results?.map ((personagem, index) => {
        const url = personagem?.url;
        const parsedUrl = url.replace(BASE_URL, "");
            
        return(
            <div key={index}>
               <Link to={`/detail?url=${parsedUrl}`}><CharacterCard personagemCard={personagem?.name}/></Link>
            </div>
        )
    });
    
    return (
        <div className="list-people-screen">
            CHARACTERS 
            <div className="list-people-screen__personagem-card">  
                {personagemCard}
            </div> 
        </div>
    );
};

export default ListPeopleScreen;