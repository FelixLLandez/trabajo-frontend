import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './Sidebar/body/body.component';
import { SidenavComponent } from './Sidebar/sidenav/sidenav.component';
import { AdministradoresRolAdminComponent } from './pages/administradores-rol-admin/administradores-rol-admin.component';
import { AddAdminRolAdminComponent } from './pages/add-admin-rol-admin/add-admin-rol-admin.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    AdministradoresRolAdminComponent,
    AddAdminRolAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
