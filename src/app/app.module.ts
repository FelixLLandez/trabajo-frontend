import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './auth/registro/registro.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { BodyComponent } from './Sidebar/body/body.component';
import { SidenavComponent } from './Sidebar/sidenav/sidenav.component';
import { AdministradoresRolAdminComponent } from './pages/Rol_Administrador/Administrador/administradores-rol-admin/administradores-rol-admin.component';
import { AddAdminRolAdminComponent } from './pages/Rol_Administrador/Administrador/add-admin-rol-admin/add-admin-rol-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAdminRolAdminComponent } from './pages/Rol_Administrador/Administrador/edit-admin-rol-admin/edit-admin-rol-admin.component';
import { SolicitantesRolAdminComponent } from './pages/Rol_Administrador/Solicitantes/solicitantes-rol-admin/solicitantes-rol-admin.component';
import { DataTablesModule } from 'angular-datatables';
import { AddSolicitanteRolAdminComponent } from './pages/Rol_Administrador/Solicitantes/add-solicitante-rol-admin/add-solicitante-rol-admin.component';
import { EditSolicitanteRolAdminComponent } from './pages/Rol_Administrador/Solicitantes/edit-solicitante-rol-admin/edit-solicitante-rol-admin.component';
import { VerSolicitanteRolAdminComponent } from './pages/Rol_Administrador/Solicitantes/ver-solicitante-rol-admin/ver-solicitante-rol-admin.component';
import { PostulantesRolAdminComponent } from './pages/Rol_Administrador/Postulantes/postulantes-rol-admin/postulantes-rol-admin.component';
import { AddPostulantesRolAdminComponent } from './pages/Rol_Administrador/Postulantes/add-postulantes-rol-admin/add-postulantes-rol-admin.component';
import { EditPostulanteRolAdminComponent } from './pages/Rol_Administrador/Postulantes/edit-postulante-rol-admin/edit-postulante-rol-admin.component';
import { InfoPostulantesRolAdminComponent } from './pages/Rol_Administrador/Postulantes/info-postulantes-rol-admin/info-postulantes-rol-admin.component';
import { ArchivadosRolAdminComponent } from './pages/Rol_Administrador/Archivados/archivados-rol-admin/archivados-rol-admin.component';
import { PerfilRolAdminComponent } from './pages/Rol_Administrador/Perfil/perfil-rol-admin/perfil-rol-admin.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { PerfilComponent } from './solicitante/rutas/perfil/perfil.component';
import { TrabajitosComponent } from './solicitante/rutas/trabajitos/trabajitos.component';
import { PostulantesComponent } from './solicitante/rutas/postulantes/postulantes.component';
import { HttpClientModule } from '@angular/common/http';
import { AddTrabajoComponent } from './solicitante/acciones/add-trabajo/add-trabajo.component';
import { EditarTrabajoComponent } from './solicitante/acciones/editar-trabajo/editar-trabajo.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { VerTrabajoComponent } from './solicitante/acciones/ver-trabajo/ver-trabajo.component';
import { VerPostulanteComponent } from './solicitante/acciones/ver-postulante/ver-postulante.component';
import { PaginaErrorComponent } from './auth/pagina-error/pagina-error.component';


@NgModule({
  declarations: [
    AppComponent,
    RegistroComponent,
    LoginComponent,
    BodyComponent,
    SidenavComponent,
    AdministradoresRolAdminComponent,
    AddAdminRolAdminComponent,
    EditAdminRolAdminComponent,
    SolicitantesRolAdminComponent,
    AddSolicitanteRolAdminComponent,
    EditSolicitanteRolAdminComponent,
    VerSolicitanteRolAdminComponent,
    PostulantesRolAdminComponent,
    AddPostulantesRolAdminComponent,
    EditPostulanteRolAdminComponent,
    InfoPostulantesRolAdminComponent,
    ArchivadosRolAdminComponent,
    PerfilRolAdminComponent,
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
    VerPostulanteComponent,
    LoginAdminComponent,
    PaginaErrorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule,
    BrowserAnimationsModule,
    DataTablesModule,
    HttpClientModule,
    ModalModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
