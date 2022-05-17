import React from 'react';

const Service = ({ service, setTreatment }) => {
    const { name, slots } = service;
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <div class="card-body">
                    <h2 class="card-title text-secondary">{name}</h2>
                    <p>
                        {
                            slots.length > 0 ? <span class="">{slots[0]}</span> : <span class="text-red-500">Try Another Date</span>
                        }
                    </p>
                    <p>{slots.length} {slots.length > 1 ? 'Spaces' : 'Space'} Available</p>
                    <div class="card-actions justify-center">
                        <label
                            for="booking-modal" 
                            onClick={() => setTreatment(service)}
                            disabled={slots.length === 0}
                            className="btn btn-secondary text-uppercase text-white">Book Appointment</label>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;