import React from 'react';
import Banner from './Banner';
import Info from './Info';
import clock from '../../assets/icons/clock.svg';
import Services from './Services';
import ExperimentalDentalCare from './ExperimentalDentalCare';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';

const Home = () => {
    return (
        <div>
            <div className="px-12">
                <Banner></Banner>
                <Info></Info>
                <Services></Services>
                <ExperimentalDentalCare></ExperimentalDentalCare>
            </div>
            <MakeAppointment></MakeAppointment>
            <div className="px-12">
                <Testimonials></Testimonials>
            </div>
        </div>
    );
};

export default Home;