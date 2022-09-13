import { Button, Card, Col, Text } from '@nextui-org/react';
import React from 'react';
import dummy from './dummy';
import '@splidejs/react-splide/css/skyblue';
import { Splide, SplideSlide } from '@splidejs/react-splide';
import { useMediaQuery } from './useMediaQuery';
const News = () => {
  const md = useMediaQuery(900);
  const skew = { clipPath: 'polygon(21% 0, 100% 0%, 100% 100%, 0% 100%)' };
  return (
    <Splide
      slidesPerView={1}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    
    >
      <SplideSlide>
        <div className="bg-prime lg:flex-row flex-col-reverse flex w-full h-full ">
          <div className="flex sm:w-[50vw] w-screen place-content-center flex-col pl-20 py-10">
            <h1 className="sm:text-5xl text-lg text-back">{dummy.title}</h1>
            <p className=" text-back pr-5">{dummy.content}</p>
            <div className="flex place-content-start py-10  pt-10">
              <Button size={'md'}>Read More</Button>
            </div>
          </div>
          <div
            style={md ? null : skew}
            className="flex sm:w-[50vw] h-[300px] overflow-hidden sm:h-full "
          >
            <img src={dummy.src} alt="" style={{ objectFit: 'cover' }} />
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="bg-prime lg:flex-row flex-col-reverse flex w-full h-full">
          <div className="flex sm:w-[50vw] w-screen place-content-center flex-col pl-20 py-10">
            <h1 className="sm:text-5xl text-lg text-back">{dummy.title}</h1>
            <p className=" text-back pr-5">{dummy.content}</p>
            <div className="flex place-content-start py-10  pt-10">
              <Button size={'md'}>Read More</Button>
            </div>
          </div>
          <div
            style={md ? null : skew}
            className="flex sm:w-[50vw] h-[300px] overflow-hidden sm:h-full "
          >
            <img
              src="https://images.pexels.com/photos/730778/pexels-photo-730778.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="bg-prime lg:flex-row flex-col-reverse flex w-full h-full">
          <div className="flex sm:w-[50vw] w-screen place-content-center flex-col pl-20 py-10">
            <h1 className="sm:text-5xl text-lg text-back">{dummy.title}</h1>
            <p className=" text-back pr-5">{dummy.content}</p>
            <div className="flex place-content-start py-10  pt-10">
              <Button size={'md'}>Read More</Button>
            </div>
          </div>
          <div
            style={md ? null : skew}
            className="flex sm:w-[50vw] h-[300px] overflow-hidden sm:h-full "
          >
            <img
              src="https://images.pexels.com/photos/163771/airport-airplanes-gates-flight-line-163771.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="bg-prime lg:flex-row flex-col-reverse flex w-full h-full">
          <div className="flex sm:w-[50vw] w-screen place-content-center flex-col pl-20 py-10">
            <h1 className="sm:text-5xl text-lg text-back">{dummy.title}</h1>
            <p className=" text-back pr-5">{dummy.content}</p>
            <div className="flex place-content-start py-10  pt-10">
              <Button size={'md'}>Read More</Button>
            </div>
          </div>
          <div
            style={md ? null : skew}
            className="flex sm:w-[50vw] h-[300px] overflow-hidden sm:h-full "
          >
            <img
              src="https://images.pexels.com/photos/1381415/pexels-photo-1381415.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </SplideSlide>
      <SplideSlide>
        <div className="bg-prime lg:flex-row flex-col-reverse flex w-full h-full">
          <div className="flex sm:w-[50vw] w-screen place-content-center flex-col pl-20 py-10">
            <h1 className="sm:text-5xl text-lg text-back">{dummy.title}</h1>
            <p className=" text-back pr-5">{dummy.content}</p>
            <div className="flex place-content-start py-10  pt-10">
              <Button size={'md'}>Read More</Button>
            </div>
          </div>
          <div
            style={md ? null : skew}
            className="flex sm:w-[50vw] h-[300px] overflow-hidden sm:h-full "
          >
            <img
              src="https://images.pexels.com/photos/113585/pexels-photo-113585.jpeg?auto=compress&cs=tinysrgb&w=1600"
              alt=""
              style={{ objectFit: 'cover' }}
            />
          </div>
        </div>
      </SplideSlide>
    </Splide>
  );
};

export default News;
