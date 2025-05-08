import React from 'react';
import { Link, NavLink } from 'react-router';
import { ImFacebook2 } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";

const Foot = () => {
    return (
        <div>
            <footer className="footer footer-horizontal footer-center bg-black text-white rounded p-10">
                <nav className='flex'>
                    <img src="logo-footer.png" alt="" />
                    <Link to='/' className="text-3xl font-extrabold">Law.BD</Link>
                </nav>
                <nav className="grid grid-flow-col gap-4 text-[#C5C5C5]">
                    <NavLink to='/' className={({ isActive }) =>
                        isActive ? 'border-b-4 font-bold' : ''
                    }>Home</NavLink>
                    <NavLink to='/bookings' className={({ isActive }) =>
                        isActive ? 'border-b-4 font-bold' : ''
                    }>My Bookings</NavLink>
                    <NavLink to='/blogs' className={({ isActive }) =>
                        isActive ? 'border-b-4 font-bold' : ''
                    }>Blogs</NavLink>
                    <NavLink to='/contacts' className={({ isActive }) =>
                        isActive ? 'border-b-4 font-bold' : ''
                    }>Contacts</NavLink>
                </nav>
                <nav>
                <hr className="w-[300px] border-t border-dashed border-gray-500 mb-4" />
                    <div className="grid grid-flow-col gap-4 items-center">
                        <NavLink to="https://www.facebook.com/sayone.dey/" target='_blank'><ImFacebook2 size={28} /></NavLink>
                        <NavLink to="https://github.com/Sayone08" target='_blank'><FaGithub size={30} /></NavLink>
                        <NavLink to="https://www.youtube.com/@sayoneetroyee8555" target='_blank'><FaYoutube size={30} /></NavLink>
                        <NavLink to="https://www.instagram.com/sayonee_troyee?igsh=bXFwNzcyeDVobzFo" target='_blank'><AiFillInstagram size={30} /></NavLink>

                    </div>
                </nav>
            </footer>
        </div>
    );
};

export default Foot;