import DesktopLayout from './DesktopLayout';
import MobileLayout from './MobileLayout';
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
    <>
      <Head>
        <title>{pageTitle}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <DesktopLayout>{children}</DesktopLayout>
      <MobileLayout>{children}</MobileLayout>
    </>
  );
};

export default Layout;
