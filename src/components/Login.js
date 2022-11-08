import { Button, Input } from '@material-tailwind/react';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../context/UserContext';
import AuthProviders from './AuthProviders';

const Login = () => {
    const {signInWithEmail} = useContext(AuthContext)

    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        signInWithEmail(email, password)
        .then((userCredential) => {
            console.log(userCredential);
            form.reset();
            alert('signed in successfully')
          })
          .catch((error) => {
            console.log(error.message);
          });
    }
    return (
        <div className="container mx-auto py-20">
            <form onSubmit={handleSubmit} className="w-96 mx-auto items-end gap-4">
                <div>
                    <h2 className="text-3xl font-bold">Login</h2>
                    <p className="my-5">not have an account yet? please <Link className='text-light-blue-500' to="../signup">register</Link></p>
                </div>
                <div className="my-3"><Input variant="outlined" type="email" name="email" label="email" /></div>
                <div className="my-3"><Input variant="outlined" type="password" name="password" label="password" /></div>
                <Button className="w-full my-3" type="submit">Log in</Button>
                <div className="flex items-center my-3">
                    <div className="bg-gray-200 w-full h-[1px]"></div>
                    <p className="mx-3 whitespace-nowrap text-gray-400">or sign up with</p>
                    <div className="bg-gray-200 w-full h-[1px]"></div>
                </div>
                <AuthProviders/>
            </form>
        </div>
    );
};

export default Login;