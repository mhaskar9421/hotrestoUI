import { Component, OnInit, ViewChild } from '@angular/core';
import { Model } from './login.model';
import { LoginService } from './login.service';

import { AuthService } from '../auth.service';

import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService]
})
export class LoginComponent implements OnInit {

  isSubmitting: boolean = false;
  isUserLoggedIn = true;
  forgotPasswordForm = false;
  public model: Model;
  loading = false;
  //errorDisplay = false;
  //errorText: string;
  constructor(private router: Router, private authService: AuthService,
    private toastrService: ToastrService, private loginService: LoginService) {
    this.model = new Model();
  }

  ngOnInit() {
  }
  loginUser() {
    this.router.navigate(['home']);
    this.loading = true;
    this.loginService.login(this.model.username, this.model.password)
      .subscribe(
        res => {
          console.log(res);
          if (res) {
            this.router.navigate(['dashboard']);
          }
          //else {
          //this.errorDisplay = true;
          //this.errorText = data.message;
          //}
        },
        error => {
          console.log(error);
          this.loading = false;
        });
  }
  switchForms() {
    this.isUserLoggedIn = !this.isUserLoggedIn;
    this.forgotPasswordForm = !this.forgotPasswordForm;
  }

  recoverPassword() {
    this.loginService.resetPassword(this.model.email)
      .subscribe(
        data => {
          console.log(data);
        },
        error => {
          console.log(error);
          this.loading = false;
        });
  }

  // onLogin() {
  //   this.isSubmitting = true;
  //   const user = {};
  //   user['username'] = this.currentForm.value.username;
  //   user['pwd'] = this.currentForm.value.password;
  //   this.authService.login(user).subscribe(() => {
  //   }, (error) => {
  //     this.isSubmitting = false;
  //     let errMsg = "login_error";
  //     if (error && error['error']) {
  //       errMsg = error.error.error_code;
  //     }
  //     this.toastrService.error(JSON.stringify(errMsg), 'Login  Error:', {
  //       timeOut: 3000,
  //     });
  //   })
  // }

}
