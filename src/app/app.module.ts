import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboradComponent } from './modules/admin/dashborad/dashborad/dashborad.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { LoginPageComponent } from './modules/auth/pages/login-page/login-page.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import {MatMenuModule} from '@angular/material/menu';
import { ProfileViewComponent } from './modules/profile-view/profile-view.component';
import { SelectdropComponent } from './shared/component/selectdrop/selectdrop.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatTabsModule} from '@angular/material/tabs';
import { UserServicesComponent } from './modules/user/user-services/user-services.component';
import { SpecialComponent } from './modules/user/special/special.component';
import { UserCheffComponent } from './modules/user/user-cheff/user-cheff.component';
import { AllOrdersComponent } from './modules/admin/all-orders/all-orders.component';
import { CheffOrdersComponent } from './modules/cheff/cheff-orders/cheff-orders.component';

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
    SelectdropComponent,
    UserServicesComponent,
    SpecialComponent,
    UserCheffComponent,
    AllOrdersComponent,
    CheffOrdersComponent,
  ],
  imports: [
    MatMenuModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    NgSelectModule,
    MatTabsModule,
    BrowserAnimationsModule ,
    ToastrModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
