import { PhotoService } from './../../service/photo.service';
import { AlertController, ModalController, NavController, Platform } from '@ionic/angular';

import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { Camera, CameraOptions, PictureSourceType } from '@ionic-native/camera/ngx';

import { S3ServiceProvider } from 'src/app/service/s3-service.service';
import { AuthService } from "../../service/auth.service";
import { PostModel, PostModelSend } from 'src/app/models/model/post.model';
import { PostService } from 'src/app/service/post.service';

// this page gets the user image and calls auth.service to push photo post to aws S3

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})

//This array will only contain the name of a file like “1234.png”,
//so for each entry we need to resolve the name to the local path of our app which we add to the object as filePath.
//export class imgPost
//{
//  img: string;
//  description: string
//}

export class Tab2Page implements OnInit {

  posts: PostModel[] = [];
  post: PostModelSend = {
    username: '',
    img_url: '',
    photoDescription: '',
    child_name: '',
    child_id: ''
  }

  constructor(
    public navCtrl: NavController,
      public platform: Platform, private camera: Camera, public s3Service: S3ServiceProvider, private loader: AlertController, public auth: AuthService, public postService: PostService
  ) {}

  ngOnInit(){
    // pull first child info and load ChildModel
    // load posts from spefific child user bucket (base on id of children)
  }


  displayPosts() {
    this.postService.getPosts()
    .subscribe((data: any) => this.posts = data);
    console.log(this.posts)
  }


}
