import { Button, Textarea } from '@material-tailwind/react';
import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const ServiceDetails = () => {
    const service = useLoaderData();
    const { user } = useContext(AuthContext);
    const [reviews, setReviews] = useState([]);
    // fetch reviews
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await fetch(`https://shift-lawyer-server.vercel.app/reviews/${service._id}`);
                const json = await response.json();
                setReviews(json);
            } catch (error) {
                console.log("error", error);
            }
        };

        fetchData();
    }, [])
    const handleSendReview = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const reviewObj = {
            serviceId: service._id,
            review,
            userName: user.displayName,
            userImg: user.photoURL,
            email: user.email,
        }
        fetch('https://shift-lawyer-server.vercel.app/add-review', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(reviewObj)
        }).then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    alert('review added successfully');
                    form.reset();
                }
            })
    }
    return (
        <section className='container mx-auto my-20'>
            <div className=''>
                <div>
                    <h2 className='text-3xl md:text-6xl font-bold mt-3 col-span-2'>{service.title}</h2>
                    <img className='' src={service.imgUrl} alt="" />
                    <p>{service.description}</p>
                </div>
                <div className='py-20'>
                    <form onSubmit={handleSendReview}>
                        <h2 className='text-2xl font-bold mb-5'>Please give me your rating</h2>
                        <div className="my-3"><Textarea variant="outlined" type="text" name="review" label="Description" /></div>
                        <Button className="my-3 flex items-center justify-center" type="submit">Send</Button>
                    </form>
                    <h2 className='text-2xl font-bold mb-5'>All reviews</h2>
                    {
                        reviews.length > 0 ?
                        reviews.map(review => <div key={review._id} className='border-2 bg-gray-50 p-5 rounded-md my-3'>
                            <div className='flex items-center'>
                                <img className='h-10 w-10 object-cover rounded-full' src={review.userImg} alt="" />
                                <span className='whitespace-nowrap font-semibold text-gray-500 ml-3'>{review.userName}</span>
                            </div>
                            <p>{review.review}</p>
                        </div>):
                        <div className='bg-gray-50 text-gray-500 font-bold rou p-10 text-3xl text-center'>No reviews were added</div>
                    }

                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;