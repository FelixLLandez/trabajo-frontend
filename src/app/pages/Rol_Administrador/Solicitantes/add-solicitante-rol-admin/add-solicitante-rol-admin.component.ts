import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ServiceAdministradorService } from 'src/app/services/administrador-service/service-administrador.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { ServiceSolicitanteService } from 'src/app/services/administrador-service/service-solicitante.service';

@Component({
  selector: 'app-add-solicitante-rol-admin',
  templateUrl: './add-solicitante-rol-admin.component.html',
  styleUrls: ['./add-solicitante-rol-admin.component.css']
})
export class AddSolicitanteRolAdminComponent {

  constructor(private fb: FormBuilder, private serviceSolicitante: ServiceSolicitanteService, private router:Router) { 
    
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
  edadynumero = '[0-9]+';
  correo_v = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  Addsolicitante: FormGroup = this.fb.group({

    nombre: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
    apellidos: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
    sexo: ['', [Validators.required]],
    municipio: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
    localidad: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
    edad: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.min(1), Validators.max(100), Validators.pattern(this.edadynumero)]],
    telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.edadynumero)]],
    email: ['', [Validators.required, Validators.pattern(this.correo_v)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
    password2: ['', [Validators.required,]],
    foto: ['', [Validators.required,]],
    calle:['',[Validators.required, Validators.minLength(5), Validators.maxLength(45), Validators.pattern(this.nombreyapellido)]],
    estado:['',[Validators.required, Validators.minLength(5), Validators.maxLength(45), Validators.pattern(this.nombreyapellido)]],
    numero:['',[Validators.required,Validators.pattern(this.edadynumero)]],
    rolId:2

  }, {
    validators: [this.camposIguales('password', 'password2')]
  }
  );

  nombrevalido() {
    return this.Addsolicitante.controls?.['nombre']?.errors && this.Addsolicitante.controls?.['nombre']?.touched
  }

  apellidosvalido() {
    return this.Addsolicitante.controls?.['apellidos']?.errors && this.Addsolicitante.controls?.['apellidos']?.touched
  }

  sexovalido() {
    return this.Addsolicitante.controls?.['sexo']?.touched && this.Addsolicitante.controls?.['sexo'].errors
  }

  

  municipiovalido() {
    return this.Addsolicitante.controls?.['municipio']?.errors && this.Addsolicitante.controls?.['municipio']?.touched
  }

  localidadvalida() {
    return this.Addsolicitante.controls?.['localidad']?.errors && this.Addsolicitante.controls?.['localidad']?.touched
  }

  edadvalida() {
    return this.Addsolicitante.controls?.['edad']?.errors && this.Addsolicitante.controls?.['edad']?.touched
  }

  telefonovalido() {
    return this.Addsolicitante.controls?.['telefono']?.errors && this.Addsolicitante.controls?.['telefono']?.touched
  }

  correovalido() {
    return this.Addsolicitante.controls?.['email']?.errors && this.Addsolicitante.controls?.['email']?.touched
  }


  contrasenavalida() {
    return this.Addsolicitante.controls?.['password']?.errors && this.Addsolicitante.controls?.['password']?.touched
  }

  contrasena2valida() {
    return this.Addsolicitante.controls?.['password2']?.errors && this.Addsolicitante.controls?.['password2']?.touched
  }

  fotovalida() {
    return this.Addsolicitante.controls?.['foto']?.touched && this.Addsolicitante.controls?.['foto'].errors
  }

  callevalida(){
    return this.Addsolicitante.controls?.['calle']?.errors && this.Addsolicitante.controls?.['calle']?.touched
  }

  estadovalido(){
    return this.Addsolicitante.controls?.['estado']?.errors && this.Addsolicitante.controls?.['estado']?.touched
  }

  numerovalido(){
    return this.Addsolicitante.controls?.['numero']?.errors && this.Addsolicitante.controls?.['numero']?.touched
  }

  guardar() {
    console.log(this.Addsolicitante.value);
    
    this.serviceSolicitante.agregar_solicitante(this.Addsolicitante.value).subscribe((datos: any) => {
      if (datos) {
        Swal.fire({
          title: 'Solicitante agregado correctamente',
          icon: 'success',
          showCancelButton: false,
          showConfirmButton: true
        })
        this.Addsolicitante.reset();
        this.router.navigateByUrl('/ver-solicitantes');

      }
    })

  }
  

  

}
