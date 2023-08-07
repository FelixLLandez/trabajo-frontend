import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolicitanteService } from 'src/app/services/solicitante-service/solicitante.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  constructor(private fb: FormBuilder, private serviceSolicitante: SolicitanteService, private router: Router) { }

  Formulario_login: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  });

  login() {
    console.log(this.Formulario_login.value);
    this.serviceSolicitante.login_solicitante(this.Formulario_login.value).subscribe(
      (datos: any) => {
        if (datos) {
          this.serviceSolicitante.guardarToken_solicitante(datos.token);
          this.serviceSolicitante.guardaruser_solicitante(datos);
          Swal.fire(
            'Hola!',
            'Bienvenido...',
            'success'
          );
          this.router.navigateByUrl('/trabajitos');
        } else {
          console.log("Error");
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: 'Por favor, verifica la información.'
          });
        }
      },
      (error: any) => {
        console.error(error);
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Ocurrió un error en el inicio de sesión. Por favor, intenta nuevamente más tarde.'
        });
      }
    );
  }
}