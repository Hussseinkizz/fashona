import type { NextPage } from 'next';
import { Button } from '@material-tailwind/react';

const Home: NextPage = () => {
  return (
    <section className="w-full p-2">
      <h1 className="text-2xl text-center font-bold capitalize">
        Hello React!
      </h1>
      <Button className="mt-4 mx-auto">Material Button</Button>
    </section>
  );
};

export default Home;
