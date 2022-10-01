import React from 'react';
import ContactForm from '../components/ContactForm';
import News from '../components/News';
import ServiceCard from '../components/serviceCard';

const holiday = () => {
  return (
    <>
      <News />
      <div className="flex h-full w-full place-content-center place-items-center mt-[10vh] flex-col">
        <h1 className="text-center text-6xl flex">Azmar Holiday</h1>
        <div>
          <ContactForm />
        </div>
      </div>
    </>
  );
};

export default holiday;
