import { Component } from '@angular/core';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-archivados-rol-admin',
  templateUrl: './archivados-rol-admin.component.html',
  styleUrls: ['./archivados-rol-admin.component.css']
})
export class ArchivadosRolAdminComponent {
  administradores = Array(10).fill(0);


  constructor() {
    setTimeout(() => {
      $('#tabla-administradores').DataTable({
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

  

  Tabla_Administradores = true;
  Tabla_Solicitantes = false;
  Tabla_Postulantes = false;

  mostrarTabla(tabla: number) {
    this.Tabla_Administradores = tabla === 1;
    this.Tabla_Solicitantes = tabla === 2;
    this.Tabla_Postulantes = tabla === 3;
  }

  activar_administrador(){
    Swal.fire({
      title: 'Estás seguro de activar este administrador?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, activar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Activado exitosamente!',
        })
      }
    })
  }

  activar_solicitante(){
    Swal.fire({
      title: 'Estás seguro de activar este solicitante?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, activar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Activado exitosamente!',
        })
      }
    })
  }

  activar_postulante(){
    Swal.fire({
      title: 'Estás seguro de activar este postulante?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, activar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          icon: 'success',
          title: 'Activado exitosamente!',
        })
      }
    })
  }

}
