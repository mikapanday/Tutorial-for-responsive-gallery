import { IonicModule, NavParams } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab2Page } from './tab2.page';

import { Tab2PageRoutingModule } from './tab2-routing.module';
import { S3ServiceProvider } from 'src/app/service/s3-service.service';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab2PageRoutingModule,
    //RouterModule.forChild([{ path: 'tab2', component: Tab2Page }]),
  ],
  declarations: [Tab2Page],
  providers: [S3ServiceProvider]
})
export class Tab2PageModule {}
