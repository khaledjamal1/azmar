import React from 'react';
import Card from '../components/Card';
import News from '../components/News';

const CATERING = () => {
  return (
    <>
      <News />
      <div className="flex h-full w-full place-content-center place-items-center mt-[10vh] flex-col">
        <h1 className="text-center text-6xl flex">CATERING</h1>
        <div className="w-[80vw] h-full grid  gap-10 px-5 mt-[10vh] ">
          <Card
            title={'Inflight Catering'}
            content={
              'Our highly-experienced chefs have served in the world’s leading hotels, restaurants, product manufacturers and other food and hospitality industries, including flight catering.  We recruit the best, international talent and invest in their ongoing development, through training and mentoring, and by providing opportunities to work across our global network.  Our executive chefs inspire the next generation of leaders in our business, whilst ensuring we deliver product across every class that exceeds our customers’ expectations.To deliver for our customers and theirs, we have diverse talent in every market, and move our talent around our network to ensure we have specific skills in locations when required. In Australia, we have world-class Chinese chefs who deliver impeccable cuisine for every major Chinese carrier now servicing Australia. In Romania, we deliver authentic Arabic cuisine with the help of our Lebanese Executive Chef. Whether Halal, Indian, Japanese or any other cuisine, our passion for creative and logistical distinction results in the successful delivery of over 320,000 meals every day.'
            }
            src={
              'https://azmarairstorage.blob.core.windows.net/root/root/images/111132019_SERVAIR-Vehicle.jpg'
            }
          />
          <Card
            title={'Airport Food and Beverage'}
            content={
              'Airports are where our journeys begin and end, and there is no better start or finish than indulging in a quick bite or savoring a delicious meal. We have established partnerships with much-loved international food brands including Burger King, Brioche Doree and illy, and have created many of our own restaurant, kiosk and cafe brands too. Now operating more than 40 F&B outlets, we are a first choice for airports wanting top quality culinary and customer service, with an undoubted capability to deliver this with consistency and scale. In addition to the operation of airport outlets, we also offer event catering services in a number of locations and contract catering to facilities off-airport.'
            }
            src={
              'https://azmarairstorage.blob.core.windows.net/root/root/images/211742022_111132019_011-copenhagen-denmark-airport-food.jpg'
            }
          />
        </div>
      </div>
    </>
  );
};

export default CATERING;
