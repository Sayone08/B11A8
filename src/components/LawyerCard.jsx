import React from 'react';
import { Link } from 'react-router';
import { AiOutlineTrademark } from "react-icons/ai";
const LawyerCard = ({ lawyers }) => {
    return (
        <div className='flex items-center gap-[25px] p-5 rounded-2xl border border-[#C4C4C4]'>
            <div className='left'>
                <img src={lawyers.image} alt="" className='rounded-2xl' />
            </div>
            <div className='right'>
                <div className='flex gap-2 mb-3'>
                    <span className='px-[14px] py-[6px] text-[#09982F] text-[10px] rounded-full bg-[#b9f8ca] font-medium'>
                        {
                            (lawyers.availability.length != 0) ? 'Available' : 'Not Available'
                        }</span>
                    <span className='px-[14px] py-[6px] text-[#176AE5] text-[10px] rounded-full bg-[#d0dff5] font-medium'>{lawyers.experience}</span>
                </div>

                <h1 className='text-2xl font-bold'>{lawyers.name}</h1>
                <p className='text-lg text-[#9b9b9b]'>{lawyers.speciality}</p>
                <hr className="border-t border-dashed border-gray-500 my-3" />

                <div className='flex items-center gap-1'>
                    <AiOutlineTrademark size={20} className='text-[#9b9b9b]'/>
                    <p className='text-lg text-[#9b9b9b]'>License No: {lawyers.licenseNo}</p>
                </div>



                <Link to={`/lawyer-details/${lawyers.id}`}><button
                    onClick={() =>
                        window.scrollTo(0, 0)
                    }
                    className='text-[#176AE5] border border-[#176AE5] rounded-full w-full py-2 mt-4 font-bold hover:bg-[#176AE5] hover:text-white'>View Details</button></Link>
            </div>
        </div>
    );
};

export default LawyerCard;