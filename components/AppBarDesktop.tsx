import SearchBox from './SearchBox';
import Link from 'next/link';
import { useState } from 'react';
import * as HiIcons from 'react-icons/hi';
import * as Icons from 'react-icons/io5';

type Props = {};

const AppBarDesktop = (props: Props) => {
  const [showNav, setShowNav] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <header className="bg-white border-b border-gray-300 shadow-md w-full fixed top-0 z-50 hidden md:flex cursor-pointer">
      <div id="#top" />
      <nav className="w-full flex items-center justify-between px-4 py-2">
        {/* Nav Left, for brand */}
        <Link href="/" passHref>
          <button className="_flex-is-row justify-start gap-2 font-bold text-blue-600 text-xl hover:text-blue-500 transition-colors">
            <Icons.IoApps className="w-6 h-6" />
            Nexus
          </button>
        </Link>
        {/* Nav Right for inline menu */}
        <div className="_flex-is-row justify-around gap-4 capitalize">
          <Link href="/profile" passHref>
            <span className="rounded-full ring-1 ring-blue-100 bg-gray-100 p-2">
              <HiIcons.HiUser className="w-6 h-6 text-gray-500 hover:text-gray-400" />
            </span>
          </Link>
          <span className="rounded-full ring-1 ring-blue-100 bg-gray-100 p-2">
            <HiIcons.HiShoppingCart className="w-6 h-6 text-gray-500 hover:text-gray-400" />
          </span>
          <span className="rounded-full ring-1 ring-blue-100 bg-gray-100 p-2">
            <Icons.IoNotifications className="w-6 h-6 text-gray-500 hover:text-gray-400" />
          </span>
        </div>
      </nav>
    </header>
  );
};

export default AppBarDesktop;
