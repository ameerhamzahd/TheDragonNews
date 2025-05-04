import React, { use, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/Auth/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from '../../firebase/Firebase.config';

const Login = () => {

    const { loginUser, setUser } = use(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const [error, setError] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const emailRef = useRef();

    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        loginUser(email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                navigate(`${location.state ? location.state : "/"}`)
            })
            .catch((error) => {
                setError(error.code);
            })
    }

    const handleForgetPassword = () => {
        const email = emailRef.current.value;

        setError("");
        sendPasswordResetEmail(auth, email)
            .then(() => {
                alert('Password reset email sent!!!');
            })
            .catch(error => {
                setError(error.message);
            })
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label font-semibold">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" ref={emailRef} required />
                        <label className="label font-semibold">Password</label>
                        <div className='relative'>
                            <input
                                type={showPassword ? 'text' : 'password'}
                                name='password'
                                className="input"
                                placeholder="Password" />
                            <a
                                onClick={() => { setShowPassword(!showPassword) }}
                                className='btn btn-xs absolute top-2 right-6'>
                                {
                                    showPassword ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>
                                }
                            </a>
                        </div>
                        <div onClick={handleForgetPassword}><a className="link link-hover font-semibold">Forgot password?</a></div>
                        <div><a className="font-semibold text-red-300">{error}</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </fieldset>

                    <p className='text-center pt-3 font-semibold'>Don't have an account? <Link to="/auth/register" className='text-secondary link-hover'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;