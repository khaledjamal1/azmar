/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React from 'react';
import hero from '../public/hero.jpg';
import { motion } from 'framer-motion';
import { Button } from '@nextui-org/react';
import bg from '../public/bg.png';
const Hero = () => {
  return (
    <section>
      <div className=" text-white  flex h-screen ">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center my-12 md:my-24">
          <div className="flex flex-col w-full lg:w-1/3 justify-center items-start p-8">
            <h1 className="text-3xl md:text-5xl p-2 text-text tracking-loose">
              Azmar Airlines
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2">
              The sole handling company in Iraq
            </h2>

            <Button bordered shadow>
              Contact
            </Button>
          </div>
          <div className="h-full w-[80%]">
            <Image src={bg} alt="" layout="responsive" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
