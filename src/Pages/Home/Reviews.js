import React from 'react';

const Reviews = (props) => {
    const { img, name, review, location } = props.review;
    return (
        <div className="card lg:max-w-lg bg-base-100 shadow-xl">
            <div className="card-body">
                <p>{review}</p>
                <div className="flex items-center mt-4">
                    <div className="avatar mr-6">
                        <div className="w-16 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4">
                            <img src={img} />
                        </div>
                    </div>
                    <div>
                        <h2 className="card-title">{name}</h2>
                        <p className="text-xl">{location}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Reviews;