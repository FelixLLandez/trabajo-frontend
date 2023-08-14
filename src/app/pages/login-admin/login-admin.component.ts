import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ServiceAdministradorService } from '../../services/administrador-service/service-administrador.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login-admin',
  templateUrl: './login-admin.component.html',
  styleUrls: ['./login-admin.component.css']
})
export class LoginAdminComponent {

  constructor(private fb: FormBuilder, private serviceAdmin: ServiceAdministradorService, private router: Router) { }

  Formulario_login: FormGroup = this.fb.group({
    email: ['', [Validators.required]],
    password: ['', [Validators.required]],
  }
  );

  login() {
    this.serviceAdmin.login_administrador(this.Formulario_login.value).subscribe((request:any) => {
      this.serviceAdmin.guardarToken_admistrador(request.token);
      this.serviceAdmin.guardaruser_administrador(request);
      Swal.fire({
        icon: 'success',
        title: 'Bienvenido al sistema',
        showConfirmButton: false,
        timer: 1500,
      });
      setTimeout(() => {
        this.router.navigateByUrl(`/ver-administradores`);
      }, 1500);
    }, (error) => {
      Swal.fire({
        icon: 'error',
        title: 'Correo y/o contraseñas incorrectas',
        text: 'Por favor, verifica tus credenciales e intenta de nuevo.',
        showConfirmButton: true,
        confirmButtonText:'Aceptar',
      });
    })
  }
}
