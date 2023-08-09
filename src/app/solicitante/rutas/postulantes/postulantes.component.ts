import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { VerPostulanteComponent } from '../../acciones/ver-postulante/ver-postulante.component';
import Swal from 'sweetalert2';
import { PostulanteService } from 'src/app/services/solicitante-service/postulante.service';
import { Router } from '@angular/router';

export interface User {
  id: number;
  nombre: string;
  apellidos: string;
  email: string;
  activo: boolean;
  sexo: string;
  telefono: string;
  edad: number;
  rol: {
    id: number;
  };
}

@Component({
  selector: 'app-postulantes',
  templateUrl: './postulantes.component.html',
  styleUrls: ['./postulantes.component.css']
})
export class PostulantesComponent implements OnInit, OnDestroy {

  modalRef: BsModalRef<any> | undefined;
  dtOptions: DataTables.Settings = {};

  ngOnInit(): void {
    this.dtOptions = {
      language: {
        url: "//cdn.datatables.net/plug-ins/1.13.5/i18n/es-ES.json"
      },
      pagingType: 'full_numbers',
      pageLength: 10,
      processing: true,
      lengthMenu: [5, 10, 25],
      responsive: true,
      destroy: true,
    };
    this.get_postulantes();
  }

  ngOnDestroy(): void {
    $('#datatablepostulantes').DataTable().destroy();
  }

  constructor(private modalService: BsModalService,
              private postulanteService: PostulanteService,
              private router: Router) {
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

  postulantes: User[] = [];
  get_postulantes() {
    this.postulanteService.getActivePostulantes().subscribe(
      (data: any) => {
        console.log(data);
        this.postulantes = data;
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