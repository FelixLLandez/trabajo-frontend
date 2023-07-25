import { Component } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { VerPostulanteComponent } from '../../acciones/ver-postulante/ver-postulante.component';

@Component({
  selector: 'app-postulantes',
  templateUrl: './postulantes.component.html',
  styleUrls: ['./postulantes.component.css']
})
export class PostulantesComponent {

    // Inicializamos modalRef con undefined
    modalRef: BsModalRef<any> | undefined;

  constructor(private modalService: BsModalService){
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

}
