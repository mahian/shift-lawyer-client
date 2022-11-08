import React, { useContext } from 'react';
import { AuthContext } from '../context/UserContext';

const AuthProviders = () => {
    const {signInWithGoogle, signInWithGithub, signInWithFacebook} = useContext(AuthContext);
    return (
        <div className='flex items-center justify-center'>
            <button onClick={()=> signInWithGoogle().then(res => console.log(res.user)).catch(error => console.log(error.message))} className='w-10 h-10 bg-white shadow-sm p-2 rounded-md mx-2'><img className='w-full' src="assets/google.png" alt="" /></button>
            <button onClick={()=> signInWithFacebook().then(res => console.log(res.user)).catch(error => console.log(error.message))} className='w-10 h-10 bg-white shadow-sm p-2 rounded-md mx-2'><img className='w-full' src="assets/facebook.png" alt="" /></button>
            <button onClick={()=> signInWithGithub().then(res => console.log(res.user)).catch(error => console.log(error.message))} className='w-10 h-10 bg-white shadow-sm p-2 rounded-md mx-2'><img className='w-full' src="assets/github.png" alt="" /></button>
        </div>
    );
};

export default AuthProviders;