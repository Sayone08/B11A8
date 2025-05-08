import React from 'react';
import { useLoaderData } from 'react-router';
import { SlCalender } from "react-icons/sl";
const Blogs = () => {
    const data = useLoaderData()
    console.log(data)
    return (
        <div className='w-[1270px] mx-auto mb-[100px]'>
            <div className='mt-[70px]'>
                <h1 className='font-bold text-4xl text-center'>Blogs</h1>
                <p className='text-[18px] font-medium text-[#727272] mt-2 text-center'>
                    Do visit our Blogs to know more about us.
                </p>
            </div>

            <div className='mt-10 flex flex-col gap-6'>
                {data.map(blog => (
                    <div
                        key={blog.id}
                        className='rounded-xl bg-gray-200 px-8 py-6'>
                        <h1 className='text-xl font-bold'>{blog.question}</h1>
                        <hr className="border-t border-dashed border-gray-500 my-3" />
                        <div className='flex flex-col'>
                            <p className='text-lg text-blue-600 font-semibold'>Answer:</p>
                            <p className='text-lg'>{blog.answer}</p>
                        </div>
                        <hr className="border-t border-dashed border-gray-500 my-3" />
                        <div className='flex items-center gap-[8px]'>
                            <SlCalender className='text-lg text-gray-500' />
                            <p className='text-lg text-gray-500'>Added at {blog.dateAdded}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Blogs;