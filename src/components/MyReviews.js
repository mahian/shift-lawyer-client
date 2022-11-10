import React from 'react';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';
import { Link, useLoaderData } from 'react-router-dom';
import useTitle from '../hooks/useTitle';

const MyReviews = () => {
    useTitle('my-reviews');
    const reviews = useLoaderData();
    const handleDelete = review => {
        const agree = window.confirm('Are you sure you want to delete this review ?');
        if (agree) {
            fetch(`https://shift-lawyer-server.vercel.app/reviews/${review._id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => console.log(data))
        }
    }
    return (
        <section className='my-20'>
            <div className='container mx-auto'>
                {
                    reviews.map(review => <div key={review._id} className="flex items-center justify-between bg-blue-gray-50 my-3 px-10 py-5 rounded-lg">
                        <p className='font-semibold'>{review.review}</p>
                        <div className='flex items-center'>
                            <button onClick={()=>handleDelete(review)} className='text-2xl text-red-500 mr-5'><MdDelete /></button>
                            <Link><button className='text-2xl text-green-500'><MdModeEditOutline /></button></Link>
                        </div>
                    </div>)
                }

            </div>
        </section>
    );
};

export default MyReviews;