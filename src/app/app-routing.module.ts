import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradoresRolAdminComponent } from './pages/administradores-rol-admin/administradores-rol-admin.component';
import { AddAdminRolAdminComponent } from './pages/add-admin-rol-admin/add-admin-rol-admin.component';

const routes: Routes = [
  {path: 'ver-administradores', component:AdministradoresRolAdminComponent},
  {path: 'add-administrador', component:AddAdminRolAdminComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
