import React from 'react';
import Social from './Social';
import FindUs from './FindUs';
import QZone from './QZone';

const RightAside = () => {
    return (
        <div className='space-y-5'>
            <Social></Social>
            <FindUs></FindUs>
            <QZone></QZone>
        </div>
    );
};

export default RightAside;