import React from 'react';
import About from './About';
import Banner from './Banner';
import LimitedServices from './LimitedServices';

const Home = () => {
    return (
        <div>
            <Banner/>
            <LimitedServices/>
            <About/>
        </div>
    );
};

export default Home;