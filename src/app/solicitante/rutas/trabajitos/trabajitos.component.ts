import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { VerTrabajoComponent } from '../../acciones/ver-trabajo/ver-trabajo.component';
import Swal from 'sweetalert2';
import { SolicitanteService } from 'src/app/services/solicitante-service/solicitante.service';

@Component({
  selector: 'app-trabajitos',
  templateUrl: './trabajitos.component.html',
  styleUrls: ['./trabajitos.component.css']
})
export class TrabajitosComponent implements OnInit, OnDestroy {

  modalRef: BsModalRef<any> | undefined;
  trabajos: any[] = [];
  dtOptions: DataTables.Settings = {};
  estadosTrabajo: any[] = [];

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
    this.getTrabajos();
    this.getEstadosTrabajo(); // Cargar los estados de trabajo
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

  ir_a_add_trabajo() {
    this.router.navigateByUrl(`/add-trabajo`);
  }

  ir_a_editar_trabajo(id: number) {
    this.router.navigateByUrl(`/editar-trabajo/${id}`);
  }

  eliminar_trabajo(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Al realizar esta acción, se desactivará el trabajo.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.soliService.desactivar_trabajo(id).subscribe(
          (data: any) => {
            if (data && data.message === 'Trabajo desactivado correctamente') {
              Swal.fire({
                icon: 'success',
                title: 'Trabajo desactivado correctamente!',
              });
              this.getTrabajos();
            } else {
              Swal.fire({
                icon: 'error',
                title: 'Ocurrió un problema al desactivar el trabajo!',
              });
            }
          },
          (error: any) => {
            Swal.fire({
              icon: 'error',
              title: 'Ocurrió un problema al desactivar el trabajo!',
            });
          }
        );
      }
    });
  }

  getTrabajos() {
    const solicitanteId = this.soliService.getLoggedInUserId();
    this.soliService.getTrabajosBySolicitanteId(solicitanteId).subscribe(
      (data: any) => {
        console.log(data);
        this.trabajos = data.task.filter(
          (trabajo: any) => trabajo.estate === true
        );
        $('#datatabletrabajitos').DataTable().destroy();
        setTimeout(() => {
          $('#datatabletrabajitos').DataTable(this.dtOptions);
        }, 0);
      },
      (error: any) => {
        console.error(error);
      }
    );
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

  getEstadosTrabajo() {
    this.soliService.getAllEstadosParaTrabajo().subscribe(
      (data: any) => {
        this.estadosTrabajo = data; // Almacenar los estados de trabajo
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getEstadoTrabajoName(estadoTrabajoId: number): string {
    const estadoTrabajo = this.estadosTrabajo.find(estado => estado.id === estadoTrabajoId);
    return estadoTrabajo ? estadoTrabajo.nombre : 'Desconocido';
  }
  

}
