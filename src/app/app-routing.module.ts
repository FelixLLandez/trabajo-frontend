import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
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


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
