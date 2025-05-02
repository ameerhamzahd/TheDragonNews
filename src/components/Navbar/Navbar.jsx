import React from 'react';
import { NavLink } from 'react-router';
import user from "../../assets/user.png"

const Navbar = () => {
    return (
        <div className='grid md:grid-cols-3 gap-5'>
            <div className=''></div>
            <div className='nav flex gap-3 text-accent justify-center items-center'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='login flex gap-2 items-center justify-center md:justify-end'>
                <img src={user} alt={user} />
                <button className='btn btn-primary px-10'>Login</button>
            </div>
        </div>
    );
};

export default Navbar;