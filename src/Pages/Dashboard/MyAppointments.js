import { signOut } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';

const MyAppointments = () => {
    const [appointments, setAppointments] = useState([]);
    const [user] = useAuthState(auth);
    const navigate = useNavigate();

    useEffect(() => {
        if (user) {
            fetch(`https://immense-shore-30870.herokuapp.com/booking?patient=${user.email}`, {
                method: 'GET',
                headers: {
                    'authorization': `Bearer ${localStorage.getItem('accessToken')}`
                }
            })
                .then(response => {
                    console.log('res', response);
                    if (response.status === 401 || response.status === 403) {
                        signOut(auth);
                        localStorage.removeItem('accessToken');
                        navigate('/');
                    }
                    return response.json();
                })
                .then(data => {
                    setAppointments(data);
                })
        }
    }, [user])

    return (
        <div>
            <h2>My Appointments: {appointments.length}</h2>
            <div class="overflow-x-auto">
                <table class="table w-full">
                    <thead>
                        <tr>
                            <th></th>
                            <th>Name</th>
                            <th>Date</th>
                            <th>Time</th>
                            <th>Treatment</th>
                            <th>Payment</th>
                        </tr>
                    </thead>
                    <tbody>
                        {appointments.map((a, index) => <tr key={a._id}>
                            <th>{index + 1}</th>
                            <td>{a.patientName}</td>
                            <td>{a.date}</td>
                            <td>{a.slot}</td>
                            <td>{a.treatment}</td>
                            <td>
                                {(a.price && !a.paid) && <Link to={`/dashboard/payment/${a._id}`}><button class="btn btn-xs btn-success">Pay</button></Link>}
                                {(a.price && a.paid) && <div>
                                    <span class="text text-success">Paid </span>
                                    <small class="text text-orange-500">Transaction Id: {a.transactionId}</small>
                                </div>}
                            </td>
                        </tr>)}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyAppointments;