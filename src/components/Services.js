import React from 'react';
import SectionTitle from './SectionTitle';
import { GiClawHammer } from 'react-icons/gi';
import { Link } from 'react-router-dom';

const Service = () =>{
    return (
        <div className='shadow-md p-8 rounded-lg'>
            <GiClawHammer className='text-4xl text-light-blue-500'/>
            <h2 className='text-3xl font-bold mt-3'>Civil Litigation</h2>
            <p className='mt-5 text-gray-500'>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
        </div>
    );
}

const Services = () => {
    return (
        <section className='my-20 container mx-auto'>
            <SectionTitle title="Our services"/>
            <div className='grid md:grid-cols-3 gap-10'>
                <Link to="service-details"><Service/></Link>
                <Link to="service-details"><Service/></Link>
                <Link to="service-details"><Service/></Link>
                <Link to="service-details"><Service/></Link>
                <Link to="service-details"><Service/></Link>
                <Link to="service-details"><Service/></Link>
            </div>
        </section>
    );
};

export default Services;