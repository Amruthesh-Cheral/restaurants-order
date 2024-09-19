import { importProvidersFrom, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DashboradComponent } from './modules/admin/dashborad/dashborad/dashborad.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginPageComponent } from './modules/auth/pages/login-page/login-page.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import {MatMenuModule} from '@angular/material/menu';
import { ProfileViewComponent } from './modules/profile-view/profile-view.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatTabsModule} from '@angular/material/tabs';
import { UserServicesComponent } from './modules/user/user-services/user-services.component';
import { SpecialComponent } from './modules/user/special/special.component';
import { UserCheffComponent } from './modules/user/user-cheff/user-cheff.component';
import { AllOrdersComponent } from './modules/admin/all-orders/all-orders.component';
import { CheffOrdersComponent } from './modules/cheff/cheff-orders/cheff-orders.component';
import { ChefDashboardComponent } from './modules/cheff/chef-dashboard/chef-dashboard.component';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatNativeDateModule} from "@angular/material/core";
import { AddProductsComponent } from './modules/cheff/add-products/add-products.component';
import { OrderingPersonComponent } from './modules/table-order/ordering-person/ordering-person.component';
import {MatDialogModule} from '@angular/material/dialog';
import { OrderItemComponent } from './modules/table-order/order-item/order-item.component';
import {MatCheckboxModule} from '@angular/material/checkbox';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ProfileViewComponent,
    DashboradComponent,
    FooterComponent,
    HeaderComponent,
    ContentLayoutComponent,
    RegisterComponent,
    UserServicesComponent,
    SpecialComponent,
    UserCheffComponent,
    AllOrdersComponent,
    CheffOrdersComponent,
    ChefDashboardComponent,
    AddProductsComponent,
    OrderingPersonComponent,
    OrderItemComponent,
  ],
  imports: [
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
    FontAwesomeModule,
    NgSelectModule,
    MatFormFieldModule,
    MatTabsModule,
    MatDatepickerModule,
    MatInputModule,
    MatDialogModule,
    MatCheckboxModule,
    BrowserAnimationsModule ,
    ToastrModule.forRoot(),
  ],
  providers: [
    importProvidersFrom(MatNativeDateModule)
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
