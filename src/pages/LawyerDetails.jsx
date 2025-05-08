import React from 'react';
import { Link, useLoaderData, useParams } from 'react-router';
import LawyerAvailability from '../components/LawyerAvailability';
import { MdErrorOutline } from "react-icons/md";
import { bookAppointment } from '../utils';
import { useNavigate } from 'react-router-dom';

const LawyerDetails = () => {
    const data = useLoaderData()
    console.log(data)
    const { id } = useParams()
    const navigate = useNavigate();

    const singleLawyer = data.find(lawyer => lawyer.id === parseInt(id))

    const {
        image,
        name,
        speciality,
        experience,
        licenseNo,
        availability,
        consultationFee
    } = singleLawyer || {}

    const handleAppointment = () => {
        const success = bookAppointment(singleLawyer);
        if (success) {
            navigate('/bookings');
            window.scrollTo(0, 0);
          }
    };
    return (
        <div className='w-[1270px] mx-auto mb-[100px]'>
            <div className='bg-[#e2e2e2] rounded-2xl p-[72px] my-8 flex flex-col justify-center items-center'>
                <h1 className='text-3xl font-extrabold'>Lawyer’s Profile Details</h1>
                <p className='font-medium text-center w-3/4 mt-4 text-[#838383]'>Guided by purpose and integrity. Stands for fairness with unwavering focus. Passionate about client rights and justice. Strives to resolve conflicts peacefully. Committed to truth and ethical service.</p>
            </div>


            <div className='flex items-center gap-[40px] p-6 rounded-2xl border border-[#C4C4C4]'>
                <div className='left'>
                    <img src={image} alt="" className='rounded-2xl h-[300px]' />
                </div>
                <div className='right'>
                    <div className='flex gap-2 mb-4'>
                        <span className='px-[14px] py-[6px] text-[#176AE5] text-[12px] rounded-full bg-[#d0dff5] font-medium'>{experience}</span>
                    </div>

                    <h1 className='text-2xl font-bold'>{name}</h1>

                    <div className='flex gap-10 mt-3'>
                        <span><p className=' text-[#9b9b9b]'>{speciality}</p></span>
                        <span><p className=' text-[#9b9b9b]'>License No: {licenseNo}</p></span>
                    </div>

                    <div className='mt-3 flex gap-4 items-center'>
                        <p className='font-semibold'>Availability:</p>
                        <div className='flex flex-wrap gap-2'>
                            {
                                availability.map((available, index) => (
                                    <span
                                        key={index}
                                        className='px-[14px] py-[6px] text-[#ffa200] text-[12px] rounded-full bg-[#ffeed1] font-bold'
                                    >
                                        {available}
                                    </span>
                                ))
                            }
                        </div>
                    </div>

                    <p className='mt-3 font-bold'>Consultation Fee:  <span className='text-[#0EA106] font-extrabold'>Taka {consultationFee}</span></p>
                </div>
            </div>
            
            <div className='flex flex-col gap-[30px] py-8 px-7 rounded-2xl border border-[#C4C4C4] mt-8'>
                <h1 className='font-bold text-2xl text-center'>Book an Appointment</h1>
                <LawyerAvailability availability={availability}/>

                <span className='flex items-center gap-2 px-[14px] py-[6px] text-[#ffa200] text-[16px] rounded-full bg-[#ffeed1] font-bold'>
                <MdErrorOutline size={20} />
                Due to high patient volume, we are currently accepting appointments for today only. We appreciate your understanding and cooperation.
                </span>

                <Link onClick={handleAppointment}><button className='bg-[#0EA106] w-full text-white rounded-4xl px-6 py-[10px] text-2xl font-bold my-4' singlelawyer={singleLawyer} >Book Appointment Now</button></Link>
            </div>
        </div>
    );
};

export default LawyerDetails;