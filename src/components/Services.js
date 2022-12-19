import React, { useEffect, useState } from 'react';
import useTitle from '../hooks/useTitle';
import SectionTitle from './SectionTitle';
import ServiceItem from './ServiceItem';

const Services = () => {
    useTitle('services')
    const [services, setServices] = useState([]);
    const [loading, setLoading] = useState(true)
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch('https://shift-lawyer-server.vercel.app/services');
                const json = await response.json();
                setLoading(false)
                setServices(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [])

    if (loading) {
        return <div className='flex items-center justify-center py-10'>
            <div class="w-12 h-12 rounded-full animate-spin border-2 border-solid border-blue-500 border-t-transparent"></div>
        </div>
    }
    return (
        <section className='my-20 container mx-auto'>
            <SectionTitle title="Our services" />
            <div className='grid md:grid-cols-3 gap-10'>
                {
                    services.map(service => <ServiceItem key={service._id} service={service} />)
                }
            </div>
        </section>
    );
};

export default Services;