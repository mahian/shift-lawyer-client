import React from 'react';
import { Outlet } from 'react-router-dom';
import Nav from '../components/Nav';

const Main = () => {
    return (
        <div>
            <Nav/>
            <Outlet/>
        </div>
    );
};

export default Main;