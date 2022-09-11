import Hero from '../components/Hero';
import Services from '../components/Services';


import ContactForm from '../components/ContactForm';
import Partners from '../components/Partners';

export default function Home() {
  return (
    <div>
      <Hero />
      <br />
      <br />
      <Services />
     
      <Partners />
      <ContactForm />
    </div>
  );
}
