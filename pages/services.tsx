import ServiceCard from '../components/ServiceCard';
import card from '@material-tailwind/react/theme/components/card';
import React from 'react';
import * as Icons from 'react-icons/io5';

const servicesCards = [
  {
    name: 'buy medicine',
    icon: (
      <Icons.IoMedkit className="w-10 h-10 text-blue-500 group-hover:text-blue-400" />
    ),
    route: 'services/buy-medicine',
  },
  {
    name: 'book appointment',
    icon: (
      <Icons.IoCalendar className="w-10 h-10 text-blue-500 group-hover:text-blue-400" />
    ),
    route: 'services/book-appointment',
  },
  {
    name: 'lab test',
    icon: (
      <Icons.IoBeaker className="w-10 h-10 text-blue-500 group-hover:text-blue-400" />
    ),
    route: 'services/lab-test',
  },
  {
    name: 'contact professional',
    icon: (
      <Icons.IoCall className="w-10 h-10 text-blue-500 group-hover:text-blue-400" />
    ),
    route: 'services/contact-professional',
  },
];

const services = () => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-bold">What would you like to do?</h1>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 place-items-center gap-4">
        {servicesCards.map((card) => (
          <ServiceCard
            key={card.name}
            name={card.name}
            icon={card.icon}
            route={card.route}
          />
        ))}
      </div>
    </section>
  );
};

export default services;
