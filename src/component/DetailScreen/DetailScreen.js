import React from 'react';
import './DetailScreen.css';
import DetailImage from './components/detailImage/DetailImage';
import DetailFilled from './components/detailFilled/DetailFilled';
import DetailBox from './components/detailBox/DetailBox';

const DetailScreen = props => {
    return (
        <div className="detail-screen">
            DetailScreen
            <DetailImage />
            <DetailFilled />
            <DetailBox />
        </div>
    );
};


export default DetailScreen;