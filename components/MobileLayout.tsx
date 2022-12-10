import AppBar from './AppBar';
import BottomNavBar from './BottomNavBar';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const MobileLayout = ({ children }: Props) => {
  return (
    <section className="block bg-gray-100 text-gray-800 w-full min-h-screen md:hidden">
      {/* The Header, mobile */}
      <AppBar />
      {/* The Main View, mobile */}
      <main className="w-full min-h-screen bg-gray-50 px-4 py-24">
        {children}
      </main>
      <BottomNavBar />
    </section>
  );
};

export default MobileLayout;
