import Link from 'next/link';
import React from 'react';
import * as Icons from 'react-icons/hi';
import { SideBarLinks } from '../../data/UI_data';
import { useStore } from '../../hooks/useStore';

type Props = {
  isOpen: boolean;
};

const SideBar = (props: Props) => {
  const {
    store: { showSideBar },
    setStore,
  } = useStore();

  const closeSideBar = () => {
    setStore({ type: 'CLOSE_SIDEBAR' });
  };

  return (
    <aside
      className={`bg-white shadow-md fixed h-screen py-2 px-4 transition-transform ease-linear cursor-pointer ${
        props.isOpen ? 'w-48 translate-x-0' : 'w-0 -translate-x-full'
      }`}>
      {props.isOpen && (
        <div className="w-full">
          {/* Branding Area */}
          <div className="flex items-center justify-between">
            <Link href="/" passHref>
              <div className="flex gap-2 items-center justify-start">
                <Icons.HiFire className="w-5 h-5" />
                <h1 className="font-bold text-lg">Fashona</h1>
              </div>
            </Link>
            <Icons.HiChevronDoubleLeft
              className="w-6 h-6 text-gray-500 bg-gray-50 p-1 rounded-md border transition hover:shadow-sm"
              onClick={closeSideBar}
            />
          </div>
          {/* The Sidebar Items */}
          <div className="flex flex-col gap-4 items-start justify-between mt-6 mb-8">
            {SideBarLinks.map((link) => (
              <div className="w-full flex flex-col items-start justify-center gap-2">
                <h1 className="uppercase font-semibold text-gray-400">
                  {link.title}
                </h1>
                {link.links.map((item) => (
                  <Link href={item.route} passHref>
                    <div className="flex items-center justify-start gap-2 group">
                      {item.icon}
                      <span className="group-hover:text-blue-400 transition ease-linear">
                        {item.name}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
          </div>
          {/* The SideBar Action */}
          <button className="flex gap-2 items-center justify-center bg-blue-500 text-blue-100 hover:bg-blue-600 hover:shadow-lg hover:text-blue-50 active:scale-95 transition ease-linear my-3 py-2 px-4 w-full rounded-md shadow-sm">
            <Icons.HiExternalLink className="w-5 h-5" />
            <h1 className="font-bold"> Your Shop</h1>
          </button>
        </div>
      )}
    </aside>
  );
};

export default SideBar;
