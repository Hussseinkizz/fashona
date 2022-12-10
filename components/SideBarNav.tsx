import { useStore } from '../hooks/useStore';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as Icons from 'react-icons/io5';

const SideBarNav = () => {
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
    <div className="flex flex-col gap-4 items-center justify-between px-4 py-2 cursor-pointer w-full">
      <button
        className={`flex w-full flex-auto gap-2 items-center justify-start p-2 py-4 transition-all ease-linear hover:bg-blue-100 hover:text-blue-600 rounded-lg ${
          selected === 'home' && 'bg-blue-100 text-blue-600'
        }`}
        onClick={() => handleSelection('home')}>
        {selected === 'home' ? (
          <Icons.IoNewspaper className="w-6 h-6" />
        ) : (
          <Icons.IoNewspaperOutline className="w-6 h-6" />
        )}
        Feed
      </button>
      <button
        className={`flex w-full flex-auto gap-2 items-center justify-start p-2 py-4 transition-all ease-linear hover:bg-blue-100 hover:text-blue-600 rounded-lg ${
          selected === 'products' && 'bg-blue-100 text-blue-600'
        }`}
        onClick={() => handleSelection('products')}>
        {selected === 'products' ? (
          <Icons.IoBagHandle className="w-6 h-6" />
        ) : (
          <Icons.IoBagHandleOutline className="w-6 h-6" />
        )}
        Products
      </button>
      <button
        className={`flex w-full flex-auto gap-2 items-center justify-start p-2 py-4 transition-all ease-linear hover:bg-blue-100 hover:text-blue-600 rounded-lg ${
          selected === 'services' && 'bg-blue-100 text-blue-600'
        }`}
        onClick={() => handleSelection('services')}>
        {selected === 'services' ? (
          <Icons.IoCalendar className="w-6 h-6" />
        ) : (
          <Icons.IoCalendarOutline className="w-6 h-6" />
        )}
        Services
      </button>
      <button
        className={`flex w-full flex-auto gap-2 items-center justify-start p-2 py-4 transition-all ease-linear hover:bg-blue-100 hover:text-blue-600 rounded-lg ${
          selected === 'chat' && 'bg-blue-100 text-blue-600'
        }`}
        onClick={() => handleSelection('chat')}>
        {selected === 'chat' ? (
          <Icons.IoChatboxEllipses className="w-6 h-6" />
        ) : (
          <Icons.IoChatboxEllipsesOutline className="w-6 h-6" />
        )}
        Messages
      </button>
      <button
        className={`flex w-full flex-auto gap-2 items-center justify-start p-2 py-4 transition-all ease-linear hover:bg-blue-100 hover:text-blue-600 rounded-lg ${
          selected === 'wallet' && 'bg-blue-100 text-blue-600'
        }`}
        onClick={() => handleSelection('wallet')}>
        {selected === 'wallet' ? (
          <Icons.IoWallet className="w-6 h-6" />
        ) : (
          <Icons.IoWalletOutline className="w-6 h-6" />
        )}
        Payments
      </button>
    </div>
  );
};

export default SideBarNav;
