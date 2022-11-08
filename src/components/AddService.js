import { Button, Input } from '@material-tailwind/react';
import React from 'react';

const AddService = () => {
    return (
        <div>
            <form className="w-96 mx-auto items-end gap-4">
                <div>
                    <h2 className="text-3xl font-bold">Add Service</h2>
                </div>
                <div className="my-3"><Input variant="outlined" type="text" name="name" label="name" /></div>
                <div className="my-3"><Input variant="outlined" type="text" name="imgUrl" label="Image url" /></div>
                <div className="my-3"><Input variant="outlined" type="text" name="imgUrl" label="Image url" /></div>
                <Button className="w-full my-3" type="submit">Add </Button>
            </form>
        </div>
    );
};

export default AddService;