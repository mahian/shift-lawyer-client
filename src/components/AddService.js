import { Button, Input, Textarea } from '@material-tailwind/react';
import React, { useEffect, useState } from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';


const AddService = () => {
    const handleAddServices = event =>{
        event.preventDefault();
        const form = event.target;
        const title = form.title.value;
        const imgUrl = form.imgUrl.value;
        const description = form.description.value;
        const service = {title, imgUrl, description};
        fetch('https://shift-lawyer-server.vercel.app/add-service', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(service)
        }).then(res => res.json())
        .then(data => {
            if(data.acknowledged){
                alert('service added successfully');
                form.reset();
            }
        })
    }
    return (
        <div>
            <form onSubmit={handleAddServices} className="w-full mx-auto items-end gap-4">
                <div>
                    <h2 className="text-3xl font-bold mb-5">Add Service</h2>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <div className="my-3"><Input variant="outlined" type="text" name="title" label="title" /></div>
                    <div className="my-3"><Input variant="outlined" type="text" name="imgUrl" label="Image url" /></div>
                </div>
                <div className="my-3"><Textarea variant="outlined" type="text" name="description" label="Description" /></div>
                <Button className="w-full my-3 flex items-center justify-center" type="submit">Add <AiFillPlusCircle className='text-2xl ml-2' /></Button>
            </form>
        </div>
    );
};

export default AddService;