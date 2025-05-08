import React from 'react';
import { Link } from 'react-router';

const EmptyState = () => {
    return (
        <div>
            <div className='py-24 text-center'>
                <h1 className='mb-3 text-5xl font-medium text-gray-900'>You Have not Book any Appointment Yet!</h1>
                <p className='mb-8 text-xl  text-gray-700'>
                    Browse Lawyers to Book your Appointment.
                </p>
                <Link to='/'>
                <button className='bg-[#0EA106] text-white rounded-4xl px-6 py-[10px] text-xl font-bold'>Back to Home</button>
                </Link>
            </div>
        </div>
    );
};

export default EmptyState;