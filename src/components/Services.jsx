import React from 'react';
import CountUp from 'react-countup';

const Services = () => {
    return (
        <div className='w-[1270px] mx-auto my-[100px]'>
            <div className='flex flex-col justify-center items-center mb-8'>
                <h1 className='text-4xl font-extrabold text-center'>We Provide Best Law Services</h1>
                <p className='w-3/4 text-center mt-4'>Our platform connects you with verified, experienced Lawyers across various specialities — all at your convenience.</p>
            </div>

            <div className="flex gap-6 justify-center w-full">
                <div className="bg-[#F3F3F3] rounded-2xl flex flex-col gap-4 px-[48px] py-[40px] flex-1 ">
                    <img src="success-doctor.png" alt="" className='w-[64px] h-[64px]' />
                    <div className="text-[48px] font-extrabold">
                        <CountUp end={199} duration={6} />+
                    </div>
                    <div className='text-lg'>Total Lawyer</div>
                </div>

                <div className="bg-[#F3F3F3] rounded-2xl flex flex-col gap-4 px-[48px] py-[40px] flex-1 ">
                    <img src="success-review.png" alt="" className='w-[64px] h-[64px]' />
                    <div className="text-[48px] font-extrabold">
                        <CountUp end={467} duration={6} />+
                    </div>
                    <div className='text-lg'>Total Reviews</div>
                </div>

                <div className="bg-[#F3F3F3] rounded-2xl flex flex-col gap-4 px-[48px] py-[40px] flex-1 ">
                    <img src="success-patients.png" alt="" className='w-[64px] h-[64px]' />
                    <div className="text-[48px] font-extrabold">
                        <CountUp end={1900} duration={6} />+
                    </div>
                    <div className='text-lg'>Cases Initiated</div>
                </div>

                <div className="bg-[#F3F3F3] rounded-2xl flex flex-col gap-4 px-[48px] py-[40px] flex-1">
                    <img src="success-staffs.png" alt="" className='w-[64px] h-[64px]' />
                    <div className="text-[48px] font-extrabold">
                        <CountUp end={300} duration={6} />+
                    </div>
                    <div className='text-lg'>Total Stuffs</div>
                </div>
            </div>
        </div>
    );
};

export default Services;
