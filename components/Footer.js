import React from 'react';

const Footer = () => {
  return (
    <footer className="p-4 bg-back   shadow md:flex md:items-center md:justify-between md:p-6   backdrop-blur-3xl mt-[5vh]">
      <span className="text-sm text-text sm:text-center dark:text-text">
        © 2022{' '}
        <a href="" className="hover:underline text-text">
          Azmar Air
        </a>
        . All Rights Reserved.
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm text-text dark:text-text sm:mt-0">
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6   text-text">
            About
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6   text-text">
            Services
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6   text-text">
            Cargo
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6  text-text">
            Azmar Holiday
          </a>
        </li>
        <li>
          <a href="#" className="mr-4 hover:underline md:mr-6 text-text">
            Training
          </a>
        </li>
        <li>
          <a href="#" className="hover:underline text-text">
            Contact
          </a>
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
