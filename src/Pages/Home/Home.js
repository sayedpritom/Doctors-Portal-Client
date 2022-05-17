import React from 'react';
import Banner from './Banner';
import Info from './Info';
import clock from '../../assets/icons/clock.svg';
import Services from './Services';
import ExceptionalDentalCare from './ExceptionalDentalCare';
import MakeAppointment from './MakeAppointment';
import Testimonials from './Testimonials';
import ContactUs from './ContactUs';
import Footer from '../Shared/Footer';

const Home = () => {
    return (
        <div>
            <div className="max-w-7xl mx-auto">
                <Banner></Banner>
                <Info></Info>
                <Services></Services>
                <ExceptionalDentalCare></ExceptionalDentalCare>
            </div>
            <MakeAppointment></MakeAppointment>
            <div className="max-w-7xl mx-auto">
                <Testimonials></Testimonials>
            </div>
            <ContactUs></ContactUs>
            <Footer></Footer>
        </div>
    );
};

export default Home;