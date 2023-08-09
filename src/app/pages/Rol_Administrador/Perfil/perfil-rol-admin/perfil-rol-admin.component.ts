import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ServiceAdministradorService } from '../../../../services/administrador-service/service-administrador.service';

@Component({
  selector: 'app-perfil-rol-admin',
  templateUrl: './perfil-rol-admin.component.html',
  styleUrls: ['./perfil-rol-admin.component.css']
})
export class PerfilRolAdminComponent {

  datos_perfil:any=[];

  constructor(private fb: FormBuilder, private serviceAdmin:ServiceAdministradorService) { }

  ngOnInit(): void {
    this.get_datos();
  }

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

  Editadmin: FormGroup = this.fb.group({

    nombre: ['', [Validators.required, Validators.pattern(this.nombreyapellido)]],
    apellidos: ['', [Validators.required, Validators.pattern(this.nombreyapellido)]],
    sexo: ['', [Validators.required]],
    edad: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.min(1), Validators.max(100), Validators.pattern(this.edadynumero)]],
    telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.edadynumero)]],
    email: ['', [Validators.required, Validators.pattern(this.correo_v)]],
    password: ['', [Validators.required,  Validators.minLength(8), Validators.maxLength(30)]],
    password2: ['', [Validators.required,]]
  }, {
    validators: [this.camposIguales('password', 'password2')]
  }
  );

  nombrevalido(){
    return this.Editadmin.controls?.['nombre']?.errors && this.Editadmin.controls?.['nombre']?.touched
  }

  apellidosvalido(){
    return this.Editadmin.controls?.['apellidos']?.errors && this.Editadmin.controls?.['apellidos']?.touched
  }

  sexovalido(){
    return this.Editadmin.controls?.['sexo']?.touched && this.Editadmin.controls?.['sexo'].errors
  }

  edadvalida(){
    return this.Editadmin.controls?.['edad']?.errors && this.Editadmin.controls?.['edad']?.touched
  }

  telefonovalido(){
    return this.Editadmin.controls?.['telefono']?.errors && this.Editadmin.controls?.['telefono']?.touched
  }

  correovalido(){
    return this.Editadmin.controls?.['email']?.errors && this.Editadmin.controls?.['email']?.touched
  }


  contrasenavalida() {
    return this.Editadmin.controls?.['password']?.errors && this.Editadmin.controls?.['password']?.touched
  }

  contrasena2valida() {
    return this.Editadmin.controls?.['password2']?.errors && this.Editadmin.controls?.['password2']?.touched
  }

  modificar() {
    console.log(this.Editadmin.value);

  }

  get_datos(){
    this.serviceAdmin.get_datos_perfil().subscribe((data:any)=>{
      this.datos_perfil=data;
      this.Editadmin.patchValue(data);
      console.log(data);
      
    })
  }
}
