import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div className="card lg:max-w-lg bg-base-100 shadow-lg text-center">
                <div className="card-body">
                    <h2 className="text-xl font-bold text-secondary">{name}</h2>
                    <p>
                        {
                            slots.length > 0 ? <span>{slots[0]}</span> : <span className="text-red-500">Try Another Date</span>
                        }
                    </p>
                    <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                    <div className="card-actions justify-center">
                        <label
                            htmlFor="booking-modal"
                            onClick={() => setTreatment(service)}
                            disabled={slots.length === 0}
                            className="btn btn-sm btn-secondary text-uppercase text-white bg-gradient-to-r from-secondary to-primary">Book Appointment
                        </label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;