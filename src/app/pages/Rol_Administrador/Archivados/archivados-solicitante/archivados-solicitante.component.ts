import { Component } from '@angular/core';
import { ServiceSolicitanteService } from '../../../../services/administrador-service/service-solicitante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-archivados-solicitante',
  templateUrl: './archivados-solicitante.component.html',
  styleUrls: ['./archivados-solicitante.component.css']
})
export class ArchivadosSolicitanteComponent {

  solicitantes_archivados:any=[];

  constructor(private serviceSolicitante:ServiceSolicitanteService){}

  ngOnInit(): void {
    this.get_solic_archivados();
  }

  ngOnDestroy(): void {
    $('#table-data-solicitantes').DataTable().destroy();
  }

  get_solic_archivados() {
    this.serviceSolicitante.get_solicitantes_archivados().subscribe((data: any) => {
      this.solicitantes_archivados = data;
      $('#table-data-solicitantes').DataTable().destroy();
      setTimeout(() => {
        $('#table-data-solicitantes').DataTable({
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

  activar_solicitante(id:any) {
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
        this.serviceSolicitante.activar_solicitante(id).subscribe((data: any) => {
          if (data) {

            Swal.fire({
              icon: 'success',
              title: 'Usuario activado exitosamente!',
            });
            this.get_solic_archivados();
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
