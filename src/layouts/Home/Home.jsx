import React from 'react';
import { Outlet } from 'react-router';
import LatestNews from '../../components/LatestNews/LatestNews';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import LeftAside from '../Home/LeftAside';
import RightAside from './RightAside';

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

            <main className='w-11/12 mx-auto my-5 grid lg:grid-cols-12 '>
                <aside className='col-span-3'>
                    <LeftAside></LeftAside>
                </aside>

                <section className='main-layout lg:col-span-6'>
                    <Outlet></Outlet>
                </section>

                <aside className='lg:col-span-3'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Home;