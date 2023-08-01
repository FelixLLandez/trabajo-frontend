import { Component, OnInit } from '@angular/core';
import { BsModalRef } from 'ngx-bootstrap/modal';
import { ServiceSolicitanteService } from 'src/app/services/service-solicitante.service';

@Component({
  selector: 'app-ver-trabajo',
  templateUrl: './ver-trabajo.component.html',
  styleUrls: ['./ver-trabajo.component.css']
})
export class VerTrabajoComponent implements OnInit {
  trabajoId!: number; 
  trabajo: any; 

  constructor(public modalRef: BsModalRef, private soliSer: ServiceSolicitanteService) { }

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
          console.log(data);
          this.trabajo = data; 
        },
        (error: any) => {
          console.error(error);
        }
      );
    }
  }
}
