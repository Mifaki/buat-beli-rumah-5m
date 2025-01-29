import { LayoutDashboardIcon, PiggyBank, Server, Settings, Wallet } from 'lucide-react';
import { INavItem } from '@/shared/models/layout-interfaces';

export const navItems: INavItem[] = [
  {
    title: 'Dashboard',
    url: '/dashboard',
    icon: <LayoutDashboardIcon />,
    isActive: false,
    shortcut: ['d', 'd'],
    items: [],
  },
  {
    title: 'Transactions',
    url: '/dashboard/transactions',
    icon: <PiggyBank />,
    shortcut: ['p', 'p'],
    isActive: false,
    items: [],
  },
  {
    title: 'Accounts',
    url: '/dashboard/accounts',
    icon: <Wallet />,
    shortcut: ['a', 'a'],
    isActive: false,
    items: [],
  },
  {
    title: 'Categories',
    url: '/dashboard/categories',
    icon: <Server />,
    shortcut: ['c', 'c'],
    isActive: false,
    items: [],
  },
  {
    title: 'Settings',
    url: '/dashboard/settings',
    icon: <Settings />,
    shortcut: ['k', 'k'],
    isActive: false,
    items: [],
  },
];
