import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ElectionPageRoutingModule } from './election-routing.module';

import { ElectionPage } from './election.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ElectionPageRoutingModule
  ],
  declarations: [ElectionPage]
})
export class ElectionPageModule {}
