import { Component } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { ServicePostulanteService } from '../../../../services/administrador-service/service-postulante.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-edit-postulante-rol-admin',
  templateUrl: './edit-postulante-rol-admin.component.html',
  styleUrls: ['./edit-postulante-rol-admin.component.css']
})
export class EditPostulanteRolAdminComponent {

  id_user:any;
  datos_postulante:any=[];

  constructor(private fb: FormBuilder, private servicePostulante:ServicePostulanteService, private route:ActivatedRoute, private router:Router) { }

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
  edadynumero= '[0-9]+';
  correo_v = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';

  Editpostulante: FormGroup = this.fb.group({

    nombre: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
    apellidos: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
    sexo: ['', [Validators.required]],
    municipio: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
    localidad: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
    edad: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.min(1), Validators.max(100), Validators.pattern(this.edadynumero)]],
    telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.edadynumero)]],
    email: ['', [Validators.required, Validators.pattern(this.correo_v)]],
    // password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
    // password2: ['', [Validators.required,]],
    // foto: ['', [Validators.required,]],
    calle:['',[Validators.required, Validators.minLength(5), Validators.maxLength(45), Validators.pattern(this.nombreyapellido)]],
    estado:['',[Validators.required, Validators.minLength(5), Validators.maxLength(45), Validators.pattern(this.nombreyapellido)]],
    numero:['',[Validators.required,Validators.pattern(this.edadynumero)]]
  }, {
    validators: [this.camposIguales('password', 'password2')]
  }
  );

  nombrevalido() {
    return this.Editpostulante.controls?.['nombre']?.errors && this.Editpostulante.controls?.['nombre']?.touched
  }

  apellidosvalido() {
    return this.Editpostulante.controls?.['apellidos']?.errors && this.Editpostulante.controls?.['apellidos']?.touched
  }

  sexovalido() {
    return this.Editpostulante.controls?.['sexo']?.touched && this.Editpostulante.controls?.['sexo'].errors
  }

  

  municipiovalido() {
    return this.Editpostulante.controls?.['municipio']?.errors && this.Editpostulante.controls?.['municipio']?.touched
  }

  localidadvalida() {
    return this.Editpostulante.controls?.['localidad']?.errors && this.Editpostulante.controls?.['localidad']?.touched
  }

  edadvalida() {
    return this.Editpostulante.controls?.['edad']?.errors && this.Editpostulante.controls?.['edad']?.touched
  }

  telefonovalido() {
    return this.Editpostulante.controls?.['telefono']?.errors && this.Editpostulante.controls?.['telefono']?.touched
  }

  correovalido() {
    return this.Editpostulante.controls?.['email']?.errors && this.Editpostulante.controls?.['email']?.touched
  }


  contrasenavalida() {
    return this.Editpostulante.controls?.['password']?.errors && this.Editpostulante.controls?.['password']?.touched
  }

  contrasena2valida() {
    return this.Editpostulante.controls?.['password2']?.errors && this.Editpostulante.controls?.['password2']?.touched
  }

  fotovalida() {
    return this.Editpostulante.controls?.['foto']?.touched && this.Editpostulante.controls?.['foto'].errors
  }

  callevalida(){
    return this.Editpostulante.controls?.['calle']?.errors && this.Editpostulante.controls?.['calle']?.touched
  }

  estadovalido(){
    return this.Editpostulante.controls?.['estado']?.errors && this.Editpostulante.controls?.['estado']?.touched
  }

  numerovalido(){
    return this.Editpostulante.controls?.['numero']?.errors && this.Editpostulante.controls?.['numero']?.touched
  }

  modificar() {
    Swal.fire({
      title: 'Estás seguro de modificar la informacion?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        const id = parseInt(this.route.snapshot.paramMap.get('id') || '');
        this.servicePostulante.modificar_postulante(id,this.Editpostulante.value).subscribe((data: any) => {
          this.router.navigateByUrl('/ver-postulantes')
          Swal.fire({
            icon: 'success',
            title: 'Usuario modificado correctamente',
          })

        })
      }
    })

  }

  obtener_datos() {
    this.servicePostulante.get_postulante(this.id_user).subscribe((data: any) => {
      this.Editpostulante.patchValue(data)
      this.datos_postulante = data;
    })
  }
}
