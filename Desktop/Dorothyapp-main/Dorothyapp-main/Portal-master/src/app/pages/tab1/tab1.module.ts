//import { AuthModule } from '../../service/auth/auth.module';
import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { FormControl, FormGroup } from '@angular/forms';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { S3ServiceProvider } from 'src/app/service/s3-service.service';
import { PhotoService } from 'src/app/service/photo.service';
import { ChildModel } from 'src/app/models/model/child.model';
import { UserModel } from 'src/app/models/model/user.model';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    Tab1PageRoutingModule,
    FormsModule,
    ReactiveFormsModule,    
    //RouterModule.forChild([{ path: 'tab1', component: Tab1Page }]),
  ],

  declarations: [Tab1Page],
  exports: [],
  providers: [S3ServiceProvider, PhotoService]
})
export class Tab1PageModule {}
