import { Routes, RouterModule } from '@angular/router';
import { Views } from './views.component';
import { ModuleWithProviders } from '@angular/core';

export const routes: Routes = [
  // {
  //   path: 'login',
  //   loadChildren: '#'
  // },
  // {
  //   path: 'register',
  //   loadChildren: 'app/views/register/register.module#RegisterModule'
  // },
  {
    path: 'views',
    component: Views,
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'login', loadChildren: './login/login.module#LoginModule' },
      { path: 'home', loadChildren: './home/home.module#HomeModule' },
      { path: 'dashboard', loadChildren: './dashboard/dashboard.module#DashboardModule' },
      { path: 'charts', loadChildren: './charts/charts.module#ChartsModule' },
      { path: 'backoffice', loadChildren: './backoffice/backoffice.module#BackofficeModule' },
      { path: 'messageboard', loadChildren: './messageboard/messageboard.module#MessageBoardModule' },
      { path: 'messageeditor/:messageId', loadChildren: './messageeditor/messageeditor.module#MessageEditorModule' }
    ]
  }
];

export const routing: ModuleWithProviders = RouterModule.forChild(routes);
