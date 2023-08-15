import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators, AbstractControl, ValidationErrors } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ServiceSolicitanteService } from '../../../../services/administrador-service/service-solicitante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-solicitante-rol-admin',
  templateUrl: './edit-solicitante-rol-admin.component.html',
  styleUrls: ['./edit-solicitante-rol-admin.component.css']
})
export class EditSolicitanteRolAdminComponent implements OnInit {

  id_user: any;
  datos_solicitante: any = [];
  imagePreview: string | ArrayBuffer | null = null;

  constructor(private fb: FormBuilder, private route: ActivatedRoute, private serviceSolicitante: ServiceSolicitanteService, private router:Router) { }

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

  Editsolicitante: FormGroup = this.fb.group({

    nombre: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
    apellidos: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
    sexo: ['', [Validators.required]],
    municipio: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
    edad: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.min(1), Validators.max(100), Validators.pattern(this.edadynumero)]],
    telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.edadynumero)]],
    email: ['', [Validators.required, Validators.pattern(this.correo_v)]],
    // password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
    // password2: ['', [Validators.required,]],
    // foto: ['', [Validators.required,]],
    calle: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(45), Validators.pattern(this.dirección)]],
    estado: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(45), Validators.pattern(this.nombreyapellido)]],
    foto: ['', [Validators.required]],
  }, {
    validators: [this.camposIguales('password', 'password2')]
  }
  );

  nombrevalido() {
    return this.Editsolicitante.controls?.['nombre']?.errors && this.Editsolicitante.controls?.['nombre']?.touched
  }

  apellidosvalido() {
    return this.Editsolicitante.controls?.['apellidos']?.errors && this.Editsolicitante.controls?.['apellidos']?.touched
  }

  sexovalido() {
    return this.Editsolicitante.controls?.['sexo']?.touched && this.Editsolicitante.controls?.['sexo'].errors
  }

  municipiovalido() {
    return this.Editsolicitante.controls?.['municipio']?.errors && this.Editsolicitante.controls?.['municipio']?.touched
  }

  edadvalida() {
    return this.Editsolicitante.controls?.['edad']?.errors && this.Editsolicitante.controls?.['edad']?.touched
  }

  telefonovalido() {
    return this.Editsolicitante.controls?.['telefono']?.errors && this.Editsolicitante.controls?.['telefono']?.touched
  }

  correovalido() {
    return this.Editsolicitante.controls?.['email']?.errors && this.Editsolicitante.controls?.['email']?.touched
  }


  contrasenavalida() {
    return this.Editsolicitante.controls?.['password']?.errors && this.Editsolicitante.controls?.['password']?.touched
  }

  contrasena2valida() {
    return this.Editsolicitante.controls?.['password2']?.errors && this.Editsolicitante.controls?.['password2']?.touched
  }

  fotovalida() {
    return this.Editsolicitante.controls?.['foto']?.touched && this.Editsolicitante.controls?.['foto'].errors
  }

  callevalida() {
    return this.Editsolicitante.controls?.['calle']?.errors && this.Editsolicitante.controls?.['calle']?.touched
  }

  estadovalido() {
    return this.Editsolicitante.controls?.['estado']?.errors && this.Editsolicitante.controls?.['estado']?.touched
  }

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
        this.serviceSolicitante.modificar_solicitante(id, this.Editsolicitante.value).subscribe((data: any) => {
          this.router.navigateByUrl('/ver-usuarios')
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
    this.serviceSolicitante.get_solic(this.id_user).subscribe((data: any) => {
      this.Editsolicitante.patchValue(data)
      this.datos_solicitante = data;
      this.imagePreview = data.foto;
    })
  }

  onFileSelected(event: any): void {
    const file = event.target.files[0];
    const reader = new FileReader();

    reader.onload = () => {
      this.imagePreview = reader.result;
      this.Editsolicitante.patchValue({ foto: reader.result });
    };
    reader.readAsDataURL(file);
  }
}
