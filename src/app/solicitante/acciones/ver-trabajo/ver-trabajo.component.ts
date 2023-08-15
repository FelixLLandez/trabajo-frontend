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
  estadosTrabajos: any[] = [];

  constructor(public modalRef: BsModalRef, private soliSer: SolicitanteService) { }

  ngOnInit(): void {
    this.getTrabajoDetails();
    this.getEstadosTrabajo();
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


  getEstadosTrabajo() {
    this.soliSer.getAllEstadosParaTrabajo().subscribe(
      (data: any) => {
        this.estadosTrabajos = data; // Almacenar los estados de trabajo
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  getEstadoTrabajoName(estadoTrabajoId: number): string {
    const estadoTrabajo = this.trabajo.estadoTrabajo; // Accede directamente al objeto estadoTrabajo    
    if (estadoTrabajo && estadoTrabajo.nombre) {
      return estadoTrabajo.nombre;
    } else {
      return 'Desconocido';
    }
  }  

}
