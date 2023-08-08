import { Component, OnInit } from '@angular/core';
import { ServiceAdministradorService } from '../../../../services/administrador-service/service-administrador.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-archivados-administrador',
  templateUrl: './archivados-administrador.component.html',
  styleUrls: ['./archivados-administrador.component.css']
})
export class ArchivadosAdministradorComponent implements OnInit {

  administradores_archivados: any = []

  constructor(private serviceAdministrador: ServiceAdministradorService) { }

  ngOnInit(): void {
    this.get_admin_archivados();
  }

  ngOnDestroy(): void {
    $('#table-data-administradores').DataTable().destroy();
  }

  get_admin_archivados() {
    this.serviceAdministrador.get_administradores_archivados().subscribe((data: any) => {
      this.administradores_archivados = data;
      console.log(this.administradores_archivados);
      $('#table-data-administradores').DataTable().destroy();
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

  activar_administrador(id:any) {
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
        this.serviceAdministrador.activar_administrador(id).subscribe((data: any) => {
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
