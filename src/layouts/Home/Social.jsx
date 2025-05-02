import React from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

const Social = () => {
    return (
        <div>
            <h1 className='font-bold'>Login with</h1>

            <div className='space-y-3 mt-5'>
                <button className='btn w-full btn-outline btn-secondary'><FaGoogle size={15}/> Login with Google</button>
                <button className='btn w-full btn-outline btn-primary'><FaGithub size={15}/> Login with GitHub</button>
            </div>
        </div>
    );
};

export default Social;