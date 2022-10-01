/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import Image from 'next/image';
import React, { useEffect } from 'react';
import hero from '../public/hero.jpg';
import { motion } from 'framer-motion';
import { Button } from '@nextui-org/react';
import bg from '../public/bg.png';
import clouds from '../public/clouds.png';
import clouds2 from '../public/clouds2.png';
import Gradient from './Gradient.js';
import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('./Gradient.js'),
  { ssr: false } // <-- not including this component on server-side
);
const Hero = () => {
  // Create your instance
  useEffect(() => {
    const gradient = new Gradient();

    // Call `initGradient` with the selector to your canvas
    gradient.initGradient('#gradient-canvas');
  }, []);
  return (
    <section>
            <canvas
              id="gradient-canvas"
              style={{ width: '100vw', height: '70vh',backgroundColor: '#06070d' }}
              className='absolute opacity-10 overflow-hidden  skew-y-12 -z-1'
              data-transition-in
            ></canvas>
      <div className=" text-white  flex sm:h-[70vh] w-screen h-screen">
        <div className="container mx-auto flex flex-col-reverse md:flex-row items-center justify-between my-12 md:my-14">
          <div className="flex flex-col w-full lg:w-1/3 justify-center md:items-start p-3">
            <h1 className="text-6xl md:text-9xl  text-prime  md:whitespace-nowrap z-40">
              Azmar Airlines
            </h1>
            <h2 className="text-3xl md:text-5xl leading-relaxed md:leading-snug mb-2 md:whitespace-nowrap">
              The sole handling company in Iraq
            </h2>
            <Button bordered shadow>
              Contact
            </Button>
          </div>
          <div className=" w-[100%] z-40">
            <Image src={bg} alt="" layout="responsive" />
          </div>
        </div>
      </div>

      <div className=" md:w-[70%] w-full absolute z-30 md:top-[10px] top-[3.5%] md:left-[33%]">
        <Image src={clouds2} alt="" layout="responsive" />
      </div>
    </section>
  );
};

export default Hero;
