
import { Component, OnDestroy, OnInit } from '@angular/core';

import { ModalController, NavParams } from '@ionic/angular';

import { CognitoUser } from 'amazon-cognito-identity-js'
import { EditProfile } from '../edit-profile/edit-profile';
import { Options } from '../options/options';
import { AuthService } from 'src/app/service/auth.service';
import { Auth } from 'aws-amplify';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: 'tab4.page.html',
  styleUrls: ['tab4.page.scss'],

})
export class Tab4Page implements OnInit, OnDestroy{
  profileForm: FormGroup = new FormGroup({
    email: new FormControl('', [Validators.email ]), 
    name: new FormControl('', [ Validators.min(2)])
  });

  profile:any = {};
  user: CognitoUser;
  data: any;

  get emailInput() {return this.profileForm.get('email')}
  get nameInput() {return this.profileForm.get('name')}


  constructor(private modalController: ModalController,
              private _authService: AuthService,
              private _router: Router,            
              ) { }
  ngOnDestroy(): void {
    throw new Error('Method not implemented.');
  }


  //async logoutModal(id: number) {
  //  const modal = await this.modalController.create({
  //    component: LogoutModalPage,
  //    cssClass: 'modal-container',
  //  });
  //  modal.onDidDismiss().then(() => this._router.navigate(['login']))

  //  return await modal.present();
  //}

  async ngOnInit() {
    this.getUserInfo();
    let user = await Auth.currentAuthenticatedUser();

  }

  async getUserInfo(){
    this.profile = await Auth.currentUserInfo();
    this.user = await Auth.currentAuthenticatedUser();
    this.nameInput.setValue(this.profile.attributes['name']);
    this.emailInput.setValue(this.profile.attributes['email']);
  }
  async editProfile() {
    try {
      let attributes = {
        'name' : this.nameInput.value, 
      }
      await Auth.updateUserAttributes(this.user, attributes);

      console.log("Profile has been updated")

    }
    catch (error){
      console.log(error)
    }
  }

  
}

