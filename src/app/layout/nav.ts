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
  name: 'Order',
  subCat: [
    {
      subname: 'Items',
      icon: 'fa fa-solid fa-user',
      url: '/order/items-order',
    },
  ],
},
{
  title: true,
  name: 'Cheff',
  subCat: [
    {
      subname: 'Add Product',
      icon: 'fa fa-solid fa-user',
      url: '/cheff/add-products',
    },
    {
      subname: 'All Products',
      icon: 'fa fa-solid fa-user',
      url: '/cheff/all-products',
      // ssubCat: [
      //   {
      //     subname: 'All Products',
      //     icon: 'fa fa-solid fa-user',
      //     url: '/cheff/all-products',
      //   },
      //   {
      //     subname: 'All Products',
      //     icon: 'fa fa-users',
      //     url: '/cheff/all-products',
      //   }
      // ]
    },
  ],
},

];
