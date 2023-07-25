import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent {

  constructor(){}

  editarPerfil(){
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Se actualizará la información del perfil!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire(
          'Actualizado!',
          'La información del perfil ha sido actualizado correctamente.',
          'success'
        )
      }
    })
  }

}
