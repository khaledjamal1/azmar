import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 bg-white   shadow md:flex md:items-center md:justify-between md:p-6  dark:bg-black backdrop-blur-3xl mt-[5vh]">
      <span className="text-sm text-back sm:text-center dark:text-back">
        © 2022{' '}
        <a href="" className="hover:underline text-back">
          Azmar Air
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-back dark:text-back sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6   text-back">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6   text-back">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6   text-back">
            Cargo
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6  text-back">
            Azmar Holiday
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 text-back">
            Training
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline text-back">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
