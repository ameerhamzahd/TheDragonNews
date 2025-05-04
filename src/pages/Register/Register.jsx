import React, { use, useState } from 'react';
import { Link, useNavigate } from 'react-router';
import { AuthContext } from '../../provider/Auth/AuthContext';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Register = () => {

    const [error, setErrorMessage] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const { createUser, setUser, updateUser } = use(AuthContext);

    const navigate = useNavigate();

    const handleRegister = (event) => {
        event.preventDefault();

        const name = event.target.name.value;
        const photoURL = event.target.photoURL.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        const terms = event.target.terms.checked;

        // Name Validation
        if (name.length < 5) {
            setErrorMessage("Name should be more than 5 characters.");
            return;
        }
        else {
            setErrorMessage("");
        }

        // Password Validation
        const passwordRegExp = /(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}/;
        if (passwordRegExp.test(password) === false) {
            setErrorMessage('Password must have one lowercase, one uppercase, one digit and 6 characters or longer.')
            return;
        }

        // Checkbox Validation
        if (!terms) {
            setErrorMessage('Please accept Our Terms and Conditions');
            return
        }

        createUser(email, password)
            .then((userCredential) => {
                updateUser({ displayName: name, photoURL: photoURL })
                    .then(() => {
                        setUser({ ...userCredential.user, displayName: name, photoURL: photoURL });

                        navigate("/")
                    })
                    .catch((error) => {
                        alert(error.message);
                        setUser(userCredential.user);
                    })
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

                            <label className="label mt-3 font-semibold">
                                <input name='terms' type="checkbox" className="checkbox" />
                                Accept Terms & Conditions
                            </label>

                            <div><a className="font-semibold text-red-300">{error}</a></div>

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