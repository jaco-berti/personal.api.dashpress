import { SetupComponent } from './setup/setup.component';
import { Routes } from "@angular/router";

export const dashboardRoutes: Routes = [
    { path: '', redirectTo: 'setup', pathMatch: 'prefix' },
    { path: 'setup', component: SetupComponent },
    {
        path: 'table',
        loadComponent: () => import('./dashboard-table/dashboard-table.component').then(m => m.DashboardTableComponent)
    }
]