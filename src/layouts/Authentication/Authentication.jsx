import React from 'react';
import Navbar from '../../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Authentication = () => {
    return (
        <div className='bg-base-100 min-h-screen'>
            <header className='w-11/12 mx-auto my-5'>
                <Navbar></Navbar>
            </header>

            <main className='w-11/12 mx-auto'>
                <Outlet></Outlet>
            </main>
        </div>
    );
};

export default Authentication;