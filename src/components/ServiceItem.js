import { Button } from '@material-tailwind/react';
import React from 'react';
import { Link } from 'react-router-dom';

const ServiceItem = ({service}) => {
    return (
        <div className='shadow-md p-8 rounded-lg'>
            <img className='h-52 w-full object-cover rounded-lg' src={service.imgUrl} alt="" />
            <h2 className='text-3xl font-bold mt-3'>{service.title}</h2>
            <p className='mt-5 text-gray-500'>{service.description}</p>
            <Link to={`service-details/${service._id}`}><Button className='mt-5 w-full' variant="gradient">Learn More</Button></Link>
        </div>
    );
};

export default ServiceItem;