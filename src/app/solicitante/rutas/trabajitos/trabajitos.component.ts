import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { VerTrabajoComponent } from '../../acciones/ver-trabajo/ver-trabajo.component';
import Swal from 'sweetalert2';
import { ServiceSolicitanteService } from 'src/app/services/service-solicitante.service';

@Component({
  selector: 'app-trabajitos',
  templateUrl: './trabajitos.component.html',
  styleUrls: ['./trabajitos.component.css']
})
export class TrabajitosComponent implements OnInit, OnDestroy {

  modalRef: BsModalRef<any> | undefined;
  trabajos: any[] = [];
  dtOptions: DataTables.Settings = {};

  constructor(
    private router: Router,
    private modalService: BsModalService,
    private soliService: ServiceSolicitanteService
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
      responsive: true
    };
    this.getTrabajos();
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

  ir_a_editar_trabajo() {
    this.router.navigateByUrl(`/editar-trabajo`);
  }

  eliminarTrabajo(id: number) {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Se desactivará este trabajo!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.soliService.eliminarTrabajo(id).subscribe(
          () => {
            Swal.fire(
              'Desactivado!',
              'El trabajo ha sido desactivado correctamente.',
              'success'
            );
            console.log('El trabajo se ha desactivado correctamente.');
            this.getTrabajos();
          },
          (error) => {
            console.error('Error al eliminar el trabajo:', error);
            Swal.fire(
              'Error!',
              'Ha ocurrido un error al desactivar el trabajo.',
              'error'
            );
          }
        );
      } else {
        console.log('El trabajo no se ha desactivado.');
      }
    });
  }

  getTrabajos() {
    const solicitanteId = this.soliService.getLoggedInUserId();
    this.soliService.getTrabajosBySolicitanteId(solicitanteId).subscribe(
      (data: any) => {
        console.log(data);
        this.trabajos = data.task;
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


  getEstadoInfo(estado: boolean): string {
    return estado ? "Ocupado" : "Disponible";
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
