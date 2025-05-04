import React, { use } from 'react';
import { Link, NavLink } from 'react-router';
import userAvatar from "../../assets/user.png"
import { AuthContext } from '../../provider/Auth/AuthContext';

const Navbar = () => {

    const { user, logoutUser } = use(AuthContext);

    const handleLogout = () => {
        logoutUser()
        .then(() => {
            alert("Logged Out Successfully.")
        })
        .catch ((error) => {
            console.log(error)
        });
    };

    // const unknown = <>

    // </>

    // const signedInUser = <>
    // </>

    return (
        <div className='grid lg:grid-cols-3 gap-5'>
            <div className='flex font-semibold text-accent justify-center items-center italic'>{user && user.email}</div>
            <div className='nav flex gap-3 text-accent justify-center items-center'>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/career">Career</NavLink>
            </div>
            <div className='login flex gap-2 items-center justify-center lg:justify-end'>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img
                                alt="Tailwind CSS Navbar component"
                                src={userAvatar} />
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
                {
                    user ? (<Link onClick={handleLogout} to="/auth/login" className='btn btn-primary px-10'>Logout</Link>) : (<Link to="/auth/login" className='btn btn-primary px-10'>Login</Link>)
                }

                
            </div>
        </div>
    );
};

export default Navbar;