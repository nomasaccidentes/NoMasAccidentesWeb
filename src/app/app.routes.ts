import { Routes } from '@angular/router';
import { LoginComponent } from "../app/components/login/login.component";
import { DashboardComponent } from "../app/components/dashboard/dashboard.component";
import { LoginGuard } from './login.guard';
import { NoLoginGuard } from './no-login.guard';

export const ROUTES: Routes = [
    { path: 'login', component: LoginComponent , canActivate:[NoLoginGuard]},
    { path: 'dashboard', component:  DashboardComponent, canActivate:[LoginGuard] },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }

];