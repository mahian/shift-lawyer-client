import React from 'react';

const AuthProviders = () => {
    return (
        <div className='flex items-center justify-center'>
            <button className='w-10 h-10 bg-white shadow-sm p-2 rounded-md mx-2'><img className='w-full' src="assets/google.png" alt="" /></button>
            <button className='w-10 h-10 bg-white shadow-sm p-2 rounded-md mx-2'><img className='w-full' src="assets/facebook.png" alt="" /></button>
            <button className='w-10 h-10 bg-white shadow-sm p-2 rounded-md mx-2'><img className='w-full' src="assets/github.png" alt="" /></button>
        </div>
    );
};

export default AuthProviders;