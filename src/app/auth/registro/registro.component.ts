import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { SolicitanteService } from 'src/app/services/solicitante-service/solicitante.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  ngOnInit(): void {
    this.getRoles();
  }

  registroForm: FormGroup;
  selectedRol: string = '';

  constructor(
    private solicitanteS: SolicitanteService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {
    this.registroForm = this.formBuilder.group({
      nombre: ['', [Validators.required, Validators.minLength(5)]],
      apellidos: ['', [Validators.required, Validators.minLength(5)]],
      sexo: ['', [Validators.required]],
      edad: ['', [Validators.required, Validators.min(1), Validators.max(100), Validators.maxLength(100), Validators.minLength(1)]],
      telefono: ['', [Validators.required, Validators.minLength(10)]],
      email: ['', [Validators.required, Validators.email]],
      calle: ['', [Validators.required, Validators.minLength(5)]],
      estado: ['', [Validators.required]],
      municipio: ['', [Validators.required, Validators.minLength(5)]],
      localidad: ['', [Validators.required, Validators.minLength(5)]],
      numero: ['', [Validators.required, Validators.min(0), Validators.minLength(1)]],
      password: ['', [Validators.required, Validators.minLength(8)]],
      rol: ['', Validators.required]
    });
  }

  registrarse() {
    if (this.registroForm.valid) {
      if (!this.selectedRol) {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'Por favor, seleccione un rol válido.'
        });
        return;
      }

      const formData = this.registroForm.value;
      if (this.selectedRol === '1') {
        delete formData.rol;
      } else {
        formData.rolId = this.selectedRol;
        delete formData.rol;
      }

      this.solicitanteS.registro(formData).subscribe(
        (data) => {
          console.log(data);
          this.router.navigate(['/login']);
          Swal.fire({
            icon: 'success',
            title: 'Registro exitoso',
            text: '¡Usuario registrado correctamente!'
          });
        },
        (error) => {
          console.log(error);
        }
      );
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Por favor, completa todos los campos correctamente.'
      });
    }
  }

  roles: any[] = [];
  getRoles() {
    this.solicitanteS.getRoles().subscribe(
      (data: any) => {
        // En este caso filtre los roles para eliminar el rol del administrador (ID: 1) y solo mostrar los dos restantes
        this.roles = data.filter((rol: any) => rol.id !== 1);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }


  rolSeleccionado(event: Event) {
    const target = event.target as HTMLSelectElement;
    this.selectedRol = target.value; // Guardar el ID del rol seleccionado en la variable selectedRol
  }

  isNombreInvalid() {
    const campoNombre = this.registroForm.get('nombre');
    return campoNombre?.invalid && campoNombre?.touched;
  }

  isApellidosInvalid() {
    const campoApellidos = this.registroForm.get('apellidos');
    return campoApellidos?.invalid && campoApellidos?.touched;
  }

  isSexoInvalid() {
    const campoSexo = this.registroForm.get('sexo');
    return campoSexo?.invalid && campoSexo?.touched;
  }

  isEdadInvalid() {
    const campoEdad = this.registroForm.get('edad');
    return campoEdad?.invalid && campoEdad?.touched;
  }

  isTelefonoInvalid() {
    const campoTelefono = this.registroForm.get('telefono');
    return campoTelefono?.invalid && campoTelefono?.touched;
  }

  isCalleInvalid() {
    const campoCalle = this.registroForm.get('calle');
    return campoCalle?.invalid && campoCalle?.touched;
  }
  //------

  isEstadoInvalid() {
    const campoEstado = this.registroForm.get('estado');
    return campoEstado?.invalid && campoEstado?.touched;
  }

  isMunicipioInvalid() {
    const campoMunicipio = this.registroForm.get('municipio');
    return campoMunicipio?.invalid && campoMunicipio?.touched;
  }

  isLocalidadInvalid() {
    const campoLocalidad = this.registroForm.get('localidad');
    return campoLocalidad?.invalid && campoLocalidad?.touched;
  }

  isNumeroInvalid() {
    const campoNumero = this.registroForm.get('numero');
    return campoNumero?.invalid && campoNumero?.touched;
  }

  isEmailInvalid() {
    const campoEmail = this.registroForm.get('email');
    return campoEmail?.invalid && campoEmail?.touched;
  }

  isPasswordInvalid() {
    const campoPassword = this.registroForm.get('password');
    return campoPassword?.invalid && campoPassword?.touched;
  }

  isRolInvalid() {
    const campoRol = this.registroForm.get('rol');
    return campoRol?.invalid && campoRol?.touched;
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
}
