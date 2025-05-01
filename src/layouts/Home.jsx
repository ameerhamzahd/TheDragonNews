import React from 'react';
import { Outlet } from 'react-router';
import LatestNews from '../components/LatestNews/LatestNews';
import Header from '../components/Header/Header';
import Navbar from '../components/Navbar/Navbar';

const Home = () => {
    return (
        <div>
            <header>
                <Header></Header>

                <section className='w-11/12 mx-auto my-3'>
                    <LatestNews></LatestNews>
                </section>

                <nav className='w-11/12 mx-auto my-3'>
                    <Navbar></Navbar>
                </nav>
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