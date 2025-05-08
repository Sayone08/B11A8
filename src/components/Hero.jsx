import React from 'react';
import bannerImg from '../assets/banner-img-1.png'

const Hero = () => {
    return (
        <div className='w-[1270px] h-[500px] relative mx-auto'>
        <img
            src={bannerImg}
            alt=""
            className="absolute top-0 left-0 w-full h-full object-cover rounded-[24px] z-0"
        />
        
        <div className='absolute top-0 left-0 w-full h-full flex flex-col justify-center items-center z-10 px-6 text-white text-center'>
            <h1 className='text-5xl font-extrabold w-2/3 leading-tight'>It avoids subjective claims or exaggeration that might raise red flags legally</h1>
            <p className='w-3/4 mt-4'>
                Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
            </p>
        </div>
    </div>
    );
};

export default Hero;