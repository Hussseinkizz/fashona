import React from 'react';
import * as Icons from 'react-icons/hi';
import SearchBox from '../SearchBox';
import myAvatar from '../../public/images/avatar.jpg';
import Image from 'next/image';
import { useStore } from '../../hooks/useStore';

type Props = {};

const AppBar = (props: Props) => {
  const {
    store: { showSideBar },
    setStore,
  } = useStore();

  const toggleSideBar = () => {
    setStore({ type: 'TOGGLE_SIDEBAR' });
  };

  return (
    <header className="w-full fixed top-0 md:static shadow-lg bg-white">
      <nav className="py-2 px-4">
        <div className="flex gap-4 items-center justify-between">
          <Icons.HiMenu
            className="w-6 h-6 text-gray-600 transition ease-linear hover:text-gray-500"
            onClick={toggleSideBar}
          />
          <span className="w-3/4 mx-8">
            <SearchBox placeholder="search here..." />
          </span>
          <div className="flex gap-2 items-center justify-center">
            <Icons.HiQuestionMarkCircle className="w-6 h-6 text-gray-600 transition ease-linear hover:text-gray-500" />
            <Icons.HiSun className="w-6 h-6 text-gray-600 transition ease-linear hover:text-gray-500" />
            <Icons.HiBell className="w-6 h-6 text-gray-600 transition ease-linear hover:text-gray-500" />
            <span className="w-12 h-12 rounded-full border border-blue-200">
              <Image
                src={myAvatar}
                layout="responsive"
                width={50}
                height={50}
                className="rounded-full hover:opacity-80 transition-opacity ease-linear"
              />
            </span>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
