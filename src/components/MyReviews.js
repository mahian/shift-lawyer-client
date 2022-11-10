import React from 'react';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

const MyReviews = () => {
    return (
        <section className='my-20'>
            <div className='container mx-auto'>
                <div className="flex items-center justify-between bg-blue-gray-50 my-3 px-10 py-5 rounded-lg">
                    <p className='font-semibold'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
                        molestiae quas vel sint commodi repudiandae consequuntur voluptatum laborum
                        numquam blanditiis harum quisquam eius sed odit fugiat iusto fuga praesentium
                        optio, eaque rerum! Provident similique accusantium nemo autem.</p>
                    <div className='flex items-center'>
                        <button className='text-2xl text-red-500 mr-5'><MdDelete /></button>
                        <Link><button className='text-2xl text-green-500'><MdModeEditOutline /></button></Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MyReviews;