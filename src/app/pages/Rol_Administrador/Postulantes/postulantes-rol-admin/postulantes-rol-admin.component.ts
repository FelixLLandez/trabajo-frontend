import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-postulantes-rol-admin',
  templateUrl: './postulantes-rol-admin.component.html',
  styleUrls: ['./postulantes-rol-admin.component.css']
})
export class PostulantesRolAdminComponent {

  postulantes = Array(100).fill(0);

  constructor(private router: Router) {
    setTimeout(() => {
      $('#tabla-postulantes').DataTable({
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

  agregar_postulante() {
    this.router.navigateByUrl('/add-postulante');
  }

  ver_postulante() {
    this.router.navigateByUrl('/informacion-postulante');
  }

  modificar_postulante() {
    this.router.navigateByUrl('/edit-postulante');
  }

  eliminar_postulante() {
    Swal.fire({
      title: 'Estás seguro de desactivar este postulante?',
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
