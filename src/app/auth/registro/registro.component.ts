import { Component } from '@angular/core';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent {

  constructor(){}

  registrarse(){
    Swal.fire({
      icon: 'error',
      title: 'Error',
      text: 'Credenciales inválidas!'
    })
    /*Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bienvenido...',
      showConfirmButton: false,
      timer: 1500,
    })*/
  }

}
