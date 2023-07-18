import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';

@Component({
  selector: 'app-add-admin-rol-admin',
  templateUrl: './add-admin-rol-admin.component.html',
  styleUrls: ['./add-admin-rol-admin.component.css']
})
export class AddAdminRolAdminComponent {

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

  Addadmin: FormGroup = this.fb.group({

    nombre: ['', [Validators.required, Validators.pattern(this.nombreyapellido)]],
    apellidos: ['', [Validators.required, Validators.pattern(this.nombreyapellido)]],
    genero: ['', [Validators.required]],
    edad: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.min(1), Validators.max(100), Validators.pattern(this.edadynumero)]],
    telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.edadynumero)]],
    correo: ['', [Validators.required, Validators.pattern(this.correo_v)]],
    password: ['', [Validators.required,  Validators.minLength(8), Validators.maxLength(30)]],
    password2: ['', [Validators.required,]]
  }, {
    validators: [this.camposIguales('password', 'password2')]
  }
  );

  nombrevalido(){
    return this.Addadmin.controls?.['nombre']?.errors && this.Addadmin.controls?.['nombre']?.touched
  }

  apellidosvalido(){
    return this.Addadmin.controls?.['apellidos']?.errors && this.Addadmin.controls?.['apellidos']?.touched
  }

  sexovalido(){
    return this.Addadmin.controls?.['genero']?.touched && this.Addadmin.controls?.['genero'].errors
  }

  edadvalida(){
    return this.Addadmin.controls?.['edad']?.errors && this.Addadmin.controls?.['edad']?.touched
  }

  telefonovalido(){
    return this.Addadmin.controls?.['telefono']?.errors && this.Addadmin.controls?.['telefono']?.touched
  }

  correovalido(){
    return this.Addadmin.controls?.['correo']?.errors && this.Addadmin.controls?.['correo']?.touched
  }


  contrasenavalida() {
    return this.Addadmin.controls?.['password']?.errors && this.Addadmin.controls?.['password']?.touched
  }

  contrasena2valida() {
    return this.Addadmin.controls?.['password2']?.errors && this.Addadmin.controls?.['password2']?.touched
  }

  guardar() {
    console.log(this.Addadmin.value);

  }
}
