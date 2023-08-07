import { Component, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { VerPostulanteComponent } from '../../acciones/ver-postulante/ver-postulante.component';
import Swal from 'sweetalert2';
import { SolicitanteService } from 'src/app/services/solicitante-service/solicitante.service';

@Component({
  selector: 'app-postulantes',
  templateUrl: './postulantes.component.html',
  styleUrls: ['./postulantes.component.css']
})
export class PostulantesComponent implements OnInit {

  ngOnInit(): void {
    this.getUsuariosPostulantes()
  }

  modalRef: BsModalRef<any> | undefined;

  constructor(private modalService: BsModalService, private soliSer: SolicitanteService) {
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

  postulantes: [] = [];
  getUsuariosPostulantes() {
    const rolId = 3; // ID del rol de postulante
    this.soliSer.getUsuariosByRolId(rolId).subscribe(
      (data: any) => {
        this.postulantes = data; // obtenems los usuarios postulantes
        console.log(data);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

}
