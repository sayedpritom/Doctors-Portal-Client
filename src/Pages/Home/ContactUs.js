import React from 'react';
import appointment from '../../assets/images/appointment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ContactUs = () => {
    return (
        <section className="text-center mt-[300px] mb-[150px] py-20" style={{
            backgroundImage: `url(${appointment})`,
            backgroundRepeat: 'no-repeat',
            backgroundSize: 'cover',
        }}>
            <div className="max-w-7xl mx-auto flex items-center justify-center">
                <div className="flex-1">
                    <h3 className="text-primary text-xl">Contact Us</h3>
                    <h2 className="text-3xl text-white my-5">Stay Connected With Us</h2>
                    <div>
                        <input type="text" placeholder="Email Address" className="my-2 input input-bordered input-md w-full max-w-xs" /> <br />
                        <input type="text" placeholder="Subject" className="my-2 input input-bordered input-md w-full max-w-xs" /> <br />
                        <input type="text" placeholder="Your Message" className="my-2 input input-bordered h-20 w-full max-w-xs mb-5" /> <br />
                    </div>
                    <PrimaryButton>Get Started</PrimaryButton>
                </div>
            </div>
        </section>
    );
};

export default ContactUs;