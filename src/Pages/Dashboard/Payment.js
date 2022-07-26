import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';

const stripePromise = loadStripe('pk_test_51LHYudDkWragjx8KesnC1upjgYx11cHs11snac8UNXx2Umj3Pb9kQIMdrMQWkBttbouueS1AiFqAZ2gyeyngW8Vx00yI1LIfVq');

const Payment = () => {
    const { id } = useParams();
    const url = `https://immense-shore-30870.herokuapp.com/booking/${id}`;

    const { data: appointment, isLoading } = useQuery(['booking', id], () => fetch(url, {
        method: 'GET',
        headers: {
            'authorization': `Bearer ${localStorage.getItem('accessToken')}`
        }
    }).then(res => res.json()));

    if (isLoading) {
        return <Loading></Loading>;
    }
    return (
        <div className="m-20">
            <div class="card w-50 bg-base-100 shadow-xl">
                <div class="card-body">
                    <p className="text-success font-bold">Hello, {appointment.patientName}</p>
                    <h2 class="card-title">Pay for {appointment.treatment}</h2>
                    <p>We will see you on <span className="text-orange-700">{appointment.date}</span> at <span className="text-orange-700">{appointment.slot}</span></p>
                    <p>Please pay: ${appointment.price}</p>
                </div>
            </div>
            <div class="card flex-shrink-0 w-50 max-w-md shadow-2xl bg-base-100 my-10">
                <div class="card-body">
                    <Elements stripe={stripePromise}>
                        <CheckoutForm appointment={appointment} />
                    </Elements>
                </div>
            </div>
        </div>
    );
};

export default Payment;