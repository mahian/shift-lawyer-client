import React from 'react';
import useTitle from '../hooks/useTitle';
import About from './About';
import Banner from './Banner';
import LimitedServices from './LimitedServices';
import SendMessage from './SendMessage';

const Home = () => {
    useTitle('home')
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