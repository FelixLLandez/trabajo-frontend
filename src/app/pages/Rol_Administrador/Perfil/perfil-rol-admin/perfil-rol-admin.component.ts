import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ServiceAdministradorService } from '../../../../services/administrador-service/service-administrador.service';
import { async } from '@angular/core/testing';
import { DomSanitizer, SafeUrl } from '@angular/platform-browser';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-perfil-rol-admin',
  templateUrl: './perfil-rol-admin.component.html',
  styleUrls: ['./perfil-rol-admin.component.css']
})
export class PerfilRolAdminComponent {

  datos_perfil: any = [];
  Editadmin: FormGroup;
  Editpassword: FormGroup;

  imagePreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private serviceAdmin: ServiceAdministradorService, private sanitizer: DomSanitizer) {
    this.Editadmin = this.fb.group({
      nombre: ['', [Validators.required, Validators.pattern(this.nombreyapellido)]],
      apellidos: ['', [Validators.required, Validators.pattern(this.nombreyapellido)]],
      sexo: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.min(1), Validators.max(100), Validators.pattern(this.edadynumero)]],
      telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.edadynumero)]],
      email: ['', [Validators.required, Validators.pattern(this.correo_v)]],
      calle: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(45), Validators.pattern(this.nombreyapellido)]],
      estado: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(45), Validators.pattern(this.nombreyapellido)]],
      numero: ['', [Validators.required, Validators.pattern(this.edadynumero)]],
      municipio: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
      localidad: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
      foto: ['', [Validators.required]]
    });

    this.Editpassword = this.fb.group({
      password_anterior: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
      password2: ['', [Validators.required,]]
    }, {
      validators: [this.camposIguales('password', 'password2')]
    }
    )
  }

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
  edadynumero = '[0-9]+';
  correo_v = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';


  nombrevalido() {
    return this.Editadmin.controls?.['nombre']?.errors && this.Editadmin.controls?.['nombre']?.touched
  }

  apellidosvalido() {
    return this.Editadmin.controls?.['apellidos']?.errors && this.Editadmin.controls?.['apellidos']?.touched
  }

  sexovalido() {
    return this.Editadmin.controls?.['sexo']?.touched && this.Editadmin.controls?.['sexo'].errors
  }

  edadvalida() {
    return this.Editadmin.controls?.['edad']?.errors && this.Editadmin.controls?.['edad']?.touched
  }

  telefonovalido() {
    return this.Editadmin.controls?.['telefono']?.errors && this.Editadmin.controls?.['telefono']?.touched
  }

  correovalido() {
    return this.Editadmin.controls?.['email']?.errors && this.Editadmin.controls?.['email']?.touched
  }

  contrasenaanteriorvalida() {
    return this.Editpassword.controls?.['password_anterior']?.errors && this.Editpassword.controls?.['password_anterior']?.touched
  }

  contrasenavalida() {
    return this.Editpassword.controls?.['password']?.errors && this.Editpassword.controls?.['password']?.touched
  }

  contrasena2valida() {
    return this.Editpassword.controls?.['password2']?.errors && this.Editpassword.controls?.['password2']?.touched
  }

  callevalida() {
    return this.Editadmin.controls?.['calle']?.errors && this.Editadmin.controls?.['calle']?.touched
  }

  estadovalido() {
    return this.Editadmin.controls?.['estado']?.errors && this.Editadmin.controls?.['estado']?.touched
  }

  numerovalido() {
    return this.Editadmin.controls?.['numero']?.errors && this.Editadmin.controls?.['numero']?.touched
  }

  municipiovalido() {
    return this.Editadmin.controls?.['municipio']?.errors && this.Editadmin.controls?.['municipio']?.touched
  }

  localidadvalida() {
    return this.Editadmin.controls?.['localidad']?.errors && this.Editadmin.controls?.['localidad']?.touched
  }

  cambiosRealizados(): boolean {
    return this.Editadmin.dirty;
  }

  modificar() {
    Swal.fire({
      title: 'Estás seguro de modificar tu perfil?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(this.Editadmin.value);

        this.serviceAdmin.modificar_admin(this.Editadmin.value).subscribe((response) => {
          this.get_datos();
          Swal.fire({
            icon: 'success',
            title: 'Información modificada correctamente',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true,
          })
        }, (error) => {
          this.get_datos();
          Swal.fire({
            icon: 'error',
            title: 'Hubo un problema al actualizar la información',
            text: 'Por favor, verifica su información e intenta de nuevo.',
            confirmButtonText: 'Aceptar',
            showConfirmButton: true,
          })
        })
      }
    })
  }

  get_datos() {
    this.serviceAdmin.get_datos_perfil().subscribe((data: any) => {
      this.datos_perfil = data;
      this.imagePreview = data.foto
      this.Editadmin.patchValue(data);
    })
  }

  cambiar_contrasena() {
    console.log(this.Editpassword.value);
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result;
      console.log(this.imagePreview);

      this.Editadmin.patchValue({ foto: reader.result });
    };
    reader.readAsDataURL(file);
  }


}
