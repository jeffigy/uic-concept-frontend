import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () =>
          import('../tab-pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'calendar',
        loadChildren: () =>
          import('../tab-pages/calendar/calendar.module').then((m) => m.CalendarPageModule),
      },
      {
        path: 'rooms',
        loadChildren: () =>
          import('../tab-pages/rooms/rooms.module').then((m) => m.RoomsPageModule),
      },
      {
        path: 'notifications',
        loadChildren: () =>
          import('../tab-pages/notifications/notifications.module').then((m) => m.NotificationsPageModule),
      },
      {
        path: 'account',
        loadChildren: () =>
          import('../tab-pages/account/account.module').then((m) => m.AccountPageModule),
      },
      {
        path: '',
        redirectTo: '/tabs/home',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/home',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
