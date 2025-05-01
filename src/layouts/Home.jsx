import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';

const Home = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>
            </header>

            <main>
                <section className='left-navbar'>

                </section>

                <section className='main-layout'>
                    <Outlet></Outlet>
                </section>

                <section className='right-navbar'>

                </section>
            </main>
        </div>
    );
};

export default Home;