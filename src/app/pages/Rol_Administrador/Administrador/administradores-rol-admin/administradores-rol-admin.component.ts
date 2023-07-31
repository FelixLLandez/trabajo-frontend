import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServiceAdministradorService } from '../../../../services/service-administrador.service';

declare var $: any;

@Component({
  selector: 'app-administradores-rol-admin',
  templateUrl: './administradores-rol-admin.component.html',
  styleUrls: ['./administradores-rol-admin.component.css']
})
export class AdministradoresRolAdminComponent {

  all_administradores: any = [];

  constructor(private router: Router, private serviceAdmin: ServiceAdministradorService) {
    this.get_administradores();
  }

  agregar_admin() {
    this.router.navigateByUrl(`/add-administrador`);
  }

  modificar_admin(id: number) {
    this.router.navigateByUrl(`/edit-administrador/${id}`);
  }

  eliminar_admin(id: number) {
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

        this.serviceAdmin.desactivar_administrador(id).subscribe((data: any) => {
          if(data){

            Swal.fire({
              icon: 'success',
              title: 'Desactivado exitosamente!',
            });
            this.get_administradores();
          }else{
            Swal.fire({
              icon: 'error',
              title: 'Sucedio un problema al desactivar al usuario!',
            });
          }
        })

      }
    })
  }

  salir() {
    Swal.fire({
      title: '¿Estás seguro de cerrar sesón?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.removeItem('token');
        localStorage.removeItem('user');
        Swal.fire({
          icon: 'success',
          title: 'Cerrando sesión...',
          showConfirmButton: false,
          timer: 1500,
        });
  
        setTimeout(() => {
          this.router.navigateByUrl(`/login-administrador`);
        }, 1500);
      }
    })
  }

  get_administradores() {
    this.serviceAdmin.get_administradores().subscribe((data: any) => {
      this.all_administradores = data;
      setTimeout(() => {
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
      }, 1);
    })
  }

}
