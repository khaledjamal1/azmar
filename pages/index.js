import Hero from '../components/Hero';
import Services from '../components/Services';

import ContactForm from '../components/ContactForm';
import Partners from '../components/Partners';
import News from '../components/News';
import { Card } from '@nextui-org/react';

export default function Home() {
  return (
    <>
      <Hero />

      <br />
      <br />
      <Services />

      <News />
      <Partners />
      <div className="h-full w-full flex place-content-center place-items-center">
        <ContactForm />
      </div>
    </>
  );
}
