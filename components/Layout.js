import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';
import clouds from '../public/clouds.png';
import Image from 'next/image';
const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
     

      {children}
     
      <Footer />
    </>
  );
};

export default Layout;
