import { CanActivateFn } from '@angular/router';
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServiceAdministradorService } from '../services/administrador-service/service-administrador.service';
import { ServiceSolicitanteService } from '../services/administrador-service/service-solicitante.service';
import { SolicitanteService } from '../services/solicitante-service/solicitante.service';
import { PostulanteService } from '../services/postulante-service/postulante.service';


@Injectable({
  providedIn: 'root'
})
export class AuthGuard_postulante  {

  constructor(private route: Router,
    private servicepostulante: PostulanteService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.servicepostulante.isAuth_postulante()) {
      console.log('estamos dentro postulante');
    } else {
      console.log('Estamos fuera');
      this.route.navigateByUrl('/login');
    }
    return true;
  }

}
