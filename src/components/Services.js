import React, { useEffect, useState } from 'react';
import useTitle from '../hooks/useTitle';
import SectionTitle from './SectionTitle';
import ServiceItem from './ServiceItem';

const Services = () => {
    useTitle('services')
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
                    services.map(service => <ServiceItem key={service._id} service={service}/>)
                }
            </div>
        </section>
    );
};

export default Services;