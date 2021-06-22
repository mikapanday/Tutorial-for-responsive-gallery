
import { IonicModule, ModalController } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab4Page } from './tab4.page';
import { Tab4PageRoutingModule } from './tab4-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    Tab4PageRoutingModule,
    //RouterModule.forChild([{ path: 'tab4', component: Tab4Page }]),
  ],
  declarations: [Tab4Page],
})
export class Tab4PageModule {}
