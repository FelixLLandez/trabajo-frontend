import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) { }

  login() {
/*     Swal.fire({
      icon: 'error',
      title: 'Oops...',
      text: 'Something went wrong!'
    }),  */
    Swal.fire({
      position: 'center',
      icon: 'success',
      title: 'Bienvenido...',
      showConfirmButton: false,
      timer: 1500,
    })
    //this.router.navigateByUrl('/trabajitos');
  }
}
