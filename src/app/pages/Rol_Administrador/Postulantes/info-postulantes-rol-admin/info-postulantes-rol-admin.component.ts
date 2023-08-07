import { Component, OnInit } from '@angular/core';
import { ServicePostulanteService } from '../../../../services/administrador-service/service-postulante.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-info-postulantes-rol-admin',
  templateUrl: './info-postulantes-rol-admin.component.html',
  styleUrls: ['./info-postulantes-rol-admin.component.css']
})
export class InfoPostulantesRolAdminComponent implements OnInit {
  items = Array(10).fill(0);
  datos_postulante: any = [];
  id_user: any;

  constructor(private servicePostulante: ServicePostulanteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.id_user = id;
    console.log(this.id_user);
    this.obtener_datos();
  }

  obtener_datos() {
    this.servicePostulante.get_postulante(this.id_user).subscribe((data: any) => {
      this.datos_postulante = data;
    })
  }
}
