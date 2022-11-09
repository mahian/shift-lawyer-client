import { Button, Textarea } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';

const ServiceDetails = () => {
    const service = useLoaderData();
    const {user} = useContext(AuthContext);
    const handleSendReview = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const reviewObj = {
            review,
            userName: user.displayName,
            userImg: user.photoURL
        }
        console.log(reviewObj);
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
                    
                    <div className='border-2 bg-gray-50 p-5 rounded-md my-3'>
                        <div className='flex items-center'>
                            <img className='h-10 w-10 object-cover rounded-full' src="https://images.mubicdn.net/images/cast_member/485176/cache-365014-1606165048/image-w856.jpg?size=800x" alt="" />
                            <span className='whitespace-nowrap font-semibold text-gray-500 ml-3'>Ariana Grande</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio distinctio voluptatem repellendus explicabo cupiditate impedit voluptatibus, nostrum accusamus libero nobis aperiam error sequi.</p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ServiceDetails;