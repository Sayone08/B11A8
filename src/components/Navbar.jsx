import React from 'react';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className='w-[1270px] mx-auto'>
            <div className="navbar p-0 bg-base-100 pt-2 pb-4">
                <div className="navbar-start">
                    <img src="logo.png" alt="" />
                    <Link to='/' className="text-3xl font-extrabold">Law.BD</Link>
                </div>
                <div className="navbar-center hidden lg:flex">
                    <ul className="menu menu-horizontal px-1">
                        <li className='text-lg'>
                            <NavLink to='/' className={({ isActive }) =>
                                isActive ? 'border-b-4 font-bold' : ''
                            }>Home</NavLink>
                        </li>
                        <li className='text-lg'>
                            <NavLink to='/bookings'className={({ isActive }) =>
                                isActive ? 'border-b-4 font-bold' : ''
                            } >My Bookings</NavLink>
                        </li>
                        <li className='text-lg'>
                            <NavLink to='/blogs' className={({ isActive }) =>
                                isActive ? 'border-b-4 font-bold' : ''
                            }>Blogs</NavLink>
                        </li>
                        <li className='text-lg'>
                            <NavLink to='/contacts' className={({ isActive }) =>
                                isActive ? 'border-b-4 font-bold' : ''
                            }>Contact Us</NavLink>
                        </li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <NavLink to='/contacts'><button className='bg-[#0EA106] text-white rounded-4xl px-6 py-[10px] text-xl font-bold'>Contact Now</button></NavLink>
                </div>
            </div>
        </div>
    );
};

export default Navbar;