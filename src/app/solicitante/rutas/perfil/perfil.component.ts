import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { ServiceSolicitanteService } from 'src/app/services/service-solicitante.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  usuario: any = {}; 

  constructor(private soliSer: ServiceSolicitanteService) { }

  ngOnInit(): void {
    const userString = localStorage.getItem('user');
    if (userString) {
      this.usuario = JSON.parse(userString);
    }
  }

  editarPerfil() {
    // Implementa la lógica para guardar los cambios en el perfil del usuario
    // Puedes acceder a los valores del formulario con this.usuario.nombre, this.usuario.apellidos, etc.
    // Y realizar la actualización en el servicio o API correspondiente
    // Luego, muestra una notificación de éxito utilizando Swal.fire

    Swal.fire({
      title: '¿Estás seguro?',
      text: "Se actualizará la información del perfil!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Aceptar'
    }).then((result) => {
      if (result.isConfirmed) {
        // Lógica para actualizar el perfil del usuario
        // this.soliSer.actualizarPerfilUsuario(this.usuario).subscribe(
        //   (data: any) => {
        //     // Procesar la respuesta de la API en caso de ser necesario
        //     Swal.fire(
        //       'Actualizado!',
        //       'La información del perfil ha sido actualizado correctamente.',
        //       'success'
        //     );
        //   },
        //   (error: any) => {
        //     console.error(error);
        //     Swal.fire(
        //       'Error!',
        //       'Ocurrió un problema al actualizar la información del perfil.',
        //       'error'
        //     );
        //   }
        // );

        // Por ahora, simulamos la actualización del perfil mostrando una notificación
        Swal.fire(
          'Actualizado!',
          'La información del perfil ha sido actualizado correctamente.',
          'success'
        );
      }
    })
  }
}
