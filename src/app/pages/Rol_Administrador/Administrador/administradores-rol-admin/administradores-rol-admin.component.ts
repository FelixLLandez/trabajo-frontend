import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

declare var $: any;

@Component({
  selector: 'app-administradores-rol-admin',
  templateUrl: './administradores-rol-admin.component.html',
  styleUrls: ['./administradores-rol-admin.component.css']
})
export class AdministradoresRolAdminComponent implements OnInit, OnDestroy {

  constructor(private router: Router){
   
  }

  ngOnInit() {
    setTimeout(() => {
      if (!$.fn.DataTable.isDataTable('#table-data-administradores')) {
        $('#table-data-administradores').DataTable({
          language: {
            url: "//cdn.datatables.net/plug-ins/1.13.5/i18n/es-ES.json"
          },
          pagingType: 'full_numbers',
          pageLength: 10,
          processing: true,
          lengthMenu: [5, 10, 25],
          responsive: true
        });
      }
    }, 1);
  }

  ngOnDestroy() {
    // Destruir la DataTable al salir del componente
    if ($.fn.DataTable.isDataTable('#table-data-administradores')) {
      $('#table-data-administradores').DataTable().destroy();
    }
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

  salir(){
    Swal.fire({
      title: 'Estás seguro cerrar sesón?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Salir',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        this.router.navigateByUrl(`/login-administrador`)
      }
    })
  }

}
