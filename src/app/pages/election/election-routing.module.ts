import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ElectionPage } from './election.page';

const routes: Routes = [
  {
    path: '',
    component: ElectionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ElectionPageRoutingModule {}
