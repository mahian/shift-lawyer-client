import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';


const Manage = () => {
    const services = useLoaderData();

    const handleDelete = service => {
        const agree = window.confirm(`Are you sure you want to delete: ${service.title} ?`);
        if (agree) {
            fetch(`https://shift-lawyer-server.vercel.app/services/${service._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }

    return (
        <div>
            {
                services.map(service => <div key={service._id} className="flex items-center justify-between bg-blue-gray-50 my-3 px-10 py-5 rounded-lg">
                    <h4 className='font-bold text-2xl'>{service.title}</h4>
                    <div className='flex items-center'>
                        <button onClick={() => handleDelete(service)} className='text-2xl text-red-500 mr-5'><MdDelete /></button>
                        <Link to={`../update-service/${service._id}`}><button className='text-2xl text-green-500'><MdModeEditOutline /></button></Link>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Manage;