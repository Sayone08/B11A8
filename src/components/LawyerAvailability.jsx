import React from 'react';
import dayjs from 'dayjs'
import utc from 'dayjs/plugin/utc'
import timezone from 'dayjs/plugin/timezone'

dayjs.extend(utc)
dayjs.extend(timezone)

const LawyerAvailability = ({ availability }) => {

    const today = dayjs().tz("Asia/Dhaka").format("dddd");

    const isAvailableToday = availability.includes(today);

    return (
        <div>
            <hr className="border-t border-dashed border-gray-500 mb-4" />
            <div className='mt-3 flex justify-between items-center'>
                <p className='font-bold text-[20px]'>Availability:</p>
                <p className='font-medium'>
                    {
                        isAvailableToday ? (
                            <span className='px-[18px] py-[6px] text-[#09982F] text-[14px] rounded-full bg-[#b9f8ca] font-bold'>Lawyer Available Today</span>
                        ) : (
                            <span className='px-[18px] py-[6px] text-[#f92626] text-[14px] rounded-full bg-[#f8b9b9] font-bold'>Lawyer Not Available Today</span>
                        )
                    }
                </p>
            </div>
            <hr className="border-t border-dashed border-gray-500 mt-4" />
        </div>
    );
};

export default LawyerAvailability;