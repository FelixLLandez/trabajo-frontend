import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceAdministradorService } from '../../../../services/administrador-service/service-administrador.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-admin-rol-admin',
  templateUrl: './edit-admin-rol-admin.component.html',
  styleUrls: ['./edit-admin-rol-admin.component.css']
})
export class EditAdminRolAdminComponent implements OnInit {

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private serviceAdmin: ServiceAdministradorService, private router: Router) { }

  id_user: any;
  datos_admin: any = [];
  imagePreview: string | ArrayBuffer | null = null;

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
  dirección = "[a-zA-ZáéíóúÁÉÍÓÚñÑ0-9# ]+";

  Editadmin: FormGroup = this.fb.group({

    nombre: ['', [Validators.required, Validators.pattern(this.nombreyapellido)]],
    apellidos: ['', [Validators.required, Validators.pattern(this.nombreyapellido)]],
    sexo: ['', [Validators.required]],
    edad: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.min(1), Validators.max(100), Validators.pattern(this.edadynumero)]],
    telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.edadynumero)]],
    email: ['', [Validators.required, Validators.pattern(this.correo_v)]],
    calle: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(45), Validators.pattern(this.dirección)]],
    estado: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(45), Validators.pattern(this.nombreyapellido)]],
    municipio: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
    foto: ['', [Validators.required]],
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

  callevalida() {
    return this.Editadmin.controls?.['calle']?.errors && this.Editadmin.controls?.['calle']?.touched
  }

  estadovalido() {
    return this.Editadmin.controls?.['estado']?.errors && this.Editadmin.controls?.['estado']?.touched
  }

  municipiovalido() {
    return this.Editadmin.controls?.['municipio']?.errors && this.Editadmin.controls?.['municipio']?.touched
  }

  // contrasenavalida() {
  //   return this.Editadmin.controls?.['password']?.errors && this.Editadmin.controls?.['password']?.touched
  // }

  // contrasena2valida() {
  //   return this.Editadmin.controls?.['password2']?.errors && this.Editadmin.controls?.['password2']?.touched
  // }

  modificar() {
    Swal.fire({
      title: 'Estás seguro de modificar la información?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const id = parseInt(this.route.snapshot.paramMap.get('id') || '');
        this.serviceAdmin.modificar_administrador(id, this.Editadmin.value).subscribe((data: any) => {
          this.router.navigateByUrl('/ver-administradores')
          Swal.fire({
            icon: 'success',
            title: 'Usuario modificado correctamente',
          })

        }, (error) => {
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

  obtener_datos() {
    this.serviceAdmin.get_admin(this.id_user).subscribe((data: any) => {
      this.datos_admin = data;
      this.Editadmin.patchValue(data)
      this.imagePreview = data.foto;
    })
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result;
      this.Editadmin.patchValue({ foto: reader.result });
    };
    reader.readAsDataURL(file);
  }

}
