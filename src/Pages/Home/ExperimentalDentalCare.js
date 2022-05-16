import React from 'react';
import treatment from '../../assets/images/treatment.png';
import PrimaryButton from '../Shared/PrimaryButton';

const ExperimentalDentalCare = () => {
    return (
        <div>
            <div class="hero min-h-screen px-24">
                <div class="hero-content flex-col md:flex-row">
                    <img src={treatment} className="sm:w-full md:w-2/4 lg:w-2/5 md:mr-12 rounded-md" />
                    <div className="">
                        <h1 class="text-5xl font-bold">Exceptional Dental Care, on Your Terms</h1>
                        <p class="py-6">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsumis that it has a more-or-less normal distribution of letters,as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page</p>
                        <PrimaryButton>Get Started</PrimaryButton>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ExperimentalDentalCare;