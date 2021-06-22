import { Component, OnInit } from '@angular/core';
import { Auth } from 'aws-amplify'
import { CognitoUser } from '@aws-amplify/auth'
import { UserModel } from 'src/app/models/model/user.model';
import { ChildModel } from 'src/app/models/model/child.model';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})

export class Tab3Page implements OnInit {

  constructor() {}


  users: UserModel[];

  parentUser: CognitoUser
  profile: any = {}
  restid: string

  ngOnInit(){

    
    console.log(this.GetUserInfo)
    // pull data from childModel for any child you input on this page (happens on the backend) *** to do

    // display a user's child
    //this.getChildList()

    // display a user's team
    //this.getTeamList()


    // use pools to determine--- only gaurdian group can init a child's database
    // -- only careteam can request joining a child's team via email
    // -- gaurdian group can invite someone to join your team

  }

  getChildList(){
    //return this.user.child
  }

  async GetUserInfo(){
    this.profile = await Auth.currentUserInfo()
    //this.restdbService.getUserInfo(this.profile.attributes['sub'])
    //.subscribe((data: Restdbuser) => this.restid = data[0]._id)
  };

  getTeamList(){
    //return this.user.team
  }
}


