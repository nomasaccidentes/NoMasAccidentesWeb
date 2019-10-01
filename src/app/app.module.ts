import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http';

import { ROUTES } from './app.routes';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { FormsModule } from '@angular/forms';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { LoginGuard } from './guard/login.guard';
import { NoLoginGuard } from './guard/no-login.guard';
import { AppheaderComponent } from './appheader/appheader.component';
import { AppmenuComponent } from './appmenu/appmenu.component';
import { AppfooterComponent } from './appfooter/appfooter.component';
import { CapacitacionComponent } from './components/capacitacion/capacitacion.component';
import { AsesoriasComponent } from './components/asesorias/asesorias.component';
import { MisServiciosComponent } from './components/mis-servicios/mis-servicios.component';
import { MiContratoComponent } from './components/mi-contrato/mi-contrato.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    NavbarComponent,
    AppheaderComponent,
    AppmenuComponent,
    AppfooterComponent,
    CapacitacionComponent,
    AsesoriasComponent,
    MisServiciosComponent,
    MiContratoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot( ROUTES, { useHash: true } ),
    FormsModule
  ],
  providers: [LoginGuard, NoLoginGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
