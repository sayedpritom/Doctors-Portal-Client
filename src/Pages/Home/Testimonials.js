import React from 'react';
import qoute from '../../assets/icons/quote.svg';
import people1 from '../../assets/images/people1.png';
import people2 from '../../assets/images/people2.png';
import people3 from '../../assets/images/people3.png';
import Reviews from './Reviews';

const Testimonials = () => {
    const reviews = [
        {
            _id: 1,
            name: 'John Doe',
            img: people1,
            location: 'Romania',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit, dolore magni deleniti et sit repudiandae, obcaecati inventore minus maxime deserunt fugiat ipsa quam.'
        },
        {
            _id: 2,
            name: 'Megan Fox',
            img: people2,
            location: 'Dubai',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit, dolore magni deleniti et sit repudiandae, obcaecati inventore minus maxime deserunt fugiat ipsa quam.'
        },
        {
            _id: 3,
            name: 'Amber Heard',
            img: people3,
            location: 'France',
            review: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel odit, dolore magni deleniti et sit repudiandae, obcaecati inventore minus maxime deserunt fugiat ipsa quam.'
        },
    ]
    return (
        <section>
            <div className="flex justify-between">
                <div>
                    <h4 className="text-xl text-primary font-bold">Testimonials</h4>
                    <h2 className="text-3xl font-bold my-4">What Our Patients Say</h2>
                </div>
                <div>
                    <img src={qoute} className="w-24 lg:w-48" alt="" srcset="" />
                </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-24">
                {
                    reviews.map(review => <Reviews key={review._id} review={review}></Reviews>)
                }
            </div>
        </section>
    );
};

export default Testimonials;