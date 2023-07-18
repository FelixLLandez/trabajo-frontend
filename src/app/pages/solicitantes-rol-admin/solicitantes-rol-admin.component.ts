import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-solicitantes-rol-admin',
  templateUrl: './solicitantes-rol-admin.component.html',
  styleUrls: ['./solicitantes-rol-admin.component.css']
})
export class SolicitantesRolAdminComponent {

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
