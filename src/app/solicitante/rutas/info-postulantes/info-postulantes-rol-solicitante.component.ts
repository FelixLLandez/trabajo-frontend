import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PostulanteService } from 'src/app/services/solicitante-service/postulante.service';

@Component({
  selector: 'app-info-postulantes-rol-solicitante',
  templateUrl: './info-postulantes-rol-solicitante.component.html',
  styleUrls: ['./info-postulantes-rol-solicitante.component.css']
})
export class InfoPostulantesRolSolicitanteComponent implements OnInit {

  infoPostulante: any = [];
  id_user: any;
  items = Array(10).fill(0);

  constructor(private postulanteS: PostulanteService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id') || '');
    this.id_user = id;
    this.getInfoPostulante();
  }


  getInfoPostulante() {
    this.postulanteS.get_postulante(this.id_user).subscribe(
      (data: any) => {
        console.log(data);
        this.infoPostulante = data;
      }, (error: any) => {
        console.error(error);
      }
    )
  }

}
