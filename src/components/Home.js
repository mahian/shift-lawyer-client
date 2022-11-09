import React from 'react';
import About from './About';
import Banner from './Banner';
import LimitedServices from './LimitedServices';
import SendMessage from './SendMessage';

const Home = () => {
    return (
        <div>
            <Banner/>
            <LimitedServices/>
            <About/>
            <SendMessage/>
        </div>
    );
};

export default Home;