import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './Auth/registro/registro.component';
import { LoginComponent } from './Auth/login/login.component';
import { BodyComponent } from './solicitante/sidenav-estructura/body/body.component';
import { SidenavComponent } from './solicitante/sidenav-estructura/sidenav/sidenav.component';
import { PerfilComponent } from './solicitante/rutas/perfil/perfil.component';
import { TrabajitosComponent } from './solicitante/rutas/trabajitos/trabajitos.component';
import { PostulantesComponent } from './solicitante/rutas/postulantes/postulantes.component';
import { DataTablesModule } from 'angular-datatables';
import { HttpClientModule } from '@angular/common/http';
import { AddTrabajoComponent } from './solicitante/acciones/add-trabajo/add-trabajo.component';
import { EditarTrabajoComponent } from './solicitante/acciones/editar-trabajo/editar-trabajo.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { VerTrabajoComponent } from './solicitante/acciones/ver-trabajo/ver-trabajo.component';
import { VerPostulanteComponent } from './solicitante/acciones/ver-postulante/ver-postulante.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    BodyComponent,
    SidenavComponent,
    TrabajitosComponent,
    PerfilComponent,
    PostulantesComponent,
    AddTrabajoComponent,
    EditarTrabajoComponent,
    VerTrabajoComponent,
    VerPostulanteComponent  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DataTablesModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
