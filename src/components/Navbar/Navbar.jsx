import React from 'react';
import logo from "../../assets/logo.png"
import { format } from 'date-fns';

const Navbar = () => {
    return (
        <div className='flex justify-center flex-col items-center gap-3 py-5'>
            <img className='w-80' src={logo} alt={logo} />
            <p className='text-accent'>Journalism Without Fear or Favour</p>
            <p className='font-semibold text-accent'>{format(new Date(), "EEEE, MMMM MM, yyyy")}</p>
        </div> 
    );
};

export default Navbar;