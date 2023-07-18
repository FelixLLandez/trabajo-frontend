import { Component } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-solicitantes-rol-admin',
  templateUrl: './solicitantes-rol-admin.component.html',
  styleUrls: ['./solicitantes-rol-admin.component.css']
})
export class SolicitantesRolAdminComponent {

  constructor(private router: Router){
    setTimeout(() => {
      $('#datatableexample').DataTable({
        language: {
          url: "//cdn.datatables.net/plug-ins/1.13.5/i18n/es-ES.json"
        },
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true,
        lengthMenu: [5, 10, 25],
        responsive: true
  
      });
    }, 1);
  }

  agregar_solicitante(){
    this.router.navigateByUrl(`/add-solicitante`);
  }

  modificar_solicitante(){
    this.router.navigateByUrl(`/edit-solicitante`);
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
