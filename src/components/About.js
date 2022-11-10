import { Button } from '@material-tailwind/react';
import React from 'react';
import SectionTitle from './SectionTitle';

const About = () => {
    return (
        <section id='about' className='py-20 bg-gray-50'>
            <SectionTitle title="About me"/>
            <div className="container mx-auto grid gap-10 md:grid-cols-2 place-items-center">
                <div className='p-10'>
                    <img className='rounded-lg' src="assets/lawyer.jpg" alt="" />
                </div>
                <div>
                    <h5 className='text-4xl font-bold'>Dewayne B. Meyer</h5>
                    <div className='w-28 bg-light-blue-500 h-[2px] mt-3 mb-5'></div>
                    <p className='text-gray-500'>Proin faucibus tellus justo in fermentum turpis interdum velulla facilisi usce aliquet commodo libero, tempus egestas nisl gravida eu.</p>
                    <p className='text-gray-500'>Astibulum porttitor vestibulum neque. Vivamus ut massa risus. Suspendisse luctus dolor mauris, a blandit metus tempor ac. Nullam suscipit accumsan magna, eu tempus dolor nisi in lacus.</p>
                    <Button className='mt-5'>Meet me</Button>
                </div>
            </div>
        </section>
    );
};

export default About;