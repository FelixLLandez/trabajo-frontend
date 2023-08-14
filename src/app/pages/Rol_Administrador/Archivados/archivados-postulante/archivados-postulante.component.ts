import { Component } from '@angular/core';
import { ServicePostulanteService } from '../../../../services/administrador-service/service-postulante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-archivados-postulante',
  templateUrl: './archivados-postulante.component.html',
  styleUrls: ['./archivados-postulante.component.css']
})
export class ArchivadosPostulanteComponent {

  postulantes_archivados:any=[];
  constructor(private servicePostulante:ServicePostulanteService){}

  ngOnInit(): void {
    this.get_admin_archivados();
  }

  ngOnDestroy(): void {
    $('#table-data-postulantes').DataTable().destroy();
  }

  get_admin_archivados() {
    this.servicePostulante.get_postulantes_archivados().subscribe((data: any) => {
      this.postulantes_archivados = data;
      console.log(this.postulantes_archivados);
      $('#table-data-postulantes').DataTable().destroy();
      setTimeout(() => {
        $('#table-data-postulantes').DataTable({
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

  activar_postulante(id:any) {
    Swal.fire({
      title: 'Estás seguro de activar este usuario?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.servicePostulante.activar_postulante(id).subscribe((data: any) => {
          if (data) {

            Swal.fire({
              icon: 'success',
              title: 'Usuario activado exitosamente!',
            });
            this.get_admin_archivados();
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
}
