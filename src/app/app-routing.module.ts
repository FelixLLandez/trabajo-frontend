import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './auth/registro/registro.component';

const routes: Routes = [
  //{ path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a '/login' cuando la URL raíz está vacía
  { path: 'registro', component: RegistroComponent }, //registro de solicitante y postulante
  //{ path: 'login', component: LoginComponent }, //login de solicitante y postulante
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
