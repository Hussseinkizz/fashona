import Link from 'next/link';
import React from 'react';

// Todo: Make a re-usable link custom hook!

type ServiceCard = {
  name: string;
  icon: JSX.Element;
  route: string;
};

const ServiceCard = (props: ServiceCard) => {
  return (
    <Link href={props.route}>
      <div className="w-full h-full flex flex-col flex-auto items-center justify-center gap-4 border border-gray-300 hover:border-blue-100 shadow-sm transition-all hover:shadow-md bg-gray-50 rounded-lg p-2 py-4 cursor-pointer group">
        <span className="bg-blue-100 rounded-full p-4">{props.icon}</span>
        <span className="capitalize text-center text-gray-700 group-hover:text-blue-400">
          {props.name}
        </span>
      </div>
    </Link>
  );
};

export default ServiceCard;
