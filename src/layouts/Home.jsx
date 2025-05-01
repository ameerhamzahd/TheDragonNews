import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import { Outlet } from 'react-router';
import LatestNews from '../components/LatestNews/LatestNews';

const Home = () => {
    return (
        <div>
            <header>
                <Navbar></Navbar>

                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>
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