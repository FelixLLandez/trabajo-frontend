import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import Swal from 'sweetalert2';
import { SolicitanteService } from 'src/app/services/solicitante-service/solicitante.service';

@Component({
  selector: 'app-editar-trabajo',
  templateUrl: './editar-trabajo.component.html',
  styleUrls: ['./editar-trabajo.component.css']
})
export class EditarTrabajoComponent implements OnInit {

  trabajo: any = {}; 

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private soliService: SolicitanteService
  ) { }

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
      },
      (error: any) => {
        console.error(error);
      }
    );
  }

  editarTrabajo() {
    Swal.fire({
      title: '¿Estás seguro?',
      text: "Se actualizará la información de este trabajo!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        this.soliService.updateTrabajo(this.trabajo.id, this.trabajo).subscribe(
          () => {
            Swal.fire(
              'Actualizado!',
              'El trabajo ha sido actualizado correctamente.',
              'success'
            );
            this.router.navigateByUrl('/trabajitos');
          },
          (error: any) => {
            console.error('Error al actualizar el trabajo:', error);
            Swal.fire(
              'Error!',
              'Ha ocurrido un error al actualizar el trabajo.',
              'error'
            );
          }
        );
      }
    });
  }

}
