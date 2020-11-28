import React from 'react';
import './DetailScreen.css';
import DetailFilled from './components/detailFilled/DetailFilled';
import DetailBox from './components/detailBox/DetailBox';

const DetailScreen = props => {
    return (
        <div className="detail-screen">
            DetailScreen
            <DetailFilled />
            <DetailBox />
        </div>
    );
};


export default DetailScreen;