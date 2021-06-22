import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmEmailPageRoutingModule } from './confirm-email-routing.module';

import { ConfirmEmailPage } from './confirm-email.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReactiveFormsModule,
    ConfirmEmailPageRoutingModule
  ],
  declarations: [ConfirmEmailPage]
})
export class ConfirmEmailPageModule {}
