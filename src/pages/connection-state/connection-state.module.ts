import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ConnectionStatePage } from './connection-state';

@NgModule({
  declarations: [
    ConnectionStatePage,
  ],
  imports: [
    IonicPageModule.forChild(ConnectionStatePage),
  ],
})
export class ConnectionStatePageModule {}
