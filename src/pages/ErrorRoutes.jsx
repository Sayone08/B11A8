import React from 'react';
import { Link } from 'react-router';
import Navbar from '../components/Navbar';

const ErrorRoutes = () => {
    return (
        <div>
            <Navbar/>
            <div className='flex flex-col items-center py-24 text-center min-h-[calc(100vh-334px)]'>
                <img src="404.jpg" className='w-[300px] rounded-3xl' alt="" />
                <h1 className='my-3 text-5xl font-extrabold text-pink-400'>404 Page Not Found</h1>
                <p className='mb-8 text-xl  text-gray-700'>
                    Opps! The page you are looking for doesn't exists.
                </p>
                <Link to='/'>
                <button className='bg-[#0EA106] text-white rounded-4xl px-6 py-[10px] text-xl font-bold'>Go Back Home</button>
                </Link>
            </div>
        </div>
    );
};

export default ErrorRoutes;