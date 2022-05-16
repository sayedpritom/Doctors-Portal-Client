import React from 'react';
import Banner from './Banner';
import Info from './Info';
import clock from '../../assets/icons/clock.svg';
import Services from './Services';
import ExperimentalDentalCare from './ExperimentalDentalCare';

const Home = () => {
    return (
        <div className="px-12">
            <Banner></Banner>
            <Info></Info>
            <Services></Services>
            <ExperimentalDentalCare></ExperimentalDentalCare>
        </div>
    );
};

export default Home;