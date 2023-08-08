import { Component, OnDestroy, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ServiceAdministradorService } from '../../../../services/administrador-service/service-administrador.service';


@Component({
  selector: 'app-archivados-rol-admin',
  templateUrl: './archivados-rol-admin.component.html',
  styleUrls: ['./archivados-rol-admin.component.css'],
  
})
export class ArchivadosRolAdminComponent {

  pestanaSeleccionada: string = 'administradores';

  seleccionarPestana(pestana: string) {
    this.pestanaSeleccionada = pestana;
  }
  constructor(private serviceAdministrador: ServiceAdministradorService) { }

  activar_administrador() {
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

  activar_solicitante() {
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

  activar_postulante() {
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
