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
                    <h2 className='text-3xl md:text-6xl font-bold mt-3 col-span-2'>Civil Litigation</h2>
                    <img className='' src="https://img.freepik.com/premium-photo/lawyer-judge-counselor-having-team-meeting-with-client-law-legal-services_28283-884.jpg?w=2000" alt="" />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum facilis cumque ullam nihil similique, illo eligendi voluptate nostrum quidem rerum, doloremque ab error praesentium asperiores fuga itaque aliquam expedita. Alias quidem labore mollitia vel officiis porro sit commodi. Officiis totam nobis mollitia consequatur, repudiandae quos iste ea cupiditate, ipsum, quod explicabo? Eius inventore accusamus, repellat ratione ut laboriosam quia id. Officia, tenetur. Vel unde odit blanditiis illo aperiam asperiores voluptatem fugit magnam, mollitia, tempore fugiat repellat distinctio fuga totam culpa. Ratione doloremque, mollitia et natus laudantium totam beatae quisquam enim, accusamus sint, perferendis rerum cumque eius voluptates debitis! Consequatur a soluta animi ab, atque accusamus quas porro tempora veniam officia ex delectus voluptate laboriosam provident magnam voluptas unde praesentium expedita dolorem fugit ad natus aliquam tempore! Sint eos pariatur nulla asperiores in aliquid adipisci ut, labore nemo quidem nostrum nihil, quo aperiam culpa magni ex placeat incidunt enim illo! Suscipit aliquam, laboriosam animi reprehenderit facilis, repellendus harum velit possimus minus voluptatibus eius explicabo veritatis soluta illo non aperiam labore ipsum rerum fugit doloremque eos. Alias mollitia corporis voluptas non quod fugiat qui cumque odit aliquam necessitatibus soluta praesentium molestias enim unde quam aut nemo id quaerat quis atque aliquid, labore quidem explicabo sapiente. Commodi debitis cum assumenda, saepe magni totam ducimus voluptatum consequuntur corporis labore explicabo sapiente corrupti quae quia laudantium illo ut dolor incidunt atque. Laboriosam, ut at? Sit amet culpa dignissimos unde quos debitis atque repudiandae, tempore voluptas soluta dolorum eum ipsa eos error? Pariatur maiores unde magnam praesentium ipsa aliquam laboriosam quibusdam corporis, officia veniam consectetur esse, asperiores perspiciatis veritatis eum? Sunt nihil quasi placeat earum saepe. Sint est rem minima voluptas sapiente eveniet ex, quisquam quod illum harum quibusdam saepe tempore. Quisquam architecto illo, quod molestias quos quam officiis, repellendus adipisci molestiae corporis accusantium, quis similique.</p>
                </div>
                <div className='py-20'>
                    <form onSubmit={handleSendReview}>
                        <h2 className='text-2xl font-bold mb-5'>Please give me your rating</h2>
                        <div className="my-3"><Textarea variant="outlined" type="text" name="review" label="Description" /></div>
                        <Button className="my-3 flex items-center justify-center" type="submit">Send</Button>
                    </form>
                    <h2 className='text-2xl font-bold mb-5'>All reviews</h2>
                    <div className='border-2 border-light-blue-200 p-5 rounded-md my-3'>
                        <div className='flex items-center'>
                            <img className='h-10 w-10 object-cover rounded-full' src="https://images.mubicdn.net/images/cast_member/485176/cache-365014-1606165048/image-w856.jpg?size=800x" alt="" />
                            <span className='whitespace-nowrap font-semibold text-gray-500 ml-3'>Ariana Grande</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio distinctio voluptatem repellendus explicabo cupiditate impedit voluptatibus, nostrum accusamus libero nobis aperiam error sequi.</p>
                    </div>
                    <div className='border-2 border-light-blue-200 p-5 rounded-md my-3'>
                        <div className='flex items-center'>
                            <img className='h-10 w-10 object-cover rounded-full' src="https://images.mubicdn.net/images/cast_member/485176/cache-365014-1606165048/image-w856.jpg?size=800x" alt="" />
                            <span className='whitespace-nowrap font-semibold text-gray-500 ml-3'>Ariana Grande</span>
                        </div>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio distinctio voluptatem repellendus explicabo cupiditate impedit voluptatibus, nostrum accusamus libero nobis aperiam error sequi.</p>
                    </div>
                    <div className='border-2 border-light-blue-200 p-5 rounded-md my-3'>
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