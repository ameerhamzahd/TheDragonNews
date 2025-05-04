import React, { use } from 'react';
import { Link } from 'react-router';
import { AuthContext } from '../../provider/Auth/AuthContext';

const Login = () => {

    const { loginUser, setUser } = use(AuthContext);

    const handleLogin = (event) => {
        event.preventDefault();

        const email = event.target.email.value;
        const password = event.target.password.value;

        loginUser(email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                console.log(userCredential.user);
            })
            .catch((error) => {
                alert(error.message);
            })
    }

    return (
        <div className='flex justify-center min-h-screen items-center'>
            <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl py-5">
                <h2 className='font-semibold text-2xl text-center'>Login your account</h2>
                <form onSubmit={handleLogin} className="card-body">
                    <fieldset className="fieldset">
                        <label className="label font-semibold">Email</label>
                        <input name='email' type="email" className="input" placeholder="Email" required/>
                        <label className="label font-semibold">Password</label>
                        <input name='password' type="password" className="input" placeholder="Password" required/>
                        <div><a className="link link-hover font-semibold">Forgot password?</a></div>
                        <button type='submit' className="btn btn-neutral mt-4">Login</button>
                    </fieldset>

                    <p className='text-center pt-3 font-semibold'>Don't have an account? <Link to="/auth/register" className='text-secondary link-hover'>Register</Link></p>
                </form>
            </div>
        </div>
    );
};

export default Login;