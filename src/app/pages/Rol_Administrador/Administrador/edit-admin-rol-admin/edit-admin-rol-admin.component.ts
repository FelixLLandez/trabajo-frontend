import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServiceAdministradorService } from '../../../../services/administrador-service/service-administrador.service';

@Component({
  selector: 'app-edit-admin-rol-admin',
  templateUrl: './edit-admin-rol-admin.component.html',
  styleUrls: ['./edit-admin-rol-admin.component.css']
})
export class EditAdminRolAdminComponent implements OnInit {

  constructor(private fb: FormBuilder, private route:ActivatedRoute, private serviceAdmin: ServiceAdministradorService) { }

  id_user:any;
  datos_admin:any=[];

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.id_user = id;
    console.log(this.id_user);
    this.obtener_datos();
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

  Editadmin: FormGroup = this.fb.group({

    nombre: ['', [Validators.required, Validators.pattern(this.nombreyapellido)]],
    apellidos: ['', [Validators.required, Validators.pattern(this.nombreyapellido)]],
    genero: ['', [Validators.required]],
    edad: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.min(1), Validators.max(100), Validators.pattern(this.edadynumero)]],
    telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.edadynumero)]],
    correo: ['', [Validators.required, Validators.pattern(this.correo_v)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
    password2: ['', [Validators.required,]]
  }, {
    validators: [this.camposIguales('password', 'password2')]
  }
  );

  nombrevalido() {
    return this.Editadmin.controls?.['nombre']?.errors && this.Editadmin.controls?.['nombre']?.touched
  }

  apellidosvalido() {
    return this.Editadmin.controls?.['apellidos']?.errors && this.Editadmin.controls?.['apellidos']?.touched
  }

  sexovalido() {
    return this.Editadmin.controls?.['genero']?.touched && this.Editadmin.controls?.['genero'].errors
  }

  edadvalida() {
    return this.Editadmin.controls?.['edad']?.errors && this.Editadmin.controls?.['edad']?.touched
  }

  telefonovalido() {
    return this.Editadmin.controls?.['telefono']?.errors && this.Editadmin.controls?.['telefono']?.touched
  }

  correovalido() {
    return this.Editadmin.controls?.['correo']?.errors && this.Editadmin.controls?.['correo']?.touched
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

  obtener_datos(){
    this.serviceAdmin.get_admin(this.id_user).subscribe((data:any)=>{
      this.datos_admin=data;
      console.log(this.datos_admin);
      
    })
  }

}
