import React from 'react';
import SectionTitle from './SectionTitle';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';

const Service = () =>{
    return (
        <div className='shadow-md p-8 rounded-lg'>
            <img className='h-52 w-full rounded-lg' src="https://img.freepik.com/premium-photo/lawyer-judge-counselor-having-team-meeting-with-client-law-legal-services_28283-884.jpg?w=2000" alt="" />
            <h2 className='text-3xl font-bold mt-3'>Civil Litigation</h2>
            <p className='mt-5 text-gray-500'>Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum.</p>
            <Link to="service-details"><Button className='mt-5 w-full' variant="gradient">Learn More</Button></Link>
        </div>
    );
}

const Services = () => {
    return (
        <section className='my-20 container mx-auto'>
            <SectionTitle title="Our services"/>
            <div className='grid md:grid-cols-3 gap-10'>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
                <Service/>
            </div>
        </section>
    );
};

export default Services;