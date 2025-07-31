import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { dashboardRoutes } from "./dashboard/dashboard.routes";

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    {
        path: 'dashboard',
        component: DashboardComponent,
        children: dashboardRoutes
    },
    {
        path: 'mysql',
        loadComponent: () => import('./mysql/mysql.component').then(m => m.MysqlComponent)
    }
]