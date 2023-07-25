import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TrabajitosComponent } from './solicitante/rutas/trabajitos/trabajitos.component';
import { PerfilComponent } from './solicitante/rutas/perfil/perfil.component';
import { PostulantesComponent } from './solicitante/rutas/postulantes/postulantes.component';
import { LoginComponent } from './Auth/login/login.component';
import { RegistroComponent } from './Auth/registro/registro.component';
import { AddTrabajoComponent } from './solicitante/acciones/add-trabajo/add-trabajo.component';
import { EditarTrabajoComponent } from './solicitante/acciones/editar-trabajo/editar-trabajo.component';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'trabajitos', component: TrabajitosComponent },
  { path: 'perfil', component: PerfilComponent },
  { path: 'postulantes', component: PostulantesComponent },
  { path: 'add-trabajo', component: AddTrabajoComponent },
  { path: 'editar-trabajo', component: EditarTrabajoComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
