import { Button, Input, Textarea } from '@material-tailwind/react';
import React from 'react';
import { AiFillPlusCircle } from 'react-icons/ai';


const AddService = () => {
    return (
        <div>
            <form className="w-full mx-auto items-end gap-4">
                <div>
                    <h2 className="text-3xl font-bold">Add Service</h2>
                </div>
                <div className='grid grid-cols-2 gap-5'>
                    <div className="my-3"><Input variant="outlined" type="text" name="name" label="name" /></div>
                    <div className="my-3"><Input variant="outlined" type="text" name="imgUrl" label="Image url" /></div>
                </div>
                <div className="my-3"><Textarea variant="outlined" type="text" name="imgUrl" label="Image url" /></div>
                <Button className="w-full my-3 flex items-center justify-center" type="submit">Add <AiFillPlusCircle className='text-2xl ml-2' /></Button>
            </form>
        </div>
    );
};

export default AddService;