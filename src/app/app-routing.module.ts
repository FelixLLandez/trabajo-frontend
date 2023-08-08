import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistroComponent } from './auth/registro/registro.component';
import { LoginComponent } from './auth/login/login.component';
import { LoginAdminComponent } from './pages/login-admin/login-admin.component';
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
import { TrabajitosComponent } from './solicitante/rutas/trabajitos/trabajitos.component';
import { PerfilComponent } from './solicitante/rutas/perfil/perfil.component';
import { PostulantesComponent } from './solicitante/rutas/postulantes/postulantes.component';
import { AddTrabajoComponent } from './solicitante/acciones/add-trabajo/add-trabajo.component';
import { EditarTrabajoComponent } from './solicitante/acciones/editar-trabajo/editar-trabajo.component';
import { AuthGuard_admin } from './guards/auth-admin.guard';
import { AuthGuard_solicitante } from './guards/auth-solicitante.guard';
import { PaginaErrorComponent } from './auth/pagina-error/pagina-error.component';
import { TrabajosArchivadosComponent } from './solicitante/rutas/trabajos-archivados/trabajos-archivados.component';

const routes: Routes = [
  //Rutas para el usuario con Rol de Solicitante
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'trabajitos', component: TrabajitosComponent, canActivate: [AuthGuard_solicitante] },
  { path: 'perfil', component: PerfilComponent, canActivate: [AuthGuard_solicitante] },
  { path: 'postulantes', component: PostulantesComponent, canActivate: [AuthGuard_solicitante] },
  { path: 'add-trabajo', component: AddTrabajoComponent, canActivate: [AuthGuard_solicitante] },
  { path: 'editar-trabajo/:id', component: EditarTrabajoComponent, canActivate: [AuthGuard_solicitante] },
  { path: 'trabajos-archivados', component: TrabajosArchivadosComponent, canActivate: [AuthGuard_solicitante] },


  //Ruta para el usuario con Rol de Administrador
  { path: 'login-administrador', component: LoginAdminComponent },
  { path: 'ver-administradores', component: AdministradoresRolAdminComponent },
  { path: 'add-administrador', component: AddAdminRolAdminComponent, canActivate: [AuthGuard_admin] },
  { path: 'edit-administrador/:id', component: EditAdminRolAdminComponent, canActivate: [AuthGuard_admin] },
  { path: 'ver-solicitantes', component: SolicitantesRolAdminComponent, canActivate: [AuthGuard_admin] },
  { path: 'add-solicitante', component: AddSolicitanteRolAdminComponent, canActivate: [AuthGuard_admin] },
  { path: 'edit-solicitante/:id', component: EditSolicitanteRolAdminComponent, canActivate: [AuthGuard_admin] },
  { path: 'ver-solicitante/:id', component: VerSolicitanteRolAdminComponent/*, canActivate: [AuthGuard_admin] */},
  { path: 'ver-postulantes', component: PostulantesRolAdminComponent, canActivate: [AuthGuard_admin] },
  { path: 'add-postulante', component: AddPostulantesRolAdminComponent, canActivate: [AuthGuard_admin] },
  { path: 'edit-postulante/:id', component: EditPostulanteRolAdminComponent, canActivate: [AuthGuard_admin] },
  { path: 'informacion-postulante/:id', component: InfoPostulantesRolAdminComponent, canActivate: [AuthGuard_admin] },
  { path: 'usuarios-archivados', component: ArchivadosRolAdminComponent, canActivate: [AuthGuard_admin] },
  { path: 'mi-perfil', component: PerfilRolAdminComponent, canActivate: [AuthGuard_admin] },
  { path: 'pagina-error', component: PaginaErrorComponent },
  {
    path: '**',
    redirectTo: '/pagina-error'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
