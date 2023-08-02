import { Component } from '@angular/core';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServiceSolicitanteService } from 'src/app/services/service-solicitante.service';

@Component({
  selector: 'app-add-trabajo',
  templateUrl: './add-trabajo.component.html',
  styleUrls: ['./add-trabajo.component.css']
})
export class AddTrabajoComponent {
  trabajoForm: FormGroup;

  constructor(private router: Router, private fb: FormBuilder, private soliSer: ServiceSolicitanteService) {
    this.trabajoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(3), Validators.maxLength(255)]],
      direccion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      descripcion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      precio: ['', [Validators.required, Validators.min(1), Validators.maxLength(10)]]
    });
  }
  
  agregarTrabajo() {
    if (this.trabajoForm.invalid) {
      console.log('Formulario no válido'); 
      return;
    }
    const nuevoTrabajo = this.trabajoForm.value;
    const solicitanteId = this.soliSer.getLoggedInUserId(); // Obtener el ID del usuario autenticado

    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Se agregará un nuevo trabajo!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.soliSer.addTrabajo(nuevoTrabajo, solicitanteId).subscribe(
          () => {
            Swal.fire(
              'Agregado!',
              'El trabajo ha sido agregado correctamente.',
              'success'
            );
            console.log('El trabajo se ha agregado correctamente.');
            this.router.navigateByUrl('/trabajitos');
          },
          (error) => {
            console.error('Error al agregar el trabajo:', error);
            Swal.fire(
              'Error!',
              'Ha ocurrido un error al agregar el trabajo.',
              'error'
            );
          }
        );
      } else {
        console.log('El trabajo no se ha agregado.');
      }
    });
  }

  nombreValido() {
    return this.trabajoForm.get('nombre')?.valid;
  }

  direccionValida() {
    return this.trabajoForm.get('direccion')?.valid;
  }

  descripcionValida() {
    return this.trabajoForm.get('descripcion')?.valid;
  }

  precioValido() {
    return this.trabajoForm.get('precio')?.valid;
  }

  nombreTocado() {
    return this.trabajoForm.get('nombre')?.touched || this.trabajoForm.get('nombre')?.dirty;
  }

  direccionTocada() {
    return this.trabajoForm.get('direccion')?.touched || this.trabajoForm.get('direccion')?.dirty;
  }

  descripcionTocada() {
    return this.trabajoForm.get('descripcion')?.touched || this.trabajoForm.get('descripcion')?.dirty;
  }

  precioTocado() {
    return this.trabajoForm.get('precio')?.touched || this.trabajoForm.get('precio')?.dirty;
  }
}
