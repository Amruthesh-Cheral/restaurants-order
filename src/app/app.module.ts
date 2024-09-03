import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DashboradComponent } from './modules/home/dashborad/dashborad/dashborad.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { ContentLayoutComponent } from './layout/content-layout/content-layout.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { UserManageComponent } from './modules/user-manage/user-manage.component';
import { ProjectDetailsComponent } from './modules/project-details/project-details.component';
import { LoginPageComponent } from './modules/auth/pages/login-page/login-page.component';
import { RegisterComponent } from './modules/auth/pages/register/register.component';
import {MatMenuModule} from '@angular/material/menu';
import { ProfileViewComponent } from './modules/profile-view/profile-view.component';
import { SelectdropComponent } from './shared/component/selectdrop/selectdrop.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {MatTabsModule} from '@angular/material/tabs';

@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    ProfileViewComponent,
    DashboradComponent,
    FooterComponent,
    HeaderComponent,
    ContentLayoutComponent,
    UserManageComponent,
    ProjectDetailsComponent,
    RegisterComponent,
    SelectdropComponent,
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
