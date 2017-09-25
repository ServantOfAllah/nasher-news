import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FullPostPage } from './full-post';

@NgModule({
  declarations: [
    FullPostPage,
  ],
  imports: [
    IonicPageModule.forChild(FullPostPage),
  ],
})
export class FullPostPageModule {}
