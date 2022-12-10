import BuyMedicneSearch from '../../components/BuyMedicineSearch';
import { Button } from '@material-tailwind/react';
import { Carousel, Dropdown } from 'flowbite-react';
import React from 'react';

type Props = {};

const buyMedicine = (props: Props) => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-bold">Buy Medicine</h1>
      {/* Buy Medicine Option 1 */}
      <div className="w-full flex items-center justify-between gap-4">
        <div className="w-1/2 mr-4">
          <BuyMedicneSearch placeholder="search through database..." />
        </div>
        <div className="border border-blue-100 bg-gray-100 hover:bg-gray-50 transition rounded-md p-2">
          <Dropdown label="Sort By" inline={true}>
            <Dropdown.Item>Price</Dropdown.Item>
            <Dropdown.Item>Popularity</Dropdown.Item>
            <Dropdown.Item>Ratings</Dropdown.Item>
            <Dropdown.Item>other</Dropdown.Item>
          </Dropdown>
        </div>
      </div>
      <div className="w-full">
        <h2 className="text-base font-semibold text-gray-700 mb-4">
          Most Bought And Popular
        </h2>
        <div className="w-full flex flex-col items-center justify-between gap-4">
          <div className="w-full h-56 sm:h-64 xl:h-80 2xl:h-96">
            <Carousel slideInterval={5000} leftControl=" " rightControl=" ">
              <div className="flex h-full items-center justify-center bg-gray-100 dark:bg-gray-700 dark:text-white">
                Item 1
              </div>
              <div className="flex h-full items-center justify-center bg-gray-100 dark:bg-gray-700 dark:text-white">
                Item 2
              </div>
              <div className="flex h-full items-center justify-center bg-gray-100 dark:bg-gray-700 dark:text-white">
                Item 3
              </div>
            </Carousel>
          </div>
          <Button size="sm">See More</Button>
        </div>
      </div>
      <div className="w-full space-y-4">
        <h2 className="text-base font-semibold text-gray-700 mb-4 capitalize">
          upload a prescription image
        </h2>
        <div className="w-full before:grid place-items-center bg-gray-100 rounded-md border border-gray-200 border-dashed p-4">
          <button className="flex items-center justify-center bg-gray-200 rounded-md border border-blue-100 border-dashed py-2 px-4">
            Upload Image
          </button>
        </div>
      </div>
    </section>
  );
};

export default buyMedicine;
