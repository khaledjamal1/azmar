import { Button, Input, Spacer, Textarea } from '@nextui-org/react';
import React from 'react';

const ContactForm = () => {
  return (
    <div className='pt-20 pb-20  bg-slate-200'>
      <h1 className="text-cyan-600 font-bold text-2xl text-center">
        CONTACT US
      </h1>
      <div className="flex-col place-content-center w-full p-10">
        <Input
          labelPlaceholder="Name"
          type={'text'}
          width={200}
          bordered
          animated
          rounded
          fullWidth
        />
        <Spacer y={2} />
        <Input
          labelPlaceholder="Email"
          type={'email'}
          width={200}
          bordered
          animated
          rounded
          fullWidth
        />
        <Spacer y={2} />
        <Textarea
          placeholder="Type your email"
          width={200}
          bordered
          animated
          rounded
          fullWidth
        />
      </div>
      <div className='flex w-full h-full place-content-center '>
        <Button>send Email</Button>
      </div>
    </div>
  );
};

export default ContactForm;
