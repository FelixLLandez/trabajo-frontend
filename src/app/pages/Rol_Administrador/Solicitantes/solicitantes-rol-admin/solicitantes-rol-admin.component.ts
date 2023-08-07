import { Component, OnInit, OnDestroy } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ServiceSolicitanteService } from '../../../../services/service-solicitante.service';


@Component({
  selector: 'app-solicitantes-rol-admin',
  templateUrl: './solicitantes-rol-admin.component.html',
  styleUrls: ['./solicitantes-rol-admin.component.css']
})
export class SolicitantesRolAdminComponent implements OnInit, OnDestroy {

  all_solicitantes: any = [];

  constructor(private router: Router, private serviceSolicitante: ServiceSolicitanteService) {
  }

  ngOnInit(): void {
    this.get_solicitantes();
  }

  ngOnDestroy(): void {
    $('#tabla-solicitantes').DataTable().destroy();
  }

  agregar_solicitante() {
    this.router.navigateByUrl(`/add-solicitante`);
  }

  modificar_solicitante(id: number) {
    this.router.navigateByUrl(`/edit-solicitante/${id}`);
  }

  ver_solicitante(id:any) {
    this.router.navigateByUrl(`/ver-solicitante/${id}`)
  }

  eliminar_solicitante(id:any) {
    Swal.fire({
      title: 'Estás seguro de desactivar este solicitante?',
      text: "Podrás volver a habilitarlo si es necesario",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, desactivar!',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.serviceSolicitante.desactivar_administrador(id).subscribe((data: any) => {
          if (data) {

            Swal.fire({
              icon: 'success',
              title: 'Usuario desactivado exitosamente!',
            });
            this.get_solicitantes();
          } else {
            Swal.fire({
              icon: 'error',
              title: 'Sucedio un problema al desactivar al usuario!',
            });
          }
        })
      }
    })
  }

  get_solicitantes() {
    this.serviceSolicitante.get_solicitantes().subscribe((data: any) => {
      this.all_solicitantes = data;
      console.log(this.all_solicitantes);

      $('#tabla-solicitantes').DataTable().destroy();
      setTimeout(() => {
        $('#tabla-solicitantes').DataTable({
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
