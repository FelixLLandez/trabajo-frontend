import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-edit-postulante-rol-admin',
  templateUrl: './edit-postulante-rol-admin.component.html',
  styleUrls: ['./edit-postulante-rol-admin.component.css']
})
export class EditPostulanteRolAdminComponent {

  constructor(private fb: FormBuilder) { }

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

  nombreyapellido: string = "[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+";
  edadynumero= '[0-9]+';
  correo_v = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  Editpostulante: FormGroup = this.fb.group({

    nombre: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
    apellidos: ['', [Validators.required, Validators.pattern(this.nombreyapellido),  Validators.minLength(3), Validators.maxLength(45)]],
    genero: ['', [Validators.required]],
    direccion: ['', [Validators.required,Validators.minLength(5), Validators.maxLength(45)]],
    municipio: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
    localidad: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
    edad: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.min(1), Validators.max(100), Validators.pattern(this.edadynumero)]],
    telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.edadynumero)]],
    correo: ['', [Validators.required, Validators.pattern(this.correo_v)]],
    password: ['', [Validators.required,  Validators.minLength(8), Validators.maxLength(30)]],
    password2: ['', [Validators.required,]],
    foto: ['', [Validators.required,]]
  }, {
    validators: [this.camposIguales('password', 'password2')]
  }
  );

  nombrevalido(){
    return this.Editpostulante.controls?.['nombre']?.errors && this.Editpostulante.controls?.['nombre']?.touched
  }

  apellidosvalido(){
    return this.Editpostulante.controls?.['apellidos']?.errors && this.Editpostulante.controls?.['apellidos']?.touched
  }

  sexovalido(){
    return this.Editpostulante.controls?.['genero']?.touched && this.Editpostulante.controls?.['genero'].errors
  }

  direccionvalida(){
    return this.Editpostulante.controls?.['direccion']?.errors && this.Editpostulante.controls?.['direccion']?.touched
  }

  municipiovalido(){
    return this.Editpostulante.controls?.['municipio']?.errors && this.Editpostulante.controls?.['municipio']?.touched
  }

  localidadvalida(){
    return this.Editpostulante.controls?.['localidad']?.errors && this.Editpostulante.controls?.['localidad']?.touched
  }

  edadvalida(){
    return this.Editpostulante.controls?.['edad']?.errors && this.Editpostulante.controls?.['edad']?.touched
  }

  telefonovalido(){
    return this.Editpostulante.controls?.['telefono']?.errors && this.Editpostulante.controls?.['telefono']?.touched
  }

  correovalido(){
    return this.Editpostulante.controls?.['correo']?.errors && this.Editpostulante.controls?.['correo']?.touched
  }


  contrasenavalida() {
    return this.Editpostulante.controls?.['password']?.errors && this.Editpostulante.controls?.['password']?.touched
  }

  contrasena2valida() {
    return this.Editpostulante.controls?.['password2']?.errors && this.Editpostulante.controls?.['password2']?.touched
  }

  fotovalida(){
    return this.Editpostulante.controls?.['foto']?.touched && this.Editpostulante.controls?.['foto'].errors
  }

  modificar() {
    console.log(this.Editpostulante.value);

  }
}
