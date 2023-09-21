import Link from 'next/link';
import { Button } from './ui/button';

const Hero = () => {
  return (
    <section className="relative bg-hero-image bg-cover bg-center bg-no-repeat">
      <div className="absolute inset-0 bg-white/50  sm:from-white/95 sm:to-white/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl text-center ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl">
            The sole handling company in Iraq
            <strong className="block font-extrabold text-red-700">
              Azmar Air Handling
            </strong>
          </h1>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <Link href="#">
              <Button className='px-10'>Services</Button>
            </Link>

            <Link href="#">
              <Button variant={'outline'} className='px-10'>NEWS</Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
