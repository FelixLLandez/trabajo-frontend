import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';
import Swal from 'sweetalert2';
import { SolicitanteService } from 'src/app/services/solicitante-service/solicitante.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  trabajos: string[] = [];
  searchText: string = '';

  constructor(
    private soliservi: SolicitanteService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.getTrabajos();
  }

  getTrabajos(): void {
    this.soliservi.getTrabajosDisponibles()
      .subscribe(
        trabajos => {
          this.trabajos = trabajos;
          console.log('Trabajos obtenidos:', trabajos);
        },
        error => console.error('Error al obtener trabajos:', error)
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
