import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-add-solicitante-rol-admin',
  templateUrl: './add-solicitante-rol-admin.component.html',
  styleUrls: ['./add-solicitante-rol-admin.component.css']
})
export class AddSolicitanteRolAdminComponent {

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

  Addsolicitante: FormGroup = this.fb.group({

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
    return this.Addsolicitante.controls?.['nombre']?.errors && this.Addsolicitante.controls?.['nombre']?.touched
  }

  apellidosvalido(){
    return this.Addsolicitante.controls?.['apellidos']?.errors && this.Addsolicitante.controls?.['apellidos']?.touched
  }

  sexovalido(){
    return this.Addsolicitante.controls?.['genero']?.touched && this.Addsolicitante.controls?.['genero'].errors
  }

  direccionvalida(){
    return this.Addsolicitante.controls?.['direccion']?.errors && this.Addsolicitante.controls?.['direccion']?.touched
  }

  municipiovalido(){
    return this.Addsolicitante.controls?.['municipio']?.errors && this.Addsolicitante.controls?.['municipio']?.touched
  }

  localidadvalida(){
    return this.Addsolicitante.controls?.['localidad']?.errors && this.Addsolicitante.controls?.['localidad']?.touched
  }

  edadvalida(){
    return this.Addsolicitante.controls?.['edad']?.errors && this.Addsolicitante.controls?.['edad']?.touched
  }

  telefonovalido(){
    return this.Addsolicitante.controls?.['telefono']?.errors && this.Addsolicitante.controls?.['telefono']?.touched
  }

  correovalido(){
    return this.Addsolicitante.controls?.['correo']?.errors && this.Addsolicitante.controls?.['correo']?.touched
  }


  contrasenavalida() {
    return this.Addsolicitante.controls?.['password']?.errors && this.Addsolicitante.controls?.['password']?.touched
  }

  contrasena2valida() {
    return this.Addsolicitante.controls?.['password2']?.errors && this.Addsolicitante.controls?.['password2']?.touched
  }

  fotovalida(){
    return this.Addsolicitante.controls?.['foto']?.touched && this.Addsolicitante.controls?.['foto'].errors
  }

  guardar() {
    console.log(this.Addsolicitante.value);

  }

}
