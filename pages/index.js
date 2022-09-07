import Head from 'next/head';
import Image from 'next/image';
import styles from '../styles/Home.module.css';
import hero from '../public/hero.jpg';
import Hero from '../components/Hero';
import Info from '../components/Info';
import News from '../components/News';
export default function Home() {
  return (
    <div >
      <Hero />
      <br />
      <br />
      <Info />
    
    </div>
  );
}
