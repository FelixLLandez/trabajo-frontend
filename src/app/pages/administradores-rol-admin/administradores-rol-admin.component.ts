import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

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

  eliminar_admin(){
    Swal.fire({
      title: 'Estás seguro de desactivar este administrador?',
      text: "Podrás volver a habilitarlo si es necesario",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, desactivar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Desactivado exitosamente!',
        })
      }
    })
  }

}
