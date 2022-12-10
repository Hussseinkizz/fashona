import SideBarNav from './SideBarNav';
import * as Icons from 'react-icons/io5';

type Props = {};

const SidebarLeft = (props: Props) => {
  return (
    <div className="flex flex-col items-center justify-between">
      <SideBarNav />
    </div>
  );
};

export default SidebarLeft;
