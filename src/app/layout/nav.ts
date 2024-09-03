import { INavData } from '../data/data-types';


  


export const navItems: INavData[] = [  {
  title: true,
  name: 'Admin',
  subCat: [
    // {
    //   subname: 'Dashboard',
    //   icon: 'fa fa-solid fa-user',
    //   url: '/dashboard',
     
    // },
    {
      subname: 'User Manage',
      icon: 'fa fa-building',
      url: '/user-manage',
      
    },
  ],
},
  {
    title: true,
    name: 'Users',
    subCat: [
      {
        subname: 'Profile',
        icon: 'fa fa-solid fa-user',
        url: 'profile',
       
      },
      {
        subname: 'Projects',
        icon: 'fa fa-star',
        url: 'project-details',
        
      },
      {
        subname: 'Quotes',
        icon: 'fa fa-briefcase',
        
      },
    ],
  },

];
