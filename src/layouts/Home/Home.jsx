import React from 'react';
import { Outlet, useNavigation } from 'react-router';
import LatestNews from '../../components/LatestNews/LatestNews';
import Header from '../../components/Header/Header';
import Navbar from '../../components/Navbar/Navbar';
import LeftAside from '../Home/LeftAside';
import RightAside from './RightAside';
import Loader from '../../components/Loader/Loader';

const Home = () => {
    const {state} = useNavigation();

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

            <main className='w-11/12 mx-auto my-5 grid lg:grid-cols-12 gap-5'>
                <aside className='lg:col-span-3 lg:sticky lg:top-15 lg:h-fit'>
                    <LeftAside></LeftAside>
                </aside>

                <section className='main-layout lg:col-span-6'>
                    {
                        state == "loading" ? <Loader></Loader> : <Outlet></Outlet>
                    }
                </section>

                <aside className='lg:col-span-3 lg:sticky lg:top-15 lg:h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default Home;