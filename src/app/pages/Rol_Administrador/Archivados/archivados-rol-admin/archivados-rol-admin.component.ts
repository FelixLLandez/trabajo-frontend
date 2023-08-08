import { Component, OnDestroy, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ServiceAdministradorService } from '../../../../services/administrador-service/service-administrador.service';
import { Router } from '@angular/router';


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
  constructor(private serviceAdministrador: ServiceAdministradorService, private router:Router) { }

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



}
