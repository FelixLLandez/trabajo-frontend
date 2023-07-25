import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
<<<<<<< HEAD
<<<<<<< HEAD
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
=======
import { AdministradoresRolAdminComponent } from './pages/Rol_Administrador/Administrador/administradores-rol-admin/administradores-rol-admin.component';
import { AddAdminRolAdminComponent } from './pages/Rol_Administrador/Administrador/add-admin-rol-admin/add-admin-rol-admin.component';
import { EditAdminRolAdminComponent } from './pages/Rol_Administrador/Administrador/edit-admin-rol-admin/edit-admin-rol-admin.component';
import { SolicitantesRolAdminComponent } from './pages/Rol_Administrador/Solicitantes/solicitantes-rol-admin/solicitantes-rol-admin.component';
import { AddSolicitanteRolAdminComponent } from './pages/Rol_Administrador/Solicitantes/add-solicitante-rol-admin/add-solicitante-rol-admin.component';
import { EditSolicitanteRolAdminComponent } from './pages/Rol_Administrador/Solicitantes/edit-solicitante-rol-admin/edit-solicitante-rol-admin.component';
import { VerSolicitanteRolAdminComponent } from './pages/Rol_Administrador/Solicitantes/ver-solicitante-rol-admin/ver-solicitante-rol-admin.component';
import { PostulantesRolAdminComponent } from './pages/Rol_Administrador/Postulantes/postulantes-rol-admin/postulantes-rol-admin.component';
import { AddPostulantesRolAdminComponent } from './pages/Rol_Administrador/Postulantes/add-postulantes-rol-admin/add-postulantes-rol-admin.component';
import { EditPostulanteRolAdminComponent } from './pages/Rol_Administrador/Postulantes/edit-postulante-rol-admin/edit-postulante-rol-admin.component';
import { InfoPostulantesRolAdminComponent } from './pages/Rol_Administrador/Postulantes/info-postulantes-rol-admin/info-postulantes-rol-admin.component';
import { ArchivadosRolAdminComponent } from './pages/Rol_Administrador/Archivados/archivados-rol-admin/archivados-rol-admin.component';
import { PerfilRolAdminComponent } from './pages/Rol_Administrador/Perfil/perfil-rol-admin/perfil-rol-admin.component';


const routes: Routes = [
  //Rutas del administrador
  {path: 'ver-administradores', component:AdministradoresRolAdminComponent},
  {path: 'add-administrador', component:AddAdminRolAdminComponent},
  {path: 'edit-administrador', component:EditAdminRolAdminComponent},

  //Rutas del solicitante
  {path: 'ver-solicitantes', component:SolicitantesRolAdminComponent},
  {path: 'add-solicitante', component:AddSolicitanteRolAdminComponent},
  {path: 'edit-solicitante', component:EditSolicitanteRolAdminComponent},
  {path: 'ver-solicitante', component:VerSolicitanteRolAdminComponent},

  //Rutas del postulante
  {path: 'ver-postulantes', component: PostulantesRolAdminComponent},
  {path: 'add-postulante', component:AddPostulantesRolAdminComponent},
  {path: 'edit-postulante', component:EditPostulanteRolAdminComponent},
  {path: 'informacion-postulante', component:InfoPostulantesRolAdminComponent},

  //Ruta de usaurios archivados
  {path: 'usuarios-archivados', component:ArchivadosRolAdminComponent},

  //Ruta de perfil del administrador
  {path: 'mi-perfil', component:PerfilRolAdminComponent}


>>>>>>> origin/Dashboard-admin
=======

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
>>>>>>> origin/dashboard_Solicitante
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
