import { Button, Input, Textarea } from '@material-tailwind/react';
import React from 'react';

const SendMessage = () => {
    return (
        <section className='py-20'>
            <div className='container mx-auto text-center'>
                <h2 className='text-4xl font-bold'>Free Case Consulting</h2>
                <p className='my-5 text-gray-500'>Phasellus at fermentum metus, in dapibus diam.</p>
                <form className="w-full mx-auto items-end gap-4 max-w-[800px]">
                    <div className='grid grid-cols-2 gap-5'>
                        <div className="my-3"><Input variant="outlined" type="text" name="name" label="name" /></div>
                        <div className="my-3"><Input variant="outlined" type="email" name="email" label="email" /></div>
                    </div>
                    <div className="my-3"><Textarea variant="outlined" type="text" name="message" label="message" /></div>
                    <Button className="w-full my-3 flex items-center justify-center" type="submit">Send </Button>
                </form>
            </div>
        </section>
    );
};

export default SendMessage;