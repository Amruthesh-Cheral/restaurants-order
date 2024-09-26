import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboradComponent } from './modules/admin/dashborad/dashborad/dashborad.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { LoginPageComponent } from './modules/auth/pages/login-page/login-page.component';
import { ProfileViewComponent } from './modules/profile-view/profile-view.component';
import { UserServicesComponent } from './modules/user/user-services/user-services.component';
import { SpecialComponent } from './modules/user/special/special.component';
import { UserCheffComponent } from './modules/user/user-cheff/user-cheff.component';
import { AllOrdersComponent } from './modules/admin/all-orders/all-orders.component';
import { CheffOrdersComponent } from './modules/cheff/cheff-orders/cheff-orders.component';
import { ChefDashboardComponent } from './modules/cheff/chef-dashboard/chef-dashboard.component';
import { AddProductsComponent } from './modules/cheff/add-products/add-products.component';
import { OrderingPersonComponent } from './modules/table-order/ordering-person/ordering-person.component';
import { AllProductsComponent } from './modules/cheff/all-products/all-products.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/order',
    pathMatch: 'full',
  },
  {
    path: 'user',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'services',
        pathMatch: 'full',
      },
      {
        path: 'services',
        component: UserServicesComponent
      },
      {
        path: 'specials',
        component: SpecialComponent
      },
      {
        path: 'cheff',
        component: UserCheffComponent
      },
    ]
  },
  {
    path: 'admin',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: DashboradComponent
      },
      {
        path: 'all-orders',
        component: AllOrdersComponent
      },
    ]
  },
  {
    path: 'cheff',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full',
      },
      {
        path: 'dashboard',
        component: ChefDashboardComponent
      },
      {
        path: 'all-orders',
        component: CheffOrdersComponent
      },
      {
        path: 'add-products',
        component: AddProductsComponent
      },
      {
        path: 'all-products',
        component: AllProductsComponent
      },
    ]
  },
  {
    path: 'order',
    component: ContentLayoutComponent,
    children: [
      {
        path: '',
        redirectTo: 'items-order',
        pathMatch: 'full',
      },
      {
        path: 'items-order',
        component: OrderingPersonComponent
      },
      {
        path: 'all-orders',
        component: CheffOrdersComponent
      },
      {
        path: 'add-products',
        component: AddProductsComponent
      },
     
      
    ]
  },
  {
    path: 'login',
    component: LoginPageComponent
  },
  {
    path: 'profile',
    component: ProfileViewComponent
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
