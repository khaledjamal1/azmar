import { Button, Input, Spacer, Textarea } from '@nextui-org/react';
import React from 'react';
import { MdOutgoingMail } from 'react-icons/md';
const ContactForm = () => {
  return (
    <div className="pt-20 pb-20 ">
      <h1 className="text-text font-bold text-2xl text-center">CONTACT US</h1>
      <div className="flex-col place-content-center place-items-center w-[90vw] p-10 mt-10  bg-back rounded-2xl">
        <Input
          label="Name"
          type={'text'}
         
          bordered
          animated
          
          fullWidth
          color='primary'
        />
        <Spacer y={2} />
        <Input
          label="Email"
          type={'email'}
         
          bordered
          animated
          
          fullWidth
          color='primary'
        />
        <Spacer y={2} />
        <Textarea
         label="Type your email"
         
          bordered
          animated
          
          fullWidth
          color='primary'
          
        />
      </div>
      <div className="flex w-full h-full place-content-center mt-10">
        <Button
        size={'xl'}
          
          shadow
          bordered
          icon={<MdOutgoingMail fill="currentColor" filled size={35}/>}
        >
          Send Email
        </Button>
      </div>
    </div>
  );
};

export default ContactForm;
