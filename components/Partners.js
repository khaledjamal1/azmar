import Image from 'next/image';
import React from 'react';
import qr from '../public/airline/qr.svg';
import condor from '../public/airline/condor.svg';
import dubai from '../public/airline/dubai.svg';
import iraqi from '../public/airline/iraqi.svg';
import rj from '../public/airline/rj.svg';
import turkish from '../public/airline/turkish.svg';
import mahan from '../public/airline/mahan.svg';
import { useMediaQuery } from './useMediaQuery.js';

const Partners = () => {
  const isMd = useMediaQuery(960);
  return (
    <div className="py-20 ">
      <div className="pb-20">
        <h1 className="text-prime font-bold text-2xl text-center">
          OUR PARTNERS
        </h1>
        <h1 className=" font-bold text-4xl text-center">
          Our Partners Include
        </h1>
      </div>

      <div className="flex flex-wrap place-content-around w-full h-full sm:flex-row flex-col ">
        <Image
          src={iraqi}
          alt="..."
          height={isMd ? 140 : 220}
          width={isMd ? 180 : 220}
          objectFit="fill"
        />

        <Image
          src={condor}
          alt="..."
          height={isMd ? 140 : 220}
          width={isMd ? 180 : 220}
          objectFit="fill"
          style={{ fill: 'yellow' }}
        />

        <Image
          src={turkish}
          alt="..."
          height={isMd ? 140 : 220}
          width={isMd ? 180 : 220}
          objectFit="fill"
        />

        <Image
          src={dubai}
          alt="..."
          height={isMd ? 140 : 220}
          width={isMd ? 180 : 220}
          objectFit="fill"
        />

        <Image
          src={mahan}
          alt="..."
          height={isMd ? 140 : 220}
          width={isMd ? 180 : 220}
          objectFit="fill"
        />

        <Image
          src={rj}
          alt="..."
          height={isMd ? 180 : 220}
          width={isMd ? 220 : 220}
        />
        <Image
          src={qr}
          alt="..."
          height={isMd ? 140 : 220}
          width={isMd ? 180 : 220}
          objectFit="fill"
        />
      </div>
    </div>
  );
};

export default Partners;
