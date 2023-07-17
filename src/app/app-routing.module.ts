import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './solicitante/home/home.component';
import { TrabajitosComponent } from './solicitante/trabajitos/trabajitos.component';
import { PerfilComponent } from './solicitante/perfil/perfil.component';
import { PostulantesComponent } from './solicitante/postulantes/postulantes.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a '/login' cuando la URL raíz está vacía
  { path: 'registro', component: RegistroComponent }, //registro de solicitante y postulante
  { path: 'login', component: LoginComponent }, //login de solicitante y postulante
  { path: 'dashboard', component: HomeComponent }, //home de solicitante con dashboard que muestra directamente la tabla de los trabajitos
  { path: 'trabajitos', component: TrabajitosComponent }, //trabajitos del solicitante, se ocupa esta ruta solo cuando se desea volver a esa sección
  { path: 'perfil', component: PerfilComponent }, //trabajitos del solicitante, se ocupa esta ruta solo cuando se desea volver a esa sección
  { path: 'postulantes', component: PostulantesComponent }, //trabajitos del solicitante, se ocupa esta ruta solo cuando se desea volver a esa sección
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
