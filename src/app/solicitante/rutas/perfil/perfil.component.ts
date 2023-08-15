import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { AbstractControl, FormBuilder, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SolicitanteService } from 'src/app/services/solicitante-service/solicitante.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: any = {};
  nombreyapellido: string = "[a-zA-ZáéíóúÁÉÍÓÚñÑ ]+";
  edadynumero = '[0-9]+';
  correo_v = '^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$';
  editMode: boolean = false;

  constructor(private soliSer: SolicitanteService, private fb: FormBuilder, private router: Router) { }

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

  Edit_Mi_Info: FormGroup = this.fb.group({
    nombre: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
    apellidos: ['', [Validators.required, Validators.pattern(this.nombreyapellido), Validators.minLength(3), Validators.maxLength(45)]],
    sexo: ['', [Validators.required]],
    edad: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.min(1), Validators.max(100), Validators.pattern(this.edadynumero)]],
    telefono: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10), Validators.pattern(this.edadynumero)]],
    calle: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
    estado: ['', [Validators.required]],
    municipio: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
    localidad: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
    numero: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(3), Validators.min(1), Validators.max(100), Validators.pattern(this.edadynumero)]],
    email: ['', [Validators.required, Validators.pattern(this.correo_v)]],
    password: ['', [Validators.required, Validators.minLength(8), Validators.maxLength(30)]],
    password2: ['', [Validators.required]],
  }, {
    validators: [this.camposIguales('password', 'password2')]
  });

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.usuario = JSON.parse(userString);
      this.Edit_Mi_Info.patchValue({
        nombre: this.usuario.nombre,
        apellidos: this.usuario.apellidos,
        sexo: this.usuario.sexo,
        edad: this.usuario.edad,
        telefono: this.usuario.telefono,
        email: this.usuario.email,
        password: this.usuario.password,
        estado: this.usuario.estado,
        calle: this.usuario.calle,
        municipio: this.usuario.municipio,
        localidad: this.usuario.localidad,
        numero: this.usuario.numero
      });
    }
  }

  editarPerfil() {
    const formData = this.Edit_Mi_Info.value;

    formData.password = null;
    const dataToUpdate = {
      ...formData
    };
    this.soliSer.updatePerfil(this.usuario.id, dataToUpdate).subscribe(
      () => {
        this.usuario.nombre = formData.nombre;
        this.usuario.apellidos = formData.apellidos;
        this.usuario.sexo = formData.sexo;
        this.usuario.edad = formData.edad;
        this.usuario.telefono = formData.telefono;
        this.usuario.email = formData.email;
        this.usuario.calle = formData.calle;
        this.usuario.estado = formData.estado;
        this.usuario.municipio = formData.municipio;
        this.usuario.localidad = formData.localidad;
        this.usuario.numero = formData.numero;
        localStorage.setItem('user', JSON.stringify(this.usuario));// Actualizamos los datos del usuario en el almacenamiento local
        Swal.fire(
          'Perfil actualizado',
          'Tu información de perfil ha sido actualizada correctamente.',
          'success'
        );
        this.router.navigateByUrl('/trabajitos');
      },
      (error: any) => {
        console.error('Error al actualizar el perfil:', error);
        console.log('Detalles del error:', error.error);
        Swal.fire(
          'Error',
          'Ha ocurrido un error al actualizar el perfil.',
          'error'
        );
      }
    );
  }

  visibilidadContrasennia(inputId: string) {
    const inputElement: HTMLInputElement = document.getElementById(inputId) as HTMLInputElement;
    inputElement.type = inputElement.type === 'password' ? 'text' : 'password';
  }

  salir() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Con esta acción saldrás del sistema!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        Swal.fire(
          'Hasta luego!',
          'Regresa pronto :).',
          'success'
        );
        this.router.navigateByUrl('/login');
        console.log('Saliendo...');
      } else {
        console.log('No hemos salido.');
      }
    });
  }


  estados = [
    'Aguascalientes',
    'Baja California',
    'Baja California Sur',
    'Campeche',
    'Chiapas',
    'Chihuahua',
    'Coahuila de Zaragoza',
    'Colima',
    'Ciudad de México',
    'Durango',
    'Guanajuato',
    'Guerrero',
    'Hidalgo',
    'Jalisco',
    'Estado de Mexico',
    'Michoacan de Ocampo',
    'Morelos',
    'Nayarit',
    'Nuevo Leon',
    'Oaxaca',
    'Puebla',
    'Queretaro de Arteaga',
    'Quintana Roo',
    'San Luis Potosi',
    'Sinaloa',
    'Sonora',
    'Tabasco',
    'Tamaulipas',
    'Tlaxcala',
    'Veracruz de Ignacio de la Llave',
    'Yucatan',
    'Zacatecas',
  ];

  imagenSeleccionada: File | null = null;
  vistaPreviaURL: string | null = null; // URL de la vista previa

  abrirSelectorDeImagen() {
    const inputElement: HTMLInputElement | null = document.querySelector('input[type="file"]');
    if (inputElement) {
      inputElement.click();
    }
  }

  cambiarImagen(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.imagenSeleccionada = files[0];

      // aqui se verifics si imagenSeleccionada no es nula antes de crear la URL
      if (this.imagenSeleccionada) {
        this.vistaPreviaURL = URL.createObjectURL(this.imagenSeleccionada);
      }
    }
  }


}
