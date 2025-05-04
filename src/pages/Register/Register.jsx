import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/Auth/AuthContext';

const Register = () => {

    const { createUser, setUser } = use(AuthContext);

    const handleRegister = (event) => {
        event.preventDefault();

        // const name = event.target.name.value;
        // const photoURL = event.target.photoURL.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUser(email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
            })
            .catch((error) => {
                alert(error.message);
            })
    };

    return (
        <div>
            <div className='flex justify-center min-h-screen items-center'>
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                    <h2 className='font-semibold text-2xl text-center'>Register your account</h2>
                    <form onSubmit={handleRegister} className="card-body">
                        <fieldset className="fieldset">
                            <label className="label font-semibold">Name</label>
                            <input name="name" type="text" className="input" placeholder="Enter your name" required />
                            <label className="label font-semibold">Photo URl</label>
                            <input name="photoURL" type="text" className="input" placeholder="Enter photo URL" required />
                            <label className="label font-semibold">Email</label>
                            <input name="email" type="email" className="input" placeholder="Email" required />
                            <label className="label font-semibold">Password</label>
                            <input name='password' type="password" className="input" placeholder="Password" required />
                            <div></div>
                            <button type='submit' className="btn btn-neutral mt-4">Register</button>
                        </fieldset>

                        <p className='text-center pt-3 font-semibold'>Already have an account? <Link to="/auth/login" className='text-secondary link-hover'>Login</Link></p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;