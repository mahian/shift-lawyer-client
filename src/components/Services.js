import React, { useEffect, useState } from 'react';
import SectionTitle from './SectionTitle';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

const Services = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://shift-lawyer-server.vercel.app/services');
                const json = await response.json();
                setServices(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [])
    return (
        <section className='my-20 container mx-auto'>
            <SectionTitle title="Our services" />
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    services.map(service => <div key={service._id} className='shadow-md p-8 rounded-lg'>
                        <img className='h-52 w-full object-cover rounded-lg' src={service.imgUrl} alt="" />
                        <h2 className='text-3xl font-bold mt-3'>{service.title}</h2>
                        <p className='mt-5 text-gray-500'>{service.description}</p>
                        <Link to={`service-details/${service._id}`}><Button className='mt-5 w-full' variant="gradient">Learn More</Button></Link>
                    </div>)
                }
            </div>
        </section>
    );
};

export default Services;