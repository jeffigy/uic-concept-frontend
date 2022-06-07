import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DtrPageRoutingModule } from './dtr-routing.module';

import { DtrPage } from './dtr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DtrPageRoutingModule
  ],
  declarations: [DtrPage]
})
export class DtrPageModule {}
