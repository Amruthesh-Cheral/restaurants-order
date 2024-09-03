import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './modules/home/dashborad/dashborad/dashborad.component';
import { UserManageComponent } from './modules/user-manage/user-manage.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { ProjectDetailsComponent } from './modules/project-details/project-details.component';
import { LoginPageComponent } from './modules/auth/pages/login-page/login-page.component';
import { ProfileViewComponent } from './modules/profile-view/profile-view.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/login',
    pathMatch: 'full',
  },
  {
    path: '',
    component : ContentLayoutComponent,
    children:[
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component : DashboradComponent 
      },
      {
        path: 'project-details',
        component : ProjectDetailsComponent 
      },
      {
        path: 'user-manage',
        component : UserManageComponent 
      },
      {
        path: 'profile',
        component : ProfileViewComponent
      },
    ]
  },
  {
    path: 'login',
    component : LoginPageComponent
  },
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
