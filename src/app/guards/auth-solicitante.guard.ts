import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServiceAdministradorService } from '../services/service-administrador.service';
import { ServiceSolicitanteService } from '../services/service-solicitante.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard_solicitante  {

  constructor(private route: Router,
    private serviceSolicitante: ServiceSolicitanteService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.serviceSolicitante.isAuth_solicitante()) {
      console.log('estamos dentro');
    } else {
      console.log('Estamos fuera');
      this.route.navigateByUrl('/login');
    }
    return true;
  }

}
