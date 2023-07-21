import { Component } from '@angular/core';

@Component({
  selector: 'app-postulantes-rol-admin',
  templateUrl: './postulantes-rol-admin.component.html',
  styleUrls: ['./postulantes-rol-admin.component.css']
})
export class PostulantesRolAdminComponent {

  postulantes = Array(100).fill(0);

  constructor(){
    setTimeout(() => {
      $('#tabla-postulantes').DataTable({
        language: {
          url: "//cdn.datatables.net/plug-ins/1.13.5/i18n/es-ES.json"
        },
        pagingType: 'full_numbers',
        pageLength: 10,
        processing: true,
        lengthMenu: [5, 10, 25],
        responsive: true
  
      });
    }, 1);
  }

  agregar_postulante(){

  }

  ver_postulante(){

  }

  modificar_postulante(){

  }

  eliminar_postulante(){

  }
}
