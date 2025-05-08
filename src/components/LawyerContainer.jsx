import React, { useEffect, useState } from 'react';
import LawyerCard from './LawyerCard';

const LawyerContainer = ({ lawyers }) => {

    const [displayLawyers, setDisplayLawyers] = useState([])

    const [showAll, setShowAll] = useState(false)

    useEffect(() => {
        if (showAll)
            setDisplayLawyers(lawyers)
        else
            setDisplayLawyers(lawyers.slice(0, 6))
    }, [lawyers, showAll])

    return (
        <div className='w-[1270px] mx-auto my-[100px]'>
            <div className='flex flex-col justify-center items-center mb-8'>
                <h1 className='text-4xl font-extrabold text-center'>Our Best Lawyers</h1>
                <p className='w-3/4 text-center mt-4'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>


            <div className='flex flex-col justify-center items-center'>
                <div className='grid grid-cols-2 mb-8 gap-[64px]'>
                    {
                        displayLawyers.map(lawyers => <LawyerCard key={lawyers.id} lawyers={lawyers} />)
                    }
                </div>
                <button
                    onClick={() => {
                        setShowAll(prev => !prev)
                        if (showAll)
                            window.scrollTo(0, 0)
                    }

                    } className='bg-[#0EA106] text-white rounded-4xl px-8 py-[10px] text-xl font-bold mt-6'>
                    {
                        (showAll) ? 'Show Less' : 'View All Lawyers'
                    }
                </button>
            </div>
        </div>
    );
};

export default LawyerContainer;