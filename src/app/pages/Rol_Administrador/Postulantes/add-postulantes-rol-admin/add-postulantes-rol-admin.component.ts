import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-postulantes-rol-admin',
  templateUrl: './add-postulantes-rol-admin.component.html',
  styleUrls: ['./add-postulantes-rol-admin.component.css']
})
export class AddPostulantesRolAdminComponent {

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

  Addpostulante: FormGroup = this.fb.group({

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
    return this.Addpostulante.controls?.['nombre']?.errors && this.Addpostulante.controls?.['nombre']?.touched
  }

  apellidosvalido(){
    return this.Addpostulante.controls?.['apellidos']?.errors && this.Addpostulante.controls?.['apellidos']?.touched
  }

  sexovalido(){
    return this.Addpostulante.controls?.['genero']?.touched && this.Addpostulante.controls?.['genero'].errors
  }

  direccionvalida(){
    return this.Addpostulante.controls?.['direccion']?.errors && this.Addpostulante.controls?.['direccion']?.touched
  }

  municipiovalido(){
    return this.Addpostulante.controls?.['municipio']?.errors && this.Addpostulante.controls?.['municipio']?.touched
  }

  localidadvalida(){
    return this.Addpostulante.controls?.['localidad']?.errors && this.Addpostulante.controls?.['localidad']?.touched
  }

  edadvalida(){
    return this.Addpostulante.controls?.['edad']?.errors && this.Addpostulante.controls?.['edad']?.touched
  }

  telefonovalido(){
    return this.Addpostulante.controls?.['telefono']?.errors && this.Addpostulante.controls?.['telefono']?.touched
  }

  correovalido(){
    return this.Addpostulante.controls?.['correo']?.errors && this.Addpostulante.controls?.['correo']?.touched
  }


  contrasenavalida() {
    return this.Addpostulante.controls?.['password']?.errors && this.Addpostulante.controls?.['password']?.touched
  }

  contrasena2valida() {
    return this.Addpostulante.controls?.['password2']?.errors && this.Addpostulante.controls?.['password2']?.touched
  }

  fotovalida(){
    return this.Addpostulante.controls?.['foto']?.touched && this.Addpostulante.controls?.['foto'].errors
  }

  guardar() {
    console.log(this.Addpostulante.value);

  }

}
