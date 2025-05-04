import React from 'react';
import { Link, NavLink } from 'react-router';
import user from "../../assets/user.png"

const Navbar = () => {
    const unknown = <>
    
    </>

    const signedInUser = <>
    </>

    return (
        <div className='grid md:grid-cols-3 gap-5'>
            <div className=''></div>
            <div className='nav flex gap-3 text-accent justify-center items-center'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='login flex gap-2 items-center justify-center md:justify-end'>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={user} />
                        </div>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li><a>Settings</a></li>
                        
                    </ul>
                </div>
                <Link to="/auth/login" className='btn btn-primary px-10'>Login</Link>
            </div>
        </div>
    );
};

export default Navbar;