'use client';

import logo from '@/assets/images/logo.png';
import Image from 'next/image';
import { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { Button } from './ui/button';
import Link from 'next/link';

const links = [
  'Home',
  'Airport Services',
  'Catering',
  'Holidays',
  'Training',
  'NEWS',
];
const Nav = () => {
  const [nav, setNav] = useState(false);
  const handleNav = () => {
    setNav(!nav);
  };
  return (
    <div className="flex justify-between items-center max-w-full  shadow-md px-5 py-3 mx-auto sticky top-0 z-50 bg-slate-100">
      <a href="/">
        <Image src={logo} alt="logo" height={30} width={90} />
      </a>

      <div className="flex justify-center items-center gap-3">
        <button
          onClick={handleNav}
          type="button"
          className="lg:hidden cursor-pointer"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
        <div className="md:hidden"></div>
      </div>
      <div
        className={
          nav
            ? 'fixed bg-red-50   h-full left-0 top-0  w-[60%] z-[100] ease-in-out duration-500 pt-20'
            : 'fixed  h-full left-[-100%] top-0  w-[60%] z-10 ease-in-out duration-500 '
        }
      >
        <ul className="flex flex-col justify-around items-start h-1/2 text-xl px-2 font-bold uppercase w-full  ">
          {links.map((link) => (
            <a
              key={link}
              href={link.split(' ').join('').toLocaleLowerCase()}
              className="p-4 border-b border-back w-full"
            >
              {link}
            </a>
          ))}
          <Button>Contact</Button>
        </ul>
      </div>
      <div className="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul className="flex justify-center items-center">
          {links.map((link) => (
            <Link
              key={link}
              href={link.split(' ').join('').toLocaleLowerCase()}
              className="px-5 font-semibold"
            >
              {link}
            </Link>
          ))}
        <Button>Contact</Button>
        </ul>
      </div>
    </div>
  );
};

export default Nav;
