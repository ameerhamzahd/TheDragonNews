import React from 'react';
import { Link } from 'react-router';

const Register = () => {
    return (
        <div>
            <div className='flex justify-center min-h-screen items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
                    <div className="card-body">
                        <fieldset className="fieldset">
                            <label className="label font-semibold">Name</label>
                            <input type="text" className="input" placeholder="Enter your name" />
                            <label className="label font-semibold">Photo URl</label>
                            <input type="text" className="input" placeholder="Enter photo URL" />
                            <label className="label font-semibold">Email</label>
                            <input type="email" className="input" placeholder="Email" />
                            <label className="label font-semibold">Password</label>
                            <input type="password" className="input" placeholder="Password" />
                            <div></div>
                            <button className="btn btn-neutral mt-4">Login</button>
                        </fieldset>

                        <p className='text-center pt-3 font-semibold'>Already have an account? <Link to="/auth/login" className='text-secondary link-hover'>Login</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Register;