import { INavData } from '../data/data-types';


  


export const navItems: INavData[] = [  {
  title: true,
  name: 'name 2',
  subCat: [
    {
      subname: 'Dashboard',
      icon: 'fa fa-solid fa-user',
      url: '/dashboard',
     
    },
    {
      subname: 'User Manage',
      icon: 'fa fa-solid fa-user',
      url: '/user-manage',
      
    },
  ],
},
  {
    title: true,
    name: 'Dashboard',
    subCat: [
      {
        subname: 'Profile',
        icon: 'fa fa-solid fa-user',
        url: 'profile',
       
      },
      {
        subname: 'Projects',
        icon: 'fa fa-solid fa-user',
        url: 'project-details',
        
      },
      {
        subname: 'Quotes',
        icon: 'fa fa-solid fa-user',
        
      },
    ],
  },

];
