import Head from 'next/head';
import Image from 'next/image';

import hero from '../public/hero.jpg';
import Hero from '../components/Hero';
import Info from '../components/Info';
import News from '../components/News';
import Company from '../components/Company';
import ContactForm from '../components/ContactForm';
export default function Home() {
  return (
    <div >
      <Hero />
      <br />
      <br />
      <Info />
      <Company />
      <ContactForm />
    </div>
  );
}
