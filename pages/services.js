import React from 'react';
import Card from '../components/Card';
import Service from '../components/service';

const services = () => {
  const ramp = [
    'Baggage Handling',
    'Marshaling',
    'Parking',
    'Cooling/Heating',
    'Ramp to Flight-deck Communications',
    'Loading/Unloading',
    'Air Start',
    'Safety',
    'Moving of Aircraft',
    'Toilet Services',
    'Water Services',
    'Cabin Equipment',
    'Cabin Material Storage',
    'Catering Ramp Services',
    'Ice/Snow Removal',
  ];
  const passenger = [
    'Check in services',
    'Airport lounges',
    'Gate activities',
    'Airport ticketing',
    'CIP lounges, meet and greet and VIP handling services',
    'Arrival services',
    'Lost and found facilities',
    'Administration and supervision services',
    'Station management services including transfers and disruptions',
    'Assistance for passengers with reduced mobility',
    'Airside bussing for passengers and crew',
  ];
  const lc = [
    'Load control',
    'Communications',
    'Aircraft interior and exterior cleaning',
  ];
  const pj = [
    'Crew transport service',
    'Crew hotel accommodation',
    'An escort through immigration and security',
    'A full flight brief to include weather and NOTAMs',
    'Runway slot negotiation',
    'Access to VIP lounge',
    '24 hour aircraft security',
    'De-icing',
    'Fuelling services',
    'VIP catering',
    'Chauffeur services',
  ];
  return (
    <div className="flex h-full w-full place-content-center place-items-center mt-[10vh] flex-col">
      <h1 className="text-center text-6xl flex">SERVICES</h1>
      <Service
        title={'Ramp Services'}
        content={
          'In ramp handling, every second counts and we are 100% dedicated to ensuring that our customers’ tight schedules are met. Through our modern ramp services, we deliver a wide range of aircraft handling functions, including aircraft loading and unloading, technical support functions, provision of pushback vehicles, air start units, air conditioning units, ground power units, potable water units and toilet servicing units.'
        }
        list={ramp}
      />
      <Service
        title={'Passenger Services'}
        content={
          'Our customer services staff are the key interface between our airline partners and their passengers and play a leading role in offering the care that is critical to successful ground handling operations. Our global team of professionally trained employees ensure the smooth handing of passengers from check-in to boarding and from disembarkation to baggage collection.For passengers requiring extra support, our employees across the globe are trained to offer assistance to passengers with special needs, including unaccompanied minors and with reduced mobility.'
        }
        list={passenger}
      />
      <Service
        title={'Load Control and Flight Operations'}
        content={
          'This includes a careful analysis of aeronautical activities and weather conditions. Meanwhile, our load planners ensure the safe departure of aircraft with maximum payload. Our control center maintains flight watch, monitors flight movements, provides airlines with 24-hour coverage and assists flights within VHF range.'
        }
        list={lc}
      />
      <Service
        title={'Airport Lounges'}
        content={
          'Our airport lounges are available 24 hours a day, seven days a week. Every lounge is fully equipped to meet the needs of customers from all airlines, no matter their class of travel. Comfortable seating, a full international buffet and business services – including PCs and fast Wi-Fi connections – are always available. In select lounges, priority buggy cars are available to shuttle passengers directly to their boarding gates.'
        }
        list={null}
      />
      <Service
        title={'Private Aviation'}
        content={
          'We are dedicated to the highest standards of aviation, and we continue to set new standards, working every day to refine the experience of travel and aviation worldwide. Our long-standing expertise and experience in handling heads of Industries to heads of states and royalty is unparalleled. We seek the highest quality of customer service for you, at every stage of the dnata experience, regardless of your goal, destination, or needs. We understand that discretion is one of the measures of excellence.'
        }
        list={pj}
      />
    </div>
  );
};

export default services;
