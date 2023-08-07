import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { ServicePostulanteService } from '../../../../services/administrador-service/service-postulante.service';

@Component({
  selector: 'app-postulantes-rol-admin',
  templateUrl: './postulantes-rol-admin.component.html',
  styleUrls: ['./postulantes-rol-admin.component.css']
})
export class PostulantesRolAdminComponent implements OnInit{

  all_postulantes:any=[]

  constructor(private router: Router, private servicePostulante: ServicePostulanteService) {}

  ngOnInit(): void {
    this.get_postulantes();
  }

  ngOnDestroy(): void {
    $('#tabla-postulantes').DataTable().destroy();
  }

  agregar_postulante() {
    this.router.navigateByUrl('/add-postulante');
  }

  ver_postulante(id:any) {
    this.router.navigateByUrl(`/informacion-postulante/${id}`);
  }

  modificar_postulante(id:any) {
    this.router.navigateByUrl(`/edit-postulante/${id}`);
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

  get_postulantes() {
    this.servicePostulante.get_postulantes().subscribe((data: any) => {
      this.all_postulantes = data;
      console.log(this.all_postulantes);

      $('#tabla-postulantes').DataTable().destroy();
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
    })
  }
}
