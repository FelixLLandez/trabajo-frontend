import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-trabajo',
  templateUrl: './add-trabajo.component.html',
  styleUrls: ['./add-trabajo.component.css']
})
export class AddTrabajoComponent {

  constructor(private router: Router) { }

  agregarTrabajo() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Se agregará un nuevo trabajo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Agregado!',
          'El trabajo ha sido agregado correctamente.',
          'success'
        )
      }
    })
  }

}
