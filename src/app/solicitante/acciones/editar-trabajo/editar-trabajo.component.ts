import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { SolicitanteService } from 'src/app/services/solicitante-service/solicitante.service';

@Component({
  selector: 'app-editar-trabajo',
  templateUrl: './editar-trabajo.component.html',
  styleUrls: ['./editar-trabajo.component.css']
})
export class EditarTrabajoComponent implements OnInit {

  trabajo: any = {};
  editTrabajoForm: FormGroup;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private soliService: SolicitanteService,
    private fb: FormBuilder
  ) {
    this.editTrabajoForm = this.fb.group({
      nombre: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      direccion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      descripcion: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(255)]],
      precio: ['', [Validators.required, Validators.min(1), Validators.maxLength(10)]]
    });
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      this.getTrabajo(id);
    });
  }

  getTrabajo(id: number) {
    this.soliService.getTrabajoByID(id).subscribe(
      (data: any) => {
        this.trabajo = data;
        this.editTrabajoForm.patchValue(data);
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  editarTrabajo() {
    if (this.editTrabajoForm.invalid) {
      console.log('Formulario no válido');
      return;
    }

    Swal.fire({
      title: '¿Estás seguro?',
      text: 'Se actualizará la información de este trabajo!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.soliService.updateTrabajo(this.trabajo.id, this.editTrabajoForm.value).subscribe(
          () => {
            Swal.fire('Actualizado!', 'El trabajo ha sido actualizado correctamente.', 'success');
            this.router.navigateByUrl('/trabajitos');
          },
          (error: any) => {
            console.error('Error al actualizar el trabajo:', error);
            Swal.fire('Error!', 'Ha ocurrido un error al actualizar el trabajo.', 'error');
          }
        );
      }
    });
  }

  nombreValido() {
    return this.editTrabajoForm.get('nombre')?.valid;
  }

  direccionValida() {
    return this.editTrabajoForm.get('direccion')?.valid;
  }

  descripcionValida() {
    return this.editTrabajoForm.get('descripcion')?.valid;
  }

  precioValido() {
    return this.editTrabajoForm.get('precio')?.valid;
  }

  nombreTocado() {
    return this.editTrabajoForm.get('nombre')?.touched || this.editTrabajoForm.get('nombre')?.dirty;
  }

  direccionTocada() {
    return this.editTrabajoForm.get('direccion')?.touched || this.editTrabajoForm.get('direccion')?.dirty;
  }

  descripcionTocada() {
    return this.editTrabajoForm.get('descripcion')?.touched || this.editTrabajoForm.get('descripcion')?.dirty;
  }

  precioTocado() {
    return this.editTrabajoForm.get('precio')?.touched || this.editTrabajoForm.get('precio')?.dirty;
  }
}
