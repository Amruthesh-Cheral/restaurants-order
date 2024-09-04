import { INavData } from '../data/data-types';





export const navItems: INavData[] = [{
  title: true,
  name: 'Admin',
  subCat: [
    {
      subname: 'Dashboard',
      icon: 'fa fa-solid fa-user',
      url: '/admin/dashboard',

    },
    {
      subname: 'All Orders',
      icon: 'fa fa-building',
      url: '/admin/all-orders',
    },
  ],
},
{
  title: true,
  name: 'Users',
  subCat: [
    {
      subname: 'Services',
      icon: 'fa fa-solid fa-user',
      url: '/user/services',

    },
    {
      subname: 'Reviews / Special',
      icon: 'fa fa-star',
      url: '/user/specials',

    },
    {
      subname: 'Cheff',
      icon: 'fa fa-briefcase',
      url: '/user/cheff',
    },
  ],
},
{
  title: true,
  name: 'Cheff',
  subCat: [
    {
      subname: 'Dashboard',
      icon: 'fa fa-star',
      url: '/cheff/dashboard',
    },
    {
      subname: 'Orders',
      icon: 'fa fa-solid fa-user',
      url: '/cheff/all-orders',

    },
  ],
},

];
