import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../components/Navbar';
import Foot from '../components/Foot';

const MainLayout = () => {
    return (
        <div>
            <Navbar />
            <div className='min-h-[calc(100vh-334px)]'>
                <Outlet />
            </div>
            <Foot />
        </div>
    );
};

export default MainLayout;