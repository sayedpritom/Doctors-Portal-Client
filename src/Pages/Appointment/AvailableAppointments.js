import { format } from 'date-fns';
import React, { useEffect, useState } from 'react';
import BookingModal from './BookingModal';
import Service from './Service';
import { useQuery } from "react-query";
import Loading from '../Shared/Loading';

const AvailableAppointments = ({ date }) => {
    // const [services, setServices] = useState([]);
    const [treatment, setTreatment] = useState(null);

    const formattedDate = format(date, 'PP');
    const { data: services, isLoading, refetch } = useQuery(['available', formattedDate], () => fetch(`https://immense-shore-30870.herokuapp.com/available?date=${formattedDate}`)
            .then(response => response.json()));

    // useEffect(() => {
    //     fetch(`https://immense-shore-30870.herokuapp.com/available?date=${formattedDate}`)
    //         .then(response => response.json())
    //         .then(data => setServices(data))
    // }, [formattedDate])

    if(isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="min-h-screen">
            <h4 className="text-xl text-secondary text-center my-20">Available Appointments on {format(date, 'PP')}</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {services?.map(service => <Service
                    service={service}
                    key={service._id}
                    setTreatment={setTreatment}
                ></Service>)}
            </div>
            {treatment && <BookingModal 
            date={date} 
            treatment={treatment}
            setTreatment={setTreatment}
            refetch={refetch}
            ></BookingModal>}
        </div>
    );
};

export default AvailableAppointments;