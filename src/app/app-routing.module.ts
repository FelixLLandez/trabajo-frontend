import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './solicitante/rutas/home/home.component';
import { TrabajitosComponent } from './solicitante/rutas/trabajitos/trabajitos.component';
import { PerfilComponent } from './solicitante/rutas/perfil/perfil.component';
import { PostulantesComponent } from './solicitante/rutas/postulantes/postulantes.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegistroComponent } from './Auth/registro/registro.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'dashboard', component: HomeComponent },
  { path: 'trabajitos', component: TrabajitosComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'postulantes', component: PostulantesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
