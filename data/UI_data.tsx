import * as Icons from 'react-icons/hi';

export const SideBarLinks = [
  {
    title: 'Dashboard',
    links: [
      {
        name: 'Products',
        icon: (
          <Icons.HiShoppingBag className="w-7 h-7 text-blue-500 group-hover:text-blue-400" />
        ),
        route: '/products',
      },
      {
        name: 'Orders',
        icon: (
          <Icons.HiBookmark className="w-7 h-7 text-blue-500 group-hover:text-blue-400" />
        ),
        route: '/orders',
      },
      {
        name: 'Payments',
        icon: (
          <Icons.HiCurrencyDollar className="w-7 h-7 text-blue-500 group-hover:text-blue-400" />
        ),
        route: '/payments',
      },
      {
        name: 'Settings',
        icon: (
          <Icons.HiCog className="w-7 h-7 text-blue-500 group-hover:text-blue-400" />
        ),
        route: '/settings',
      },
    ],
  },
  {
    title: 'Advanced',
    links: [
      {
        name: 'Analytics',
        icon: (
          <Icons.HiChartPie className="w-7 h-7 text-blue-500 group-hover:text-blue-400" />
        ),
        route: '/analytics',
      },
      {
        name: 'Marketing',
        icon: (
          <Icons.HiUserGroup className="w-7 h-7 text-blue-500 group-hover:text-blue-400" />
        ),
        route: '/marketing',
      },
      {
        name: 'Deliveries',
        icon: (
          <Icons.HiTruck className="w-7 h-7 text-blue-500 group-hover:text-blue-400" />
        ),
        route: '/deliveries',
      },
      {
        name: 'Support',
        icon: (
          <Icons.HiHand className="w-7 h-7 text-blue-500 group-hover:text-blue-400" />
        ),
        route: '/support',
      },
    ],
  },
];
