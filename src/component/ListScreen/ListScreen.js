import React from 'react';
import  './ListScreen.css';
import CharacterImage from './components/characterImage/CharacterImage';
import CharacterFilled from './components/characterFilled/CharacterFilled';
import CharacterCard from './components/characterCard/CharacterCard';

const ListScreen = props => {
    return (
        <div className="list-screen">
            ListScreen
            <CharacterImage />
            <CharacterFilled />
            <CharacterCard />
        </div>
    );
};

export default ListScreen;