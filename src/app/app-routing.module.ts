import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
import { RegistroComponent } from './auth/registro/registro.component';
import { LoginComponent } from './auth/login/login.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a '/login' cuando la URL raíz está vacía
  { path: 'registro', component: RegistroComponent }, //registro de solicitante y postulante
  { path: 'login', component: LoginComponent }, //login de solicitante y postulante
=======
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';

const routes: Routes = [
  {path: 'login-administrador', component:LoginAdminComponent},
>>>>>>> origin/Login-admin
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
