import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center bg-base-200 p-3 gap-2'>
            <p className='text-base-100 bg-secondary px-3 py-2'>Latest</p>
            <Marquee className='flex' pauseOnHover={true} speed={75}>
                <p className='font-bold'>📰 Ceasefire talks resume amid escalating Gaza crisis | </p>
                <p className='font-bold'>🌍 UN urges immediate humanitarian access to Gaza Strip | </p>
                <p className='font-bold'>📉 Civilian toll rises as conflict enters third week | </p>
                <p className='font-bold'>✈️ Aid convoys blocked at Rafah border crossing | </p>
                <p className='font-bold'>🕊️ Global protests intensify over Palestine crisis</p>
            </Marquee>
        </div>
    );
};

export default LatestNews;