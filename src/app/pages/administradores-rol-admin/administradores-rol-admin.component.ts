import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-administradores-rol-admin',
  templateUrl: './administradores-rol-admin.component.html',
  styleUrls: ['./administradores-rol-admin.component.css']
})
export class AdministradoresRolAdminComponent {

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
