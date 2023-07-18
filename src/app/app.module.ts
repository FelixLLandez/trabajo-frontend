import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './Auth/registro/registro.component';
import { LoginComponent } from './Auth/login/login.component';
import { HomeComponent } from './solicitante/rutas/home/home.component';
import { BodyComponent } from './solicitante/sidenav-estructura/body/body.component';
import { SidenavComponent } from './solicitante/sidenav-estructura/sidenav/sidenav.component';
import { PerfilComponent } from './solicitante/rutas/perfil/perfil.component';
import { TrabajitosComponent } from './solicitante/rutas/trabajitos/trabajitos.component';
import { PostulantesComponent } from './solicitante/rutas/postulantes/postulantes.component';
import {DataTablesModule} from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    HomeComponent,
    BodyComponent,
    SidenavComponent,
    TrabajitosComponent,
    PerfilComponent,
    PostulantesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTablesModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
