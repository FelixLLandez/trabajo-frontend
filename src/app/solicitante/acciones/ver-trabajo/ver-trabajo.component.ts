import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { SolicitanteService } from 'src/app/services/solicitante-service/solicitante.service';

@Component({
  selector: 'app-ver-trabajo',
  templateUrl: './ver-trabajo.component.html',
  styleUrls: ['./ver-trabajo.component.css']
})
export class VerTrabajoComponent implements OnInit {
  trabajoId!: number;
  trabajo: any;
  
  constructor(public modalRef: BsModalRef, private soliSer: SolicitanteService) { }

  ngOnInit(): void {
    this.getTrabajoDetails();
  }

  closeModal() {
    this.modalRef.hide();
  }

  getTrabajoDetails() {
    if (this.trabajoId) {
      this.soliSer.getTrabajoByID(this.trabajoId).subscribe(
        (data: any) => {
          this.trabajo = data;
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }

  getEstadoInfo(estado: boolean): string {
    return estado ? "Disponible" : "Desactivado";
  }
}
