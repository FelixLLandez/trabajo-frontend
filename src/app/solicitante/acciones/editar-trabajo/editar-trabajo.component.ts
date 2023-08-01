import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-editar-trabajo',
  templateUrl: './editar-trabajo.component.html',
  styleUrls: ['./editar-trabajo.component.css']
})
export class EditarTrabajoComponent {

  constructor(private router: Router) { }

  editarTrabajo() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Se actualizará la información de este trabajo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Actualizado!',
          'El trabajo ha sido actualizado correctamente.',
          'success'
        );
        this.router.navigateByUrl('/trabajitos');
      }
    })
  }
}
