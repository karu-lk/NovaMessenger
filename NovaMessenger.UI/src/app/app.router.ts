import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';

export const router: Routes = [
    { path: '', redirectTo: 'views', pathMatch: 'full' },
    // { path: '**', redirectTo: 'views/dashboard'}
    { path: '**', redirectTo: 'views/home'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);