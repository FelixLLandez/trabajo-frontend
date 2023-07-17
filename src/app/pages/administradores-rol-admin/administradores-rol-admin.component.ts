import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-administradores-rol-admin',
  templateUrl: './administradores-rol-admin.component.html',
  styleUrls: ['./administradores-rol-admin.component.css']
})
export class AdministradoresRolAdminComponent {

  constructor(private router: Router){}

  agregar_admin(){
    this.router.navigateByUrl(`/add-administrador`);
  }

  modificar_admin(){
    this.router.navigateByUrl(`/edit-administrador`);
  }
}
