import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './Sidebar/body/body.component';
import { SidenavComponent } from './Sidebar/sidenav/sidenav.component';
import { AdministradoresRolAdminComponent } from './pages/administradores-rol-admin/administradores-rol-admin.component';
import { AddAdminRolAdminComponent } from './pages/add-admin-rol-admin/add-admin-rol-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditAdminRolAdminComponent } from './pages/edit-admin-rol-admin/edit-admin-rol-admin.component';
import { SolicitantesRolAdminComponent } from './pages/solicitantes-rol-admin/solicitantes-rol-admin.component';
import { DataTablesModule } from 'angular-datatables';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    AdministradoresRolAdminComponent,
    AddAdminRolAdminComponent,
    EditAdminRolAdminComponent,
    SolicitantesRolAdminComponent
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
