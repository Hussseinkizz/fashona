import Head from 'next/head';
import { useStore } from '../../hooks/useStore';
import { JSXElement } from '../../utils/UI_types';
import AppBar from './AppBar';
import SideBar from './SideBar';

// type Props = {
//   children: JSX.Element | JSX.Element[];
// };

const Layout = ({ children }: JSXElement) => {
  const {
    store: { showSideBar },
    setStore,
  } = useStore();

  return (
    <>
      <Head>
        <title>Fashona</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <section className="relative bg-gray-100 text-gray-800 w-full min-h-screen">
        {/* The Sidebar */}
        <SideBar isOpen={showSideBar} />
        <main
          className={`foo min-h-screen ${showSideBar ? 'ml-48' : 'w-full'}`}>
          {/* The Header */}
          <AppBar />
          {/* The Main View */}
          <section className="w-full p-4">
            <div className="w-full shadow-lg rounded-md bg-white min-h-full">
              {children}
            </div>
          </section>
        </main>
      </section>
    </>
  );
};

export default Layout;
