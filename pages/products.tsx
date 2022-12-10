import BuyMedicneSearch from '../components/BuyMedicineSearch';
import React from 'react';

type Props = {};

const products = (props: Props) => {
  return (
    <section className="w-full flex flex-col items-center justify-center gap-4">
      <h1 className="text-xl font-bold">What would you like to buy?</h1>
      <div className="w-75">
        <BuyMedicneSearch placeholder="search products..." />
      </div>
      <p className="text-center">some product cards...</p>
      <div className="w-full grid grid-cols-2 md:grid-cols-4 place-items-center gap-4">.</div>
    </section>
  );
};

export default products;
