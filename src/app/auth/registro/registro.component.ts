import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from 'src/app/services/authSolicitante/auth-solicitante.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  ngOnInit(): void {
    this.getRoles();
  }

  registroForm: FormGroup;
  selectedRol: string = '';

  constructor(
    private authS: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(3)]],
      apellidos: ['', [Validators.required, Validators.minLength(3)]],
      sexo: ['', [Validators.required, Validators.minLength(3)]],
      edad: ['', [Validators.required, Validators.min(1), Validators.max(100)]],
      telefono: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      password: ['', Validators.required],
      rol: ['', Validators.required]
    });
  }

  registrarse() {
    if (this.registroForm.valid) {
      if (!this.selectedRol) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Por favor, seleccione un rol válido.'
        });
        return;
      }

      // Obtener los valores del formulario
      const formData = this.registroForm.value;

      // Llamar al servicio AuthService para registrar el usuario con ambos argumentos
      this.authS.registro(formData, this.selectedRol).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/login']);
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: '¡Usuario registrado correctamente!'
          });
        },
        (error) => {
          console.log(error);
          let errorMessage = 'Ocurrió un error al registrar el usuario. Por favor, inténtalo de nuevo más tarde.';
          if (error.status === 409) {
            errorMessage = 'El correo electrónico ya está registrado. Por favor, utiliza otro correo.';
          } else if (error.status === 500) {
            errorMessage = 'Error interno del servidor. Por favor, contacta al administrador.';
          }
          Swal.fire({
            icon: 'error',
            title: 'Error',
            text: errorMessage
          });
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos correctamente.'
      });
    }
  } //FIN FUNCION DE REGISTRO  



  roles: any[] = [];
  getRoles() {
    this.authS.getRoles().subscribe(
      (data: any) => {
        console.log(data);
        this.roles = data; // Asignar los datos a la variable roles
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  rolSeleccionado(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedRol = target.value; // Guardar el ID del rol seleccionado en la variable selectedRol
  }

  isNombreInvalid() {
    const campoNombre = this.registroForm.get('nombre');
    return campoNombre?.invalid && campoNombre?.touched;
  }

  isApellidosInvalid() {
    const campoApellidos = this.registroForm.get('apellidos');
    return campoApellidos?.invalid && campoApellidos?.touched;
  }

  isSexoInvalid() {
    const campoSexo = this.registroForm.get('sexo');
    return campoSexo?.invalid && campoSexo?.touched;
  }

  isEdadInvalid() {
    const campoEdad = this.registroForm.get('edad');
    return campoEdad?.invalid && campoEdad?.touched;
  }

  isTelefonoInvalid() {
    const campoTelefono = this.registroForm.get('telefono');
    return campoTelefono?.invalid && campoTelefono?.touched;
  }

  isEmailInvalid() {
    const campoEmail = this.registroForm.get('email');
    return campoEmail?.invalid && campoEmail?.touched;
  }

  isPasswordInvalid() {
    const campoPassword = this.registroForm.get('password');
    return campoPassword?.invalid && campoPassword?.touched;
  }

  isRolInvalid() {
    const campoRol = this.registroForm.get('rol');
    return campoRol?.invalid && campoRol?.touched;
  }
}
