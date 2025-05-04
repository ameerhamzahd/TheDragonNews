import React from 'react';
import RightAside from '../../layouts/Home/RightAside';
import { Outlet, useLoaderData, useParams } from 'react-router';
import Header from '../../components/Header/Header';
import NewsDetailsCard from '../../components/NewsDetailsCard/NewsDetailsCard';

const NewsDetails = () => {

    const { id } = useParams();
    const data = useLoaderData();
    const targetedNewsData = data.find((news) => news.id === id);

    return (
        <div>
            <header>
                <Header></Header>
            </header>

            <main className='w-11/12 mx-auto my-5 grid lg:grid-cols-12 gap-5'>
                <section className='main-layout lg:col-span-9'>
                    <h1 className='font-bold mb-5'>News Details</h1>
                    <NewsDetailsCard targetedNewsData={targetedNewsData}></NewsDetailsCard>
                </section>

                <aside className='lg:col-span-3 lg:sticky lg:top-15 lg:h-fit'>
                    <RightAside></RightAside>
                </aside>
            </main>
        </div>
    );
};

export default NewsDetails;