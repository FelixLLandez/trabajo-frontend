import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
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

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    AdministradoresRolAdminComponent,
    AddAdminRolAdminComponent,
    EditAdminRolAdminComponent,
    SolicitantesRolAdminComponent,
    AddSolicitanteRolAdminComponent,
    EditSolicitanteRolAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    DataTablesModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
