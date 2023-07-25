import { Component } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-ver-postulante',
  templateUrl: './ver-postulante.component.html',
  styleUrls: ['./ver-postulante.component.css']
})
export class VerPostulanteComponent {

  constructor(public modalRef: BsModalRef){}
    // Método para cerrar el modal
    closeModal() {
      this.modalRef.hide();
    }
}
