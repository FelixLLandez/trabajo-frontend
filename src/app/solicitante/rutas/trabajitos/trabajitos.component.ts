import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-trabajitos',
  templateUrl: './trabajitos.component.html',
  styleUrls: ['./trabajitos.component.css']
})
export class TrabajitosComponent {

  constructor(private router: Router) {
    setTimeout(() => {
      $('#datatableexample').DataTable({
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
}
