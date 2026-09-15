import { Routes } from '@angular/router';

export const routes: Routes = [
    {
        path: '',
        loadComponent: () => import('./feature/dashboard/dashboard').then(m => m.Dashboard)
    }
];
