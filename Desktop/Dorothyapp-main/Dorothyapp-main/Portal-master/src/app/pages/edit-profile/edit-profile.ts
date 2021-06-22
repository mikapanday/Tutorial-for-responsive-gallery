import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from '@ionic/angular';


@Component({
  selector: 'page-edit-profile',
  templateUrl: 'edit-profile.html',
})
export class EditProfile {

  // You can get this data from your API. This is a dumb data for being an example.
  public user_data = {
   
  };

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public loadingCtrl: LoadingController
    ) {
  }

  updateProfile() {
    let loader = this.loadingCtrl.create({
      duration: 200
    });
     // Get back to profile page. You should do that after you got data from API
  }

  dismiss() {
  }

}
