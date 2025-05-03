import React from 'react';
import swimming from "../../assets/swimming.png"
import classImage from "../../assets/class.png"
import playground from "../../assets/playground.png"

const QZone = () => {
    return (
        <div className='bg-base-200 p-5 rounded-xl'>
            <h1 className='font-bold mb-5'>Q-zone</h1>

            <div className='space-y-5'>
                <div className='flex justify-center'>
                    <img src={swimming} alt={swimming} />
                </div>

                <div className='flex justify-center'>
                    <img src={classImage} alt={classImage} />
                </div>

                <div className='flex justify-center'>
                    <img src={playground} alt={playground} />
                </div>
            </div>
        </div>
    );
};

export default QZone;