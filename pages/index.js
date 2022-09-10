

import Hero from '../components/Hero';
import Info from '../components/Info';

import Company from '../components/Company';
import ContactForm from '../components/ContactForm';
import Partners from '../components/Partners';
export default function Home() {
  return (
    <div>
      <Hero />
      <br />
      <br />
      <Info />
      <Company />
      <Partners />
      <ContactForm />
    </div>
  );
}
