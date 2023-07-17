import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './solicitante/home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BodyComponent } from './solicitante/body/body.component';
import { SidenavComponent } from './solicitante/sidenav/sidenav.component';
import { TrabajitosComponent } from './solicitante/trabajitos/trabajitos.component';
import { PerfilComponent } from './solicitante/perfil/perfil.component';
import { PostulantesComponent } from './solicitante/postulantes/postulantes.component';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
