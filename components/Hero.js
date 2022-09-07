import Image from 'next/image';
import React from 'react';
import hero from '../public/hero.jpg';
import { motion } from 'framer-motion';
const Hero = () => {
  return (
    <div className="sm:h-screen h-[60vh] relative w-full  ">
      <Image src={hero} alt="hero" layout="fill" objectFit="cover" />

      <motion.div
        animate={{ x: 0 }}
        initial={{ x: -400 }}
        transition={{ ease: 'easeOut', duration: 2 }}
        className="absolute mx-auto sm:top-[65%] top-[50%] "
      >
        <div className=" bg-white rounded-br-3xl w-[300px] sm:w-[900px] bg-opacity-50 backdrop-blur-sm flex justify-center flex-col items-center">
          <h1 className="text-2xl sm:text-7xl font-bold pl-2 text-cyan-600">
            Azmar Airlines
          </h1>
          <h1 className="text-md sm:text-3xl  font-bold pb-5 pl-7">
            The Sole Handling Company in Iraq
          </h1>
        </div>
      </motion.div>
    </div>
  );
};

export default Hero;
