import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Registration2PageRoutingModule } from './registration2-routing.module';

import { Registration2Page } from './registration2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Registration2PageRoutingModule
  ],
  declarations: [Registration2Page]
})
export class Registration2PageModule {}
