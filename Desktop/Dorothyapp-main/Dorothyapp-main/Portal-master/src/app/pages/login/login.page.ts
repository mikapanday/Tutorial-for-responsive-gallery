  
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';
import { CognitoUser } from '@aws-amplify/auth';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { environment } from '../../../environments/environment'


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage{
  email: string;
  password: string;

  signinForm : FormGroup = new FormGroup({
    email: new FormControl('',[Validators.email, Validators.required]),
    password: new FormControl('', [Validators.required, Validators.min(6)]), 
    confirmpassword: new FormControl('', [Validators.required])
  });

  get emailInput(){
    return this.signinForm.get('email')
  }
  get passwordInput(){
    return this.signinForm.get('password')
  }
  get confirmpasswordInput(){
    return this.signinForm.get('confirmpassword')
  }

  constructor(private _router: Router,
              public auth: AuthService) {}

  
 

  login() {
  
    this.auth.signIn(this.emailInput.value, this.passwordInput.value)
    .then((user: CognitoUser|any) => {
        this._router.navigate(['']);
    })
    .catch((error: any) => {

      console.log(error.message); // Add notification functionality here 
      // this.openSnackBar(error);
      switch (error.code) {
        case "UserNotConfirmedException":
          environment.confirm.email = this.emailInput.value;
          environment.confirm.password = this.passwordInput.value;
          this._router.navigate(['confirm-email']);
          break;
        case "UsernameExistsException":
          this._router.navigate(['signin']);
          break;

      }
    })
  }

}
