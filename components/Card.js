/* eslint-disable @next/next/no-img-element */

import { Button } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react';

const Card = ({ src, title, content }) => {
  return ( 
    <div className="flex justify-center ">
      <div className="rounded-lg shadow-lg bg-white overflow-hidden">
        <a href="#!">
          <img src={src} alt="" style={{ objectFit: 'cover', width: '100%' }} />
        </a>
        <div className="p-6 flex flex-col ">
          <h5 className="text-gray-900 text-xl font-medium mb-2">{title}</h5>
          <p className="text-gray-700 text-base mb-4">{content}</p>
          <Button>Read More</Button>
        </div>
      </div>
    </div>
  );
};

export default Card;
