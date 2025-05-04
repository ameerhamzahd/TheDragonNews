import React from 'react';
import { Link } from 'react-router';

const Login = () => {
    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login Your Account</h2>
                <div className="card-body">
                    <fieldset className="fieldset">
                        <label className="label font-semibold">Email</label>
                        <input type="email" className="input" placeholder="Email" />
                        <label className="label font-semibold">Password</label>
                        <input type="password" className="input" placeholder="Password" />
                        <div><a className="link link-hover font-semibold">Forgot password?</a></div>
                        <button className="btn btn-neutral mt-4">Login</button>
                    </fieldset>

                    <p className='text-center pt-3 font-semibold'>Don't have an account? <Link to="/auth/register" className='text-secondary link-hover'>Register</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Login;