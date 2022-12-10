import { useStore } from '../hooks/useStore';
import { useRouter } from 'next/router';
import { useState } from 'react';
import * as Icons from 'react-icons/io5';

const LeftNavBar = () => {
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
    <div className="flex-col flex-1 items-center justify-between px-4 py-2 cursor-pointer bg-blue-50 shadow-md w-full _fixed-on-mobile left-0 hidden md:flex">
      <button
        className={`flex flex-col items-center justify-center p-2 transition-all ease-linear hover:bg-blue-100 hover:text-blue-600 rounded-lg ${
          selected === 'home' && 'bg-blue-100 text-blue-600'
        }`}
        onClick={() => handleSelection('home')}>
        {selected === 'home' ? (
          <Icons.IoHome className="w-6 h-6" />
        ) : (
          <Icons.IoHomeOutline className="w-6 h-6" />
        )}
        Home
      </button>
      <button
        className={`flex flex-col items-center justify-center p-2 transition-all ease-linear hover:bg-blue-100 hover:text-blue-600 rounded-lg ${
          selected === 'services' && 'bg-blue-100 text-blue-600'
        }`}
        onClick={() => handleSelection('services')}>
        {selected === 'services' ? (
          <Icons.IoBagHandle className="w-6 h-6" />
        ) : (
          <Icons.IoBagHandleOutline className="w-6 h-6" />
        )}
        Services
      </button>
      <button
        className={`flex flex-col items-center justify-center p-2 transition-all ease-linear hover:bg-blue-100 hover:text-blue-600 rounded-lg ${
          selected === 'chat' && 'bg-blue-100 text-blue-600'
        }`}
        onClick={() => handleSelection('chat')}>
        {selected === 'chat' ? (
          <Icons.IoChatboxEllipses className="w-6 h-6" />
        ) : (
          <Icons.IoChatboxEllipsesOutline className="w-6 h-6" />
        )}
        Chat
      </button>
      <button
        className={`flex flex-col items-center justify-center p-2 transition-all ease-linear hover:bg-blue-100 hover:text-blue-600 rounded-lg ${
          selected === 'profile' && 'bg-blue-100 text-blue-600'
        }`}
        onClick={() => handleSelection('profile')}>
        {selected === 'profile' ? (
          <Icons.IoPerson className="w-6 h-6" />
        ) : (
          <Icons.IoPersonOutline className="w-6 h-6" />
        )}
        Profile
      </button>
    </div>
  );
};

export default LeftNavBar;
