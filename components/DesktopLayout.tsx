import AppBarDesktop from './AppBarDesktop';
import SideBarLeft from './SideBarLeft';

type Props = {
  children: JSX.Element | JSX.Element[];
};

const DesktopLayout = ({ children }: Props) => {
  return (
    <section className="bg-gray-100 text-gray-800 w-full min-h-screen hidden md:block custom-padding-top">
      {/* The Header, desktop */}
      <AppBarDesktop />
      <aside className="w-1/5 bg-white shadow-md fixed left-0 top-0 bottom-0 py-2 pt-24 px-4 hidden md:block">
        <SideBarLeft />
      </aside>
      {/* The Main View, desktop */}
      <main className="w-3/5 mx-auto py-2 px-4 hidden md:block">
        <div className="w-full min-h-screen p-4 _surface-design">
          {children}
        </div>
      </main>
      <aside className="w-1/5 bg-white shadow-md fixed right-0 top-0 bottom-0 py-2 pt-24 px-4 hidden md:block">
        some ads & appointment remiders here!
      </aside>
    </section>
  );
};

export default DesktopLayout;
