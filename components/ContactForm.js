import { Button, Input, Spacer, Textarea } from '@nextui-org/react';
import React from 'react';
import { MdOutgoingMail } from 'react-icons/md';
const ContactForm = () => {
  return (
    <div className="pt-20 pb-20 ">
      <h1 className="text-text font-bold text-2xl text-center">CONTACT US</h1>
      <div className="flex-col place-content-center w-full p-10 ">
        <Input
          labelPlaceholder="Name"
          type={'text'}
          width={10}
          bordered
          animated
          rounded
          fullWidth
        />
        <Spacer y={2} />
        <Input
          labelPlaceholder="Email"
          type={'email'}
          width={10}
          bordered
          animated
          rounded
          fullWidth
        />
        <Spacer y={2} />
        <Textarea
          placeholder="Type your email"
          width={10}
          bordered
          animated
          rounded
          fullWidth
        />
      </div>
      <div className="flex w-full h-full place-content-center ">
        <Button
        size={'xl'}
          rounded
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
