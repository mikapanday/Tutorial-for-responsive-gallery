
import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { AlertController, ModalController, NavController, Platform } from '@ionic/angular';
import { PhotoService } from '../../service/photo.service';
import { AuthService } from 'src/app/service/auth.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { S3ServiceProvider } from 'src/app/service/s3-service.service';
import { UserModel } from 'src/app/models/model/user.model';
import { ChildModel } from 'src/app/models/model/child.model';
import { PostModel, PostModelSend } from 'src/app/models/model/post.model';

import { Auth } from 'aws-amplify'
import { CognitoUser } from '@aws-amplify/auth'
import { Subscription } from 'rxjs';
import { PostService } from 'src/app/service/post.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { formatCurrency } from '@angular/common';
import { ActivationStart, Router,  RouterOutlet } from '@angular/router';

// this is the framework of the post that is uploaded to each child's individual storage bucket
//export interface NewPost {
//  username: string,
//  img_url: string,
//  photoDescription: string,
//  child_name: string,
//  child_id: string
//};


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {
  public imageData: string;
  public imageView: string;
  public imageName: string;
  child: any;

  posts: PostModel[] = [];
  post: PostModelSend = {
    username: '',
    img_url: '',
    photoDescription: '',
    child_name: '',
    child_id: ''
  }

  users: UserModel[];

  parentUser: CognitoUser
  profile: any = {}
  restid: string

  private postsSub: Subscription;
  private usersSub: Subscription;


  constructor(
    public navCtrl: NavController,
      public platform: Platform, private camera: Camera, private loader: AlertController, public auth: AuthService,
      public photo: PhotoService, public postService: PostService, private modalCtrl: ModalController) {}



  addPostForm:FormGroup = new FormGroup({
    content: new FormControl(null, {
      updateOn: 'blur',
      validators: [Validators.required, Validators.maxLength(180)]
    }),
  });

  async ngOnInit() {
    //this.determineChild();
    // pull first child info and load ChildModel-- we need the child's id to find the storage bucket that info is saved in
    
  }

  // this function determines which child database you are uploading your post into
  determineChild(){
    /// need to connect to front end with a form-- to determine when user has multiple children in list
    //if (this.user.child == []){
    //  return "error, no child in network, please go to the next page to add to your network!"
    /// display no child in network
    }

    // need an else statement for when there is child in []


  //}

  // this function will allow you to change which child's database you post in
  //pickChildNetwork(){

  //}

  get content() {
    return this.addPostForm.get('content')
  }

  onCreatePost() {
    console.log("The function works")
    if (!this.addPostForm.valid) {
      return;
    }


    this.post.username = this.restid;
    this.post.img_url = this.imageData;
    this.post.child_id;
    this.post.photoDescription;
    this.post.child_name;

    this.postService.postChildInfo(this.post)
    .subscribe(() => this.displayPosts())

    this.addPostForm.reset();
    // this.displayPosts()

    // this.router.navigate(['/places/tabs/offers']);
  }




  displayPosts() {
    this.postService.getPosts()
    .subscribe((data: any) => this.posts = data);
    console.log(this.posts)
  }

  // this function opens up the camera option on the app and allows a user to take a photo within the app
  openCamera() {
    this.platform.ready().then(readySource => {
      const options: CameraOptions = {
        quality: 100,
        destinationType: this.camera.DestinationType.DATA_URL,
        encodingType: this.camera.EncodingType.JPEG,
        mediaType: this.camera.MediaType.PICTURE
      };

      this.camera.getPicture(options).then(
        imageData => {
          this.imageView = "data:image/jpeg;base64," + imageData;
          this.imageData = imageData;
        },
        err => {
          alert("Error in capture image");
        }
      );
    });
  }

  // this function is called in html when a user presses the upload button
  // when this function is called it calls S3 service and uploads NewPost to child's database (determined by child ID)
  //async uploadPost(post: NewPost) {

    // need to add s3-service for save post in bucket
  //  this.photo.savePost({
  //    username: this.user.name,
  //    img_url: this.imageData,
  //    photoDescription: this.imageName,
  //    child_name: this.child.name,
  //    child_id: this.child.userId
  //  })

  //}
}


