import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-ver-trabajo',
  templateUrl: './ver-trabajo.component.html',
  styleUrls: ['./ver-trabajo.component.css']
})
export class VerTrabajoComponent implements OnInit{

  constructor(public modalRef: BsModalRef) {}

  ngOnInit(): void {}

  // Método para cerrar el modal
  closeModal() {
    this.modalRef.hide();
  }
}
