import { Routes } from '@angular/router';
import { LoginComponent } from "../app/components/login/login.component";
import { DashboardComponent } from "../app/components/dashboard/dashboard.component";
import { LoginGuard } from './guard/login.guard';
import { NoLoginGuard } from './guard/no-login.guard';
import {  CapacitacionComponent } from "../app/components/capacitacion/capacitacion.component";
import { MisServiciosComponent } from "../app/components/mis-servicios/mis-servicios.component";
import { AsesoriasComponent } from "../app/components/asesorias/asesorias.component";
import { MiContratoComponent } from "../app/components/mi-contrato/mi-contrato.component";
import { SolicitudCapacitacionComponent } from "../app/components/solicitud-capacitacion/solicitud-capacitacion.component";
import { SolicitudAsesoriaComponent } from "../app/components/solicitud-asesoria/solicitud-asesoria.component";
import { CapacitacionDetalleComponent } from "../app/components/capacitacion-detalle/capacitacion-detalle.component";
import { SolicitudAsesoriaEspecialComponent } from "../app/components/solicitud-asesoria-especial/solicitud-asesoria-especial.component";
import { AsesoriaDetalleComponent } from "../app/components/asesoria-detalle/asesoria-detalle.component";
import { RegistroAccidenteComponent } from "../app/components/registro-accidente/registro-accidente.component";

export const ROUTES: Routes = [
    { path: 'login', component: LoginComponent , canActivate:[NoLoginGuard]},
    { path: 'dashboard', component:  DashboardComponent, canActivate:[LoginGuard] },
    { path: 'capacitacion', component:  CapacitacionComponent, canActivate:[LoginGuard] },
    { path: 'mis-servicios', component:  MisServiciosComponent, canActivate:[LoginGuard] },
    { path: 'asesorias', component:  AsesoriasComponent, canActivate:[LoginGuard] },
    { path: 'mi-contrato', component:  MiContratoComponent, canActivate:[LoginGuard] },
    { path: 'solicitudCapacitacion', component:  SolicitudCapacitacionComponent, canActivate:[LoginGuard] },    
    { path: 'solicitudAsesoria', component:  SolicitudAsesoriaComponent, canActivate:[LoginGuard] },
    { path: 'solicitudAsesoriaEspecial', component:  SolicitudAsesoriaEspecialComponent, canActivate:[LoginGuard] },   
    { path: 'capacitacion/capacitacionDetalle/:id', component:  CapacitacionDetalleComponent, canActivate:[LoginGuard] },   
    { path: 'asesorias/asesoriaDetalle/:id', component:  AsesoriaDetalleComponent, canActivate:[LoginGuard] },   
    { path: 'asesorias/registroAccidente/:id', component:  RegistroAccidenteComponent, canActivate:[LoginGuard] },   
    
    { path: '', pathMatch: 'full', redirectTo: 'login' ,canActivate:[NoLoginGuard]},
    { path: '**', pathMatch: 'full', redirectTo: 'login' ,canActivate:[NoLoginGuard]}

];