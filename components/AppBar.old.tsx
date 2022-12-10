import Link from 'next/link';
import { useState } from 'react';
import * as Icons from 'react-icons/io5';

type Props = {};

const AppBar = (props: Props) => {
  const [showNav, setShowNav] = useState(false);
  const [toggleNav, setToggleNav] = useState(false);

  return (
    <header className="bg-blue-gradient text-white shadow-md w-full _fixed-on-mobile">
      <nav className="flex items-center justify-between px-4 py-2 ">
        {/* Nav Right, for menu */}
        <div className="relative">
          <button
            type="button"
            className="inline-flex items-center p-1 text-white text-sm hover:text-blue-500 transition-colors rounded-lg hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-200"
            aria-controls="mobile-menu"
            aria-expanded="false"
            onClick={() => setToggleNav(!toggleNav)}>
            <span className="sr-only">Open main menu</span>
            {showNav ? (
              <Icons.IoClose className="w-6 h-6 icon" />
            ) : (
              <Icons.IoMenu className="w-6 h-6 icon" />
            )}
          </button>
          {/* Menu, For Non Mobile */}
          {/* <DesktopMenu /> */}
        </div>
        {/* Nav Middle, for Brand */}
        <Link href="/" passHref>
          <button className="font-bold text-xl hover:text-blue-100 transition-colors">
            Nexus
          </button>
        </Link>
        {/* Nav Action Right */}
        <div>
          <Icons.IoNotifications className="w-6 h-6 icon" />
        </div>
      </nav>
    </header>
  );
};

export default AppBar;
