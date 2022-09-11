import Hero from '../components/Hero';
import Services from '../components/Services';

import ContactForm from '../components/ContactForm';
import Partners from '../components/Partners';
import News from '../components/News';
import { Card } from '@nextui-org/react';

export default function Home() {
  return (
    <div>
      <Hero />
      <br />
      <br />
      <Services />
      <Card title={'sdsd'} content={'asfasfsdfsdf'} />
      <News />
      <Partners />
      <ContactForm />
    </div>
  );
}
