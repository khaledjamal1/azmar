import { Button, Input, Spacer, Textarea } from '@nextui-org/react';
import React from 'react';

const ContactForm = () => {
  return (
    <div className='justify-center items-center flex-col w-full'>
      <h1 className="text-cyan-600 font-bold text-2xl text-center">
        CONTACT US
      </h1>
      <div className="flex-col justify-center items-center w-full p-10">
        <Input
          labelPlaceholder="Name"
          type={'text'}
          width={100}
          bordered
          animated
          rounded
         
        />
        <Spacer y={2} />
        <Input
          labelPlaceholder="Email"
          type={'email'}
          width={100}
          bordered
          animated
          rounded
         
        />
        <Spacer y={2} />
        <Textarea
          placeholder="Type your email"
          width={100}
          bordered
          animated
          rounded
         
        />
      </div>
        <Button>send</Button>
    </div>
  );
};

export default ContactForm;
