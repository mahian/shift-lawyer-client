import React, { useEffect, useState } from 'react';
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
            <div className='container mx-auto grid md:grid-cols-3 gap-10 py-20'>
                {
                    services.map(service => <ServiceItem key={service._id} service={service} />)
                }
            </div>
        </section>
    );
};

export default LimitedServices;