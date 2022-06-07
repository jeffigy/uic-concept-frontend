import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RoomsPage } from './rooms.page';

const routes: Routes = [
  {
    path: '',
    component: RoomsPage,
    // children: [
    //   {
    //       path: 'todos',
    //       loadChildren: () =>
    //         import('../../pages/todos/todos.module').then((m) => m.TodosPageModule),
    //     }
    // ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RoomsPageRoutingModule {}
