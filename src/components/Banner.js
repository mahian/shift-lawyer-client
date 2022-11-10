import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='relative'>
            <img className='w-full object-cover min-h-screen md:h-screen' src="assets/court.jpeg" alt="" />
            <div className='hero-content px-20 text-white absolute top-0 w-full h-full flex flex-col justify-center'>
                <h5 className='text-2xl font-bold text-gray-500'>with lawyer & attorney</h5>
                <h1 className='text-5xl md:text-8xl font-bold'>every client <br /> matters.</h1>
                <div className='mt-10'>
                <Link><Button className='text-white' variant="outlined">Learn more about me</Button></Link>
                </div>
            </div>
        </div>
    );
};

export default Banner;