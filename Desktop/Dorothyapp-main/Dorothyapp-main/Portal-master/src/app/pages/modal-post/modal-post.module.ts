import { NgModule } from '@angular/core';
import { IonicModule} from '@ionic/angular';
import { ModalPost } from './modal-post';

@NgModule({
  declarations: [
    ModalPost,
  ],
  imports: [
    IonicModule
  ],
  exports: [
    ModalPost
  ]
})
export class ModalPostModule {}
