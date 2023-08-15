import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  constructor(private router:Router){}

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
