import AppBar from './AppBar';
import AppBarDesktop from './AppBarDesktop';
import BottomNavBar from './BottomNavBar';
import LeftNavBar from './LeftNavBar';
import { useStore } from '../hooks/useStore';
import Head from 'next/head';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const Layout = ({ children }: Props) => {
  const {
    state: { pageTitle },
  } = useStore();

  return (
    <section className="bg-gray-100 w-full h-screen custom-padding-top flex flex-col">
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* The Header, mobile & desktop */}
      <AppBar />
      <AppBarDesktop />
      <div id="#top" />
      <section className="w-full h-full flex gap-4 p-4 justify-between items-center">
        <div className="w-1/5 h-full _surface-design py-2 px-4">
          the left hand
        </div>
        <div className="w-full h-full _surface-design">
          {/* The Main View */}
          <main className="w-full flex flex-col items-center justify-center py-2 px-4 scrollable">
            {children}
          </main>
          {/* The Bottom Nav tabs */}
          <BottomNavBar />
        </div>
        <div className="w-1/5 h-full _surface-design py-2 px-4">
          the right hand
        </div>
      </section>
    </section>
  );
};

export default Layout;
