import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { VerTrabajoComponent } from '../../acciones/ver-trabajo/ver-trabajo.component';
import { SolicitanteService } from 'src/app/services/solicitante-service/solicitante.service';

@Component({
  selector: 'app-trabajos-archivados',
  templateUrl: './trabajos-archivados.component.html',
  styleUrls: ['./trabajos-archivados.component.css']
})
export class TrabajosArchivadosComponent implements OnInit, OnDestroy {
  modalRef: BsModalRef<any> | undefined;
  trabajos: any[] = [];
  dtOptions: DataTables.Settings = {};

  constructor(
    private router: Router,
    private modalService: BsModalService,
    private soliService: SolicitanteService
  ) { }

  ngOnInit(): void {
    this.dtOptions = {
      language: {
        url: "//cdn.datatables.net/plug-ins/1.13.5/i18n/es-ES.json"
      },
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      lengthMenu: [5, 10, 25],
      responsive: true,
      destroy: true,
    };
    this.getTrabajosArchivados();
  }

  ngOnDestroy(): void {
    $('#datatabletrabajitos').DataTable().destroy();
  }

  openModal(trabajoId: number) {
    const initialState = {
      trabajoId: trabajoId
    };
    this.modalRef = this.modalService.show(VerTrabajoComponent, { initialState });
  }

  activarTrabajo(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Al realizar esta acción, se activará el trabajo.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.soliService.activar_trabajo(id).subscribe(
          (data: any) => {
            if (data && data.message === 'Trabajo activado correctamente') {
              Swal.fire({
                icon: 'success',
                title: 'Trabajo activado correctamente!',
              });
              this.getTrabajosArchivados();
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Ocurrió un problema al activar el trabajo!',
              });
            }
          },
          (error: any) => {
            Swal.fire({
              icon: 'error',
              title: 'Ocurrió un problema al activar el trabajo!',
            });
          }
        );
      }
    });
  }
  

  getTrabajosArchivados() {
    const solicitanteId = this.soliService.getLoggedInUserId();
    this.soliService.getTrabajosBySolicitanteId(solicitanteId).subscribe(
      (data: any) => {
        console.log(data);
        this.trabajos = data.task.filter((trabajo: any) => trabajo.estate === false);
        $('#datatabletrabajitosarchivados').DataTable().destroy();
        setTimeout(() => {
          $('#datatabletrabajitosarchivados').DataTable(this.dtOptions);
        }, 0);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getEstadoInfoDesactivados(estado: boolean): string {
    return estado ? "Desactivado" : "Desactivado";
  }

  salir() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Con esta acción saldrás del sistema!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        Swal.fire(
          'Hasta luego!',
          'Regresa pronto :).',
          'success'
        );
        this.router.navigateByUrl('/login');
        console.log('Saliendo...');
      } else {
        console.log('No hemos salido.');
      }
    });
  }
}
