import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle('blog')
    return (
        <div className='container mx-auto py-20'>
            <div className='bg-blue-gray-50 p-10 my-5'>
                <h2 className='text-4xl font-bold'>Blog title</h2>
                <p className='text-gray-600 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eveniet laboriosam nesciunt itaque, fugiat dolorem commodi ducimus tenetur iure molestiae alias quae est, fuga aliquam quibusdam? Atque architecto repellendus reiciendis.</p>
            </div>
            <div className='bg-blue-gray-50 p-10 my-5'>
                <h2 className='text-4xl font-bold'>Blog title</h2>
                <p className='text-gray-600 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eveniet laboriosam nesciunt itaque, fugiat dolorem commodi ducimus tenetur iure molestiae alias quae est, fuga aliquam quibusdam? Atque architecto repellendus reiciendis.</p>
            </div>
            <div className='bg-blue-gray-50 p-10 my-5'>
                <h2 className='text-4xl font-bold'>Blog title</h2>
                <p className='text-gray-600 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eveniet laboriosam nesciunt itaque, fugiat dolorem commodi ducimus tenetur iure molestiae alias quae est, fuga aliquam quibusdam? Atque architecto repellendus reiciendis.</p>
            </div>
            <div className='bg-blue-gray-50 p-10 my-5'>
                <h2 className='text-4xl font-bold'>Blog title</h2>
                <p className='text-gray-600 mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eveniet laboriosam nesciunt itaque, fugiat dolorem commodi ducimus tenetur iure molestiae alias quae est, fuga aliquam quibusdam? Atque architecto repellendus reiciendis.</p>
            </div>
        </div>
    );
};

export default Blog;