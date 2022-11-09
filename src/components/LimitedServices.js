import { Button } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceItem from './ServiceItem';

const LimitedServices = () => {
    const [services, setServices] = useState([]);
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://shift-lawyer-server.vercel.app/limitedServices');
                const json = await response.json();
                setServices(json);
            } catch (error) {
                console.log("error", error);
            }
        };
        fetchData();
    }, [])
    return (
        <section>
            <div className='container mx-auto py-20'>
                <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10'>
                    {
                        services.map(service => <ServiceItem key={service._id} service={service} />)
                    }
                </div>
                <Link className='flex justify-center md:justify-end mt-10' to="services"><Button>See All</Button></Link>
            </div>
        </section>
    );
};

export default LimitedServices;