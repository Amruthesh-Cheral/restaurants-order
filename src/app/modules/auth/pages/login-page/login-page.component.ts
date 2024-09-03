import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { ApiEndPoints } from 'src/app/core/constants';
import { ApiHelper } from 'src/app/core/service/api.helper';


@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.scss']
})
export class LoginPageComponent {
  loginForm: FormGroup;
  signUpForm: FormGroup;
  loginAccount: boolean = true;
  signinAccount: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private cookieService: CookieService,
    private apiHelper: ApiHelper
  ) {
    this.loginForm = this.formBuilder.group({
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required]
    });

    this.signUpForm = this.formBuilder.group({
      phoneNumber: ['', Validators.required],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
    });
  }

  accountChange() {
    this.signinAccount = !this.signinAccount
    this.loginAccount = !this.loginAccount
  }
  onLoginSubmit(): void {
    if (this.loginForm.invalid) {
      return;
    }
    const credentials = {
      phoneNumber: this.loginForm.value.phoneNumber,
      password: this.loginForm.value.password
    };

    this.loginService(credentials, ApiEndPoints.signIn)

  }

  setCookieValue(value: string) {
    this.cookieService.set('myCookie', value);
  }

  onSignUpSubmit(): void {
    if (this.signUpForm.invalid) {
      return;
    }
    const signUpcredentials = {
      phoneNumber: this.signUpForm.value.phoneNumber,
      password: this.signUpForm.value.password,
      confirmPassword: this.signUpForm.value.confirmPassword,
      firstName: this.signUpForm.value.firstName,
      lastName: this.signUpForm.value.lastName,
    };
    this.loginService(signUpcredentials, ApiEndPoints.signUp)

  }


  loginService(data: any, ApiEndPoint: string) {
    this.apiHelper.post(data, ApiEndPoint, false).subscribe((response) => {
      var session = response.data.session;
      var profile = response.data.profile;

      let sessionString = JSON.stringify(session);
      localStorage.setItem('session', sessionString);
      localStorage.setItem('profile', JSON.stringify(profile));

      var loginVal = 'logged'
      localStorage.setItem('currentUser', JSON.stringify({ loginVal }));
      this.router.navigate(['/main']);
    },)
  }


}
