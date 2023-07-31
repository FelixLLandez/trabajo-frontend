import { Component } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ServiceAdministradorService } from '../../services/service-administrador.service';
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
    this.serviceAdmin.login_administrador(this.Formulario_login.value).subscribe((datos: any) => {
      if (datos) {
        this.serviceAdmin.guardarToken_admistrador(datos.token);
        this.serviceAdmin.guardaruser_administrador(datos);
        Swal.fire({
          icon: 'success',
          title: 'Iniciando sesión...',
          showConfirmButton: false,
          timer: 1500,
        });
        setTimeout(() => {
          this.router.navigateByUrl(`/ver-administradores`);
        }, 1500);
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Correo y/o contraseñas incorrectas',
          showConfirmButton: true,
        });
        console.log('error');
      }
    })
  }
}
