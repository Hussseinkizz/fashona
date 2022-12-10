import { useStore } from '../hooks/useStore';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as Icons from 'react-icons/io5';

const BottomNavBar = () => {
  const [selected, setSelected] = useState('home');
  const { setState } = useStore();
  const router = useRouter();

  const updateTitleState = (value: string) => {
    setState({
      type: 'SET_TITLE',
      payload: value,
    });
  };

  const handleSelection = (target: string) => {
    if (target === selected) {
      return;
    }
    setSelected(target);
    updateTitleState(target);
    // handle tabs navigation
    if (target === 'home') {
      router.push('/');
    } else {
      router.push(`/${target}`);
    }
  };

  return (
    <div className="flex flex-1 items-center justify-between px-4 py-2 cursor-pointer bg-white shadow-sm border-t border-gray-200 w-full _fixed-on-mobile bottom-0 md:hidden">
      {/* Feed */}
      <button
        className={`flex w-full flex-auto flex-col items-center justify-center p-2 transition-all ease-linear hover:text-blue-600 rounded-lg ${
          selected === 'home' && 'text-blue-600'
        }`}
        onClick={() => handleSelection('home')}>
        {selected === 'home' ? (
          <Icons.IoNewspaper className="w-6 h-6" />
        ) : (
          <Icons.IoNewspaperOutline className="w-6 h-6" />
        )}
      </button>
      {/* Services */}
      <button
        className={`flex w-full flex-auto flex-col items-center justify-center p-2 transition-all ease-linear hover:text-blue-600 rounded-lg ${
          selected === 'services' && 'text-blue-600'
        }`}
        onClick={() => handleSelection('services')}>
        {selected === 'services' ? (
          <Icons.IoCalendar className="w-6 h-6" />
        ) : (
          <Icons.IoCalendarOutline className="w-6 h-6" />
        )}
      </button>
      {/* Products */}
      <button
        className={`group flex w-full flex-auto flex-col items-center justify-center p-2 transition-all ease-linear hover:text-blue-600 rounded-lg ${
          selected === 'products' && 'text-blue-600'
        }`}
        onClick={() => handleSelection('products')}>
        {selected === 'products' ? (
          <Icons.IoBagHandle className="transition w-12 h-12 border-2 border-blue-600 rounded-full  py-2 px-2 group-hover:border-blue-600" />
        ) : (
          <Icons.IoBagHandleOutline className="group-hover:border-blue-600 transition rounded-full w-12 h-12 border-2 border-gray-600 py-2 px-2" />
        )}
      </button>
      {/* Messages */}
      <button
        className={`flex w-full flex-auto flex-col items-center justify-center p-2 transition-all ease-linear hover:text-blue-600 rounded-lg ${
          selected === 'chat' && 'text-blue-600'
        }`}
        onClick={() => handleSelection('chat')}>
        {selected === 'chat' ? (
          <Icons.IoChatboxEllipses className="w-6 h-6" />
        ) : (
          <Icons.IoChatboxEllipsesOutline className="w-6 h-6" />
        )}
      </button>
      {/* Payments */}
      <button
        className={`flex w-full flex-auto flex-col items-center justify-center p-2 transition-all ease-linear hover:text-blue-600 rounded-lg ${
          selected === 'wallet' && 'text-blue-600'
        }`}
        onClick={() => handleSelection('wallet')}>
        {selected === 'wallet' ? (
          <Icons.IoWallet className="w-6 h-6" />
        ) : (
          <Icons.IoWalletOutline className="w-6 h-6" />
        )}
      </button>
    </div>
  );
};

export default BottomNavBar;
