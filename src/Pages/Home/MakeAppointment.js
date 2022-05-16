import React from 'react';
import img from '../../assets/images/doctor.png';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const MakeAppointment = () => {
    return (
        <section className="flex items-center justify-center mt-[300px] mb-[150px]" style={{
            backgroundImage: `url(${appointment})`
        }}>
            <div className="flex-1 hidden lg:block">
                <img className="mt-[-250px]" src={img} alt="" />
            </div>
            <div className="flex-1">
                <h3 className="text-primary text-xl">Make Appointment</h3>
                <h2 className="text-3xl text-white font-bold my-6">Make An Appointment Today</h2>
                <p className="text-white mb-6">Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit, dolore magni deleniti et sit repudiandae, obcaecati inventore minus maxime deserunt fugiat ipsa quam. Optio quisquam consectetur error obcaecati corporis!
                </p>
                <PrimaryButton>Get Started</PrimaryButton>
            </div>
        </section>
    );
};

export default MakeAppointment;