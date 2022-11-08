import { Button, Input } from "@material-tailwind/react";
import React from 'react';
import { Link } from "react-router-dom";

const Signup = () => {
    const handleSubmit = event => {
        event.preventDefault();
        const form = event.target;
        const name = form.name.value;
        console.log(name);
    }
    return (
        <div className="container mx-auto py-20">
            <form onSubmit={handleSubmit} className="w-96 mx-auto items-end gap-4">
                <div>
                    <h2 className="text-3xl font-bold">Sign up</h2>
                    <p className="my-5">allready have an account? please <Link>Login</Link></p>
                </div>
                <div className="my-3"><Input variant="outlined" type="text" name="name" label="name" /></div>
                <div className="my-3"><Input variant="outlined" type="text" name="imgUrl" label="Image url" /></div>
                <div className="my-3"><Input variant="outlined" type="email" name="email" label="email" /></div>
                <div className="my-3"><Input variant="outlined" type="password" name="password" label="password" /></div>
                <Button className="w-full my-3" type="submit">Button</Button>
            </form>
        </div>
    );
};

export default Signup;