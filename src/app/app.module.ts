import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
<<<<<<< HEAD
import { RegistroComponent } from './auth/registro/registro.component';
import { LoginComponent } from './auth/login/login.component';
=======
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> origin/Login-admin

@NgModule({
  declarations: [
    AppComponent,
<<<<<<< HEAD
    RegistroComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
=======
    LoginAdminComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
>>>>>>> origin/Login-admin
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
