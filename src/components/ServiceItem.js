import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';
import { PhotoProvider, PhotoView } from 'react-photo-view';

const ServiceItem = ({ service }) => {
    return (
        <PhotoProvider>
            <div className='shadow-md p-8 rounded-lg'>
                <PhotoView src={service.imgUrl}>
                    <img className='h-52 w-full object-cover rounded-lg cursor-pointer' src={service.imgUrl} alt="" />
                </PhotoView>
                <h2 className='text-3xl font-bold mt-3'>{service.title}</h2>
                <p className='mt-5 text-gray-500'>{service.description.slice(0, 100)}...</p>
                <Link to={`../service-details/${service._id}`}><Button className='mt-5 w-full' variant="gradient">Learn More</Button></Link>
            </div>
        </PhotoProvider>
    );
};

export default ServiceItem;