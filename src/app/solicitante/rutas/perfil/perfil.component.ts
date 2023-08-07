import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ServiceSolicitanteService } from 'src/app/services/service-solicitante.service';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: any = {};
  nombreyapellido: string = "[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+";
  edadynumero = '[0-9]+';
  correo_v = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  editMode: boolean = false;

  constructor(private soliSer: ServiceSolicitanteService, private fb: FormBuilder, private router: Router) { }

  camposIguales(control1: string, control2: string) {
    return (fg: AbstractControl): ValidationErrors | null => {
      const pass1 = fg.get(control1)?.value;
      const pass2 = fg.get(control2)?.value;

      if (pass1 !== pass2) {
        fg.get(control2)?.setErrors({
          noIguales: true
        });
        return {
          noIguales: true
        }
      }
      fg.get(control2)?.setErrors(null);
      return null;
    }
  };

  Edit_Mi_Info_Postulante: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
    apellidos: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
    sexo: ['', [Validators.required]],
    edad: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.min(1), Validators.max(100), Validators.pattern(this.edadynumero)]],
    telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.edadynumero)]],
    correo: ['', [Validators.required, Validators.pattern(this.correo_v)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [this.camposIguales('password', 'password2')]
  });

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.usuario = JSON.parse(userString);

      this.Edit_Mi_Info_Postulante.patchValue({
        nombre: this.usuario.nombre,
        apellidos: this.usuario.apellidos,
        sexo: this.usuario.sexo,
        edad: this.usuario.edad,
        telefono: this.usuario.telefono,
        correo: this.usuario.email,
        password: this.usuario.password
      });
    }
  }

   editarPerfil() {
    const formData = this.Edit_Mi_Info_Postulante.value;
    const dataToUpdate = {
      nombre: formData.nombre,
      apellidos: formData.apellidos,
      sexo: formData.sexo,
      edad: formData.edad,
      telefono: formData.telefono,
      correo: formData.correo,
      password: formData.password
      // No se incluye la contra por fallas en el back la contraseña en este objeto
    };
    this.soliSer.updatePerfil(this.usuario.id, dataToUpdate).subscribe(
      () => {
        this.usuario.nombre = formData.nombre;
        this.usuario.apellidos = formData.apellidos;
        this.usuario.sexo = formData.sexo;
        this.usuario.edad = formData.edad;
        this.usuario.telefono = formData.telefono;
        this.usuario.email = formData.correo;
        localStorage.setItem('user', JSON.stringify(this.usuario));// Actualizamos los datos del usuario en el almacenamiento local
        Swal.fire(
          'Perfil actualizado',
          'Tu información de perfil ha sido actualizada correctamente.',
          'success'
        );
        this.router.navigateByUrl('/trabajitos');
      },
      (error: any) => {
        console.error('Error al actualizar el perfil:', error);
        Swal.fire(
          'Error',
          'Ha ocurrido un error al actualizar el perfil.',
          'error'
        );
      }
    );
  } 

  /* editarPerfil() {
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
        this.soliSer.updatePerfil(this.usuario.id, this.usuario).subscribe(
          () => {
            Swal.fire(
              'Actualizado!',
              'El trabajo ha sido actualizado correctamente.',
              'success'
            );
            this.router.navigateByUrl('/trabajitos');
          },
          (error: any) => {
            console.error('Error al actualizar el perfil:', error);
            Swal.fire(
              'Error!',
              'Ha ocurrido un error al actualizar el perfil.',
              'error'
            );
          }
        );
      }
    });
  }
 */
  campoValido(field: string) {
    const control = this.Edit_Mi_Info_Postulante.get(field);
    return control?.touched && control.invalid;
  }

  getErrorMessage(field: string) {
    const control = this.Edit_Mi_Info_Postulante.get(field);
    if (control?.hasError('required')) {
      return 'Este campo es requerido';
    }
    if (control?.hasError('pattern')) {
      return 'Formato inválido';
    }
    if (control?.hasError('minlength')) {
      return 'Longitud mínima no cumplida';
    }
    if (control?.hasError('maxlength')) {
      return 'Longitud máxima excedida';
    }
    if (control?.hasError('noIguales')) {
      return 'Las contraseñas no coinciden';
    }
    if (control?.hasError('min') || control?.hasError('max')) {
      return 'Valor fuera de rango';
    }
    return '';
  }

  showEditMessage = false;

  openFileInput() {
    const fileInput = document.getElementById('fileInput');
    if (fileInput) {
      fileInput.click();
    }
  }

  onFileSelected(event: Event) {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      // Aquí puedes implementar la lógica para cargar y mostrar la nueva imagen
      // usando la File API y posiblemente una Vista Previa antes de subirla al servidor.
    }
  }

  visibilidadContrasennia(inputId: string) {
    const inputElement: HTMLInputElement = document.getElementById(inputId) as HTMLInputElement;
    inputElement.type = inputElement.type === 'password' ? 'text' : 'password';
  }

}
