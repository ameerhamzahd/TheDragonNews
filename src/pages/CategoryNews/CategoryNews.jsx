import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import NewsCard from '../../components/NewsCard/NewsCard';

const CategoryNews = () => {

    const [categoryNews, setCategoryNews] = useState([]);
    const { id } = useParams();
    const newsData = useLoaderData();

    useEffect(() => {
        if (id == "0") {
            setCategoryNews(newsData);

            return;
        } else if (id == "1") {
            const targetedNews = newsData.filter((news) => news.others.is_today_pick == true);

            setCategoryNews(targetedNews);
        } else {
            const targetedNews = newsData.filter((news) => news.category_id == id);

            setCategoryNews(targetedNews);
        }
    }, [id, newsData])

    return (
        <div>
            <h1 className='font-bold mb-5'>
                {id == "1" ? (
                    <span className='text-secondary'>Breaking News!!!</span>
                ) : (
                    <>
                        <span className='text-secondary'>{categoryNews.length}</span> News Found!!!
                    </>
                )}
            </h1>

            <div className='grid grid-cols-1 gap-5'>
                {
                    categoryNews.map((eachNews) => <NewsCard key={eachNews.id} eachNews={eachNews}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;