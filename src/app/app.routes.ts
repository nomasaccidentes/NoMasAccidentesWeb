import { Routes } from '@angular/router';
import { LoginComponent } from "../app/components/login/login.component";
import { DashboardComponent } from "../app/components/dashboard/dashboard.component";
import { LoginGuard } from './guard/login.guard';
import { NoLoginGuard } from './guard/no-login.guard';
import {  CapacitacionComponent } from "../app/components/capacitacion/capacitacion.component";

export const ROUTES: Routes = [
    { path: 'login', component: LoginComponent , canActivate:[NoLoginGuard]},
    { path: 'dashboard', component:  DashboardComponent, canActivate:[LoginGuard] },
    { path: 'capacitacion', component:  CapacitacionComponent, canActivate:[LoginGuard] },
    { path: '', pathMatch: 'full', redirectTo: 'login' },
    { path: '**', pathMatch: 'full', redirectTo: 'login' }

];