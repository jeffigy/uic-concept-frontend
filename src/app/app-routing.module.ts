import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'todos',
    loadChildren: () =>
      import('./pages/todos/todos.module').then((m) => m.TodosPageModule),
  },
  {
    path: 'timetable',
    loadChildren: () =>
      import('./pages/timetable/timetable.module').then((m) => m.TimetablePageModule),
  },
  {
    path: 'academics',
    loadChildren: () => import('./pages/academics/academics.module').then( m => m.AcademicsPageModule)
  },
  {
    path: 'dtr',
    loadChildren: () => import('./pages/dtr/dtr.module').then( m => m.DtrPageModule)
  },
  {
    path: 'clearance',
    loadChildren: () => import('./pages/clearance/clearance.module').then( m => m.ClearancePageModule)
  },
  {
    path: 'financial',
    loadChildren: () => import('./pages/financial/financial.module').then( m => m.FinancialPageModule)
  },
  {
    path: 'enrolment',
    loadChildren: () => import('./pages/enrolment/enrolment.module').then( m => m.EnrolmentPageModule)
  },
  {
    path: 'election',
    loadChildren: () => import('./pages/election/election.module').then( m => m.ElectionPageModule)
  },
  {
    path: 'evaluation',
    loadChildren: () => import('./pages/evaluation/evaluation.module').then( m => m.EvaluationPageModule)
  },
  {
    path: 'schedule',
    loadChildren: () => import('./pages/schedule/schedule.module').then( m => m.SchedulePageModule)
  },
  {
    path: 'settings',
    loadChildren: () => import('./pages/settings/settings.module').then( m => m.SettingsPageModule)
  },
  {
    path: 'evaluate',
    loadChildren: () => import('./pages/evaluate/evaluate.module').then( m => m.EvaluatePageModule)
  },
  {
    path: 'profile-details',
    loadChildren: () => import('./pages/profile-details/profile-details.module').then( m => m.ProfileDetailsPageModule)
  },
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
