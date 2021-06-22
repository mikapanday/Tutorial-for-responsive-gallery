import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Registration3PageRoutingModule } from './registration3-routing.module';

import { Registration3Page } from './registration3.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    Registration3PageRoutingModule
  ],
  declarations: [Registration3Page]
})
export class Registration3PageModule {}
