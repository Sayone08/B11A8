import React from 'react';
import { Outlet, useLoaderData } from 'react-router';
import Hero from '../components/Hero';
import LawyerContainer from '../components/LawyerContainer';
import Services from '../components/Services';

const Home = () => {

    const data = useLoaderData()
    return (
        <div>
            <Hero/>
            <LawyerContainer lawyers={data}/>
            <Services/>
        </div>
    );
};

export default Home;