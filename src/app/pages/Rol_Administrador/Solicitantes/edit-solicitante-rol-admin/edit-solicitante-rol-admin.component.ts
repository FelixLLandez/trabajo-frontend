import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-edit-solicitante-rol-admin',
  templateUrl: './edit-solicitante-rol-admin.component.html',
  styleUrls: ['./edit-solicitante-rol-admin.component.css']
})
export class EditSolicitanteRolAdminComponent {

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

  Editsolicitante: FormGroup = this.fb.group({

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
    return this.Editsolicitante.controls?.['nombre']?.errors && this.Editsolicitante.controls?.['nombre']?.touched
  }

  apellidosvalido(){
    return this.Editsolicitante.controls?.['apellidos']?.errors && this.Editsolicitante.controls?.['apellidos']?.touched
  }

  sexovalido(){
    return this.Editsolicitante.controls?.['genero']?.touched && this.Editsolicitante.controls?.['genero'].errors
  }

  direccionvalida(){
    return this.Editsolicitante.controls?.['direccion']?.errors && this.Editsolicitante.controls?.['direccion']?.touched
  }

  municipiovalido(){
    return this.Editsolicitante.controls?.['municipio']?.errors && this.Editsolicitante.controls?.['municipio']?.touched
  }

  localidadvalida(){
    return this.Editsolicitante.controls?.['localidad']?.errors && this.Editsolicitante.controls?.['localidad']?.touched
  }

  edadvalida(){
    return this.Editsolicitante.controls?.['edad']?.errors && this.Editsolicitante.controls?.['edad']?.touched
  }

  telefonovalido(){
    return this.Editsolicitante.controls?.['telefono']?.errors && this.Editsolicitante.controls?.['telefono']?.touched
  }

  correovalido(){
    return this.Editsolicitante.controls?.['correo']?.errors && this.Editsolicitante.controls?.['correo']?.touched
  }


  contrasenavalida() {
    return this.Editsolicitante.controls?.['password']?.errors && this.Editsolicitante.controls?.['password']?.touched
  }

  contrasena2valida() {
    return this.Editsolicitante.controls?.['password2']?.errors && this.Editsolicitante.controls?.['password2']?.touched
  }

  fotovalida(){
    return this.Editsolicitante.controls?.['foto']?.touched && this.Editsolicitante.controls?.['foto'].errors
  }

  modificar() {
    console.log(this.Editsolicitante.value);

  }
}
