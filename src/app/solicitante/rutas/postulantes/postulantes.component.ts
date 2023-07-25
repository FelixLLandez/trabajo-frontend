import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { VerPostulanteComponent } from '../../acciones/ver-postulante/ver-postulante.component';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-postulantes',
  templateUrl: './postulantes.component.html',
  styleUrls: ['./postulantes.component.css']
})
export class PostulantesComponent {

  modalRef: BsModalRef<any> | undefined;

  constructor(private modalService: BsModalService) {
    setTimeout(() => {
      $('#datatablepostulantes').DataTable({
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

  openModal() {
    const initialState = {};
    this.modalRef = this.modalService.show(VerPostulanteComponent, { initialState });
  }

  aceptarPostulante() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Se aceptará un nuevo postulante!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Aceptado!',
          'El postulante ha sido aceptado correctamente.',
          'success'
        )
      }
    })
  }

  rechazarPostulante() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Se rechazará a un nuevo postulante!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Rechazado!',
          'El postulante ha sido rechazado correctamente.',
          'success'
        )
      }
    })
  }

}
