import { Component, OnInit } from '@angular/core';
import { Model } from './login.model';
import { LoginService } from './login.service';
import { notificationMessages } from '../../notificationMessages';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  providers: [LoginService, notificationMessages]
})
export class LoginComponent implements OnInit {

  isSubmitting: boolean = false;
  isUserLoggedIn = true;
  forgotPasswordForm = false;
  public model: Model;
  loading = false;
  errorText: string;
  constructor(private router: Router, private loginService: LoginService, public constants: notificationMessages) {
    this.model = new Model();
  }

  ngOnInit() {
  }
  loginUser() {
    this.loading = true;
    this.loginService.login(this.model.username, this.model.password)
      .subscribe(
        data => {
          console.log(data);
          if (data) {
            this.router.navigate(['dashboard']);
          }
          else {
            this.loading = true;
            this.errorText = this.constants.error_text;
          }
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
