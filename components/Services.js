/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable @next/next/no-img-element */
import React from 'react';

import { GiCargoCrate, GiFoodTruck } from 'react-icons/gi';
import { AiFillCustomerService } from 'react-icons/ai';
import { Button, Card, Col, Grid, Row, Text } from '@nextui-org/react';
import { motion, useScroll } from 'framer-motion';
import airport from '../public/airport.png';
import cargo from '../public/cargo.png';
import training from '../public/training.png';
import catering from '../public/catering.png';
import Image from 'next/image';
const Info = () => {
  return (
    <div className="w-screen h-full  mb-20">
      <div className="flex flex-col gap-2 justify-center items-center mb-20">
        <h1 className=" font-bold text-xl text-prime">WHAT WE DO</h1>
        <h1 className=" font-bold text-4xl">Our Services Include</h1>
      </div>
      <div>
        <div className=" ">
          <div className="container mx-auto py-20 lg:px-12 sm:px-5 h-full ">
            <div className="grid lg:grid-cols-4 gap-6 px-3 sm:px-0">
              <div className ="p-3 bg-back shadow-2xl rounded-3xl px-5 py-6 flex flex-col gap-2 ">
                <Image
                  src={airport}
                  width={70}
                  height={70}
                  layout="fixed"
                  alt=""
                />
                <div className='h-[300px]'>
                  <span className="font-bold text-xl text-text">Ground Handling</span>

                  <p className="mt-2 text-justify text-text font-semibold">
                    Mauris nec nisi dapibus, efficitur arcu eu, vehicula ligula.
                    Maecenas dolor elit, pretium et ultrices in, vulputate et
                    augue. Pellentesque efficitur lacus massa, eu tristique
                    lectus tempor in. Suspendisse suscipit venenatis arcu.
                    Aliquam a eleifend tellus. Aliquam lacinia auctor porttitor
                  </p>
                </div>

                <Button color={'primary'}>Learn More</Button>
              </div>

              <div className="p-3 bg-back shadow-2xl rounded-3xl px-5 py-6 flex flex-col  gap-2  ">
                <Image
                  src={training}
                  width={70}
                  height={70}
                  layout="fixed"
                  className="mb-3"
                />
                <div className='h-[300px]'>
                  <span className="font-bold text-xl text-text">Training</span>

                  <p className="mt-2 text-justify text-text font-semibold">
                    We offer premium cargo handling services for passenger belly
                    cargo and freighter cargo. With best-in-class facilities and
                    state-of-the- art cargo handling support technologies, our
                    handling services are diligent and efficient. We move our
                    customers’ cargo smoothly from one destination to another,
                    tracking its progress the whole way.
                  </p>
                </div>

                <Button color={'primary'}>Learn More</Button>
              </div>
              <div className="p-3 bg-back shadow-2xl rounded-3xl px-5 py-6 flex flex-col  gap-2  ">
                <Image
                  src={cargo}
                  width={70}
                  height={70}
                  layout="fixed"
                  className="mb-3"
                />
                <div className='h-[300px]'>
                  <span className="font-bold text-xl text-text">Cargo Handling</span>

                  <p className="mt-2 text-justify text-text font-semibold">
                    We offer premium cargo handling services for passenger belly
                    cargo and freighter cargo. With best-in-class facilities and
                    state-of-the- art cargo handling support technologies, our
                    handling services are diligent and efficient. We move our
                    customers’ cargo smoothly from one destination to another,
                    tracking its progress the whole way.
                  </p>
                </div>

                <Button color={'primary'}>Learn More</Button>
              </div>
              <div className="p-3 bg-back shadow-2xl rounded-3xl px-5 py-6 flex flex-col  gap-2  ">
                <Image
                  src={catering}
                  width={70}
                  height={70}
                  layout="fixed"
                  className="mb-3"
                />
                <div className='h-[300px]'>
                  <span className="font-bold text-xl text-text">Catering</span>

                  <p className="mt-2 text-justify text-text font-semibold">
                    We offer premium cargo handling services for passenger belly
                    cargo and freighter cargo. With best-in-class facilities and
                    state-of-the- art cargo handling support technologies, our
                    handling services are diligent and efficient. We move our
                    customers’ cargo smoothly from one destination to another,
                    tracking its progress the whole way.
                  </p>
                </div>

                <Button color={'primary'}>Learn More</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Info;
