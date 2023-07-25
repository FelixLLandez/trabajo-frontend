import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import { VerTrabajoComponent } from '../../acciones/ver-trabajo/ver-trabajo.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-trabajitos',
  templateUrl: './trabajitos.component.html',
  styleUrls: ['./trabajitos.component.css']
})
export class TrabajitosComponent {

  // Inicializamos modalRef con undefined
  modalRef: BsModalRef<any> | undefined;

  constructor(private router: Router, private modalService: BsModalService) {
    setTimeout(() => {
      $('#datatabletrabajitos').DataTable({
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
  } //cierre del constructor

  openModal() {
    const initialState = {};
    this.modalRef = this.modalService.show(VerTrabajoComponent, { initialState });
  }

  ir_a_add_trabajo() {
    this.router.navigateByUrl(`/add-trabajo`);
  }

  ir_a_editar_trabajo() {
    this.router.navigateByUrl(`/editar-trabajo`);
  }

  eliminarTrabajo() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "El trabajo permanecerá archivado!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Eliminado!',
          'El trabajo ha sido inhabilitado correctamente.',
          'success',
        )
      }
    })
  }
}
