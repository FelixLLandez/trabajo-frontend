import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradoresRolAdminComponent } from './pages/administradores-rol-admin/administradores-rol-admin.component';
import { AddAdminRolAdminComponent } from './pages/add-admin-rol-admin/add-admin-rol-admin.component';
import { EditAdminRolAdminComponent } from './pages/edit-admin-rol-admin/edit-admin-rol-admin.component';
import { SolicitantesRolAdminComponent } from './pages/solicitantes-rol-admin/solicitantes-rol-admin.component';
import { AddSolicitanteRolAdminComponent } from './pages/add-solicitante-rol-admin/add-solicitante-rol-admin.component';
import { EditSolicitanteRolAdminComponent } from './pages/edit-solicitante-rol-admin/edit-solicitante-rol-admin.component';


const routes: Routes = [
  {path: 'ver-administradores', component:AdministradoresRolAdminComponent},
  {path: 'add-administrador', component:AddAdminRolAdminComponent},
  {path: 'edit-administrador', component:EditAdminRolAdminComponent},
  {path: 'ver-solicitantes', component:SolicitantesRolAdminComponent},
  {path: 'add-solicitante', component:AddSolicitanteRolAdminComponent},
  {path: 'edit-solicitante', component:EditSolicitanteRolAdminComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
