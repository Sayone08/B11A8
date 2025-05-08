import React, { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { getAppointment, removeAppointment } from '../utils';
import LawyerChart from '../components/LawyerChart';
import EmptyState from '../components/EmptyState';

const MyBooking = () => {

    const [displayLawyers, setDisplayLawyers] = useState([])
    useEffect(() => {
        const savedAppointments = getAppointment()
        setDisplayLawyers(savedAppointments)
    }, [])

    if(displayLawyers.length<1)
        return <EmptyState/>
        
    return (
        <div className='w-[1270px] mx-auto mb-[100px]'>
            <LawyerChart singleLawyer={displayLawyers} />

            <div className='mt-[100px]'>
                <h1 className='font-bold text-4xl text-center'>My Today Appointments</h1>
                <p className='text-[18px] font-medium text-[#727272] mt-2 text-center'>
                    Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
                </p>
            </div>

            {
                displayLawyers.map((lawyer, index) => (
                    <div
                        key={index}
                        className='flex flex-col gap-[30px] py-8 px-7 rounded-2xl border border-[#C4C4C4] mt-8'
                    >
                        <div>
                            <h2 className='text-[24px] font-bold'>{lawyer.name}</h2>
                            <div className='flex items-center justify-between my-2'>
                                <p className='text-[18px] font-semibold text-[#a4a4a4]'>{lawyer.speciality}</p>
                                <p className='text-[18px] font-semibold text-[#a4a4a4]'>
                                    Appointment Fee: {lawyer.consultationFee} Taka
                                </p>
                            </div>
                            <Link>
                                <button onClick={() => {
                                    removeAppointment(lawyer.id);
                                    setDisplayLawyers(prev => prev.filter(item => item.id !== lawyer.id));
                                }} className='text-[#e51717] border border-[#ff1010] rounded-full w-full py-2 mt-4 font-bold hover:bg-[#ff6565] hover:text-white'>
                                    Cancel Appointment
                                </button>
                            </Link>
                        </div>
                    </div>
                ))
            }
        </div>
    );
};

export default MyBooking;