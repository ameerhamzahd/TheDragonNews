import React from 'react';
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h1 className='font-bold mb-5'>Find Us on</h1>

            <div className="join join-vertical w-full">
                <button className="btn join-item bg-base-100"><FaFacebook size={16}/> Facebook</button>
                <button className="btn join-item bg-base-100"><FaXTwitter size={16}/></button>
                <button className="btn join-item bg-base-100"><FaInstagram size={16}/>Instagram</button>
            </div>
        </div>
    );
};

export default FindUs;