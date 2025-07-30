import { Routes } from "@angular/router";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { MysqlComponent } from "./mysql/mysql.component";

export const routes: Routes = [
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: DashboardComponent },
    { path: 'mysql', component: MysqlComponent }
]