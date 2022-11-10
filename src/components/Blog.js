import React from 'react';
import useTitle from '../hooks/useTitle';

const Blog = () => {
    useTitle('blog')
    return (
        <div className='container mx-auto py-20'>
            <div className='bg-blue-gray-50 p-10 my-5'>
                <h2 className='text-4xl font-bold'>Difference between SQL and NoSQL</h2>
                <p className='text-gray-600 mt-5'>SQL is the programming language used to interface with relational databases. (Relational databases model data as records in rows and tables with logical links between them). NoSQL is a class of DBMs that are non-relational and generally do not use SQL.</p>
            </div>
            <div className='bg-blue-gray-50 p-10 my-5'>
                <h2 className='text-4xl font-bold'>What is JWT, and how does it work?</h2>
                <p className='text-gray-600 mt-5'>JWT, or JSON Web Token, is an open standard used to share security information between two parties — a client and a server. Each JWT contains encoded JSON objects, including a set of claims. JWTs are signed using a cryptographic algorithm to ensure that the claims cannot be altered after the token is issued.
                    JWTs differ from other web tokens in that they contain a set of claims. Claims are used to transmit information between two parties. What these claims are depends on the use case at hand. For example, a claim may assert who issued the token, how long it is valid for, or what permissions the client has been granted.
                </p>
            </div>
            <div className='bg-blue-gray-50 p-10 my-5'>
                <h2 className='text-4xl font-bold'>What is the difference between javascript and NodeJS?</h2>
                <p className='text-gray-600 mt-5'>1. NodeJS :
                    NodeJS is a cross-platform and opensource Javascript runtime environment that allows the javascript to be run on the server-side. Nodejs allows Javascript code to run outside the browser. Nodejs comes with a lot of modules and mostly used in web development.
                    <br />
                    2. JavaScript :
                    Javascript is a Scripting language. It is mostly abbreviated as JS. It can be said that Javascript is the updated version of the ECMA script. Javascript is a high-level programming language that uses the concept of Oops but it is based on prototype inheritance. </p>
            </div>
            <div className='bg-blue-gray-50 p-10 my-5'>
                <h2 className='text-4xl font-bold'>How does NodeJS handle multiple requests at the same time?</h2>
                <p className='text-gray-600 mt-5'>How NodeJS handle multiple client requests? NodeJS receives multiple client requests and places them into EventQueue. NodeJS is built with the concept of event-driven architecture. NodeJS has its own EventLoop which is an infinite loop that receives requests and processes them.</p>
            </div>
        </div>
    );
};

export default Blog;