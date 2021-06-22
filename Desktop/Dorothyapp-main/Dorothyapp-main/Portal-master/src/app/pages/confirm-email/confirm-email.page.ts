import { Component, OnInit } from '@angular/core';
import { environment }  from 'src/environments/environment';
import { Router } from '@angular/router';
import { Auth } from 'aws-amplify';
import { FormControl, FormGroup, Validators } from '@angular/forms';


@Component({
  selector: 'app-confirm-email',
  templateUrl: './confirm-email.page.html',
  styleUrls: ['./confirm-email.page.scss'],
})
export class ConfirmEmailPage implements OnInit {

  email = environment.confirm.email;

  confirmForm: FormGroup = new FormGroup({
    email: new FormControl({value: this.email, disabled: true}), 
    code: new FormControl('', [Validators.required, Validators.min(3)])
  });

  get codeInput() {return this.confirmForm.get('code')}


  constructor(private _router : Router) { }

  ngOnInit() {

    if (!this.email){
      this._router.navigate(['register']);
    }
    else{
      // Auth.resendSignUp(this.email);
    }
  }

  sendAgain(){
    Auth.resendSignUp(this.email).then(() => console.log('A code has been emailed to you!'))
    .catch(() => console.log("an error occured"))
  }

  confirmCode() {
    Auth.confirmSignUp(this.email, this.codeInput.value)
    .then((data:any) => {
      console.log(data);
      if (data == 'SUCCESS' &&
      environment.confirm.email &&
      environment.confirm.password){
        Auth.signIn(this.email, environment.confirm.password)
        .then(() => {
          this._router.navigate(['']);
        }).catch((error:any) => {
          this._router.navigate(['']);
        })
      }
    }).catch((error: any) => {
      this._router.navigate(['']);
    })
  }
}