import { Text } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import React from 'react';
import com from '../public/com.jpg';
const Company = () => {
  return (
    <div className="flex p-10  flex-col place-content-center bg-slate-200 w-full h-full">
      <div className="mb-20">
        <h1 className="text-cyan-600 font-bold text-2xl text-center">
          COMPANY HISTORY
        </h1>
      </div>
      <div className="sm:flex sm:justify-around  mb-20 ">
        <motion.div
          className="sm:w-1/2  pt-10 pb-5 rounded-lg overflow-hidden drop-shadow-2xl shadow-black "
          whileInView={{ x: 0, rotate: -7 }}
          viewport={{ once: false }}
          transition={{ ease: 'easeInOut', duration: 1.5, bounce: 1 }}
        >
          <Image src={com} alt="company" layout="responsive" objectFit='cover'  />
        </motion.div>
        <div className="sm:w-[40%] w-full sm:mb-20 pt-10">
          <Text
            size={'$3xl'}
            css={{
              '@xsMax': {
                fontSize: '$lg',
                textTransform: 'full-width'
              },
            }}
            blockquote
            
          >
            Azmar Air Co. was established in 2005 as an operating charter
            flights company, the first charter flight took off from Sulaimaniyah
            International Airport in 18th November, 2005 to Amsterdam. In
            addition to this flight our company operated its charter flights to
            several Destinations in the Middle East and Europe (Munich,
            Dusseldorf, Stockholm, Istanbul, Dubai and Tehran). We developed our
            activities by signing joint venture agreements with Atlas Gl
          </Text>
        </div>
      </div>
    </div>
  );
};

export default Company;
