import React, { use } from 'react';
import { FaGoogle } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { AuthContext } from '../../provider/Auth/AuthContext';
import { useLocation, useNavigate } from 'react-router';

const Social = () => {
    const { googleLogin, setUser, setError } = use(AuthContext);

    const navigate = useNavigate();
    const location = useLocation();

    const handleGoogleLogin = () => {
        googleLogin()
            .then((userCredential) => {
                setUser(userCredential.user);
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch((error) => {
                setError(error);
            })
    }

    return (
        <div>
            <h1 className='font-bold'>Login with</h1>

            <div className='space-y-3 mt-5'>
                <button onClick={handleGoogleLogin} className='btn w-full btn-outline btn-secondary'><FaGoogle size={15} /> Login with Google</button>
            </div>
        </div>
    );
};

export default Social;