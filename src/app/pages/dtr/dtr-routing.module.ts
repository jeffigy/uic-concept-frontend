import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DtrPage } from './dtr.page';

const routes: Routes = [
  {
    path: '',
    component: DtrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DtrPageRoutingModule {}
