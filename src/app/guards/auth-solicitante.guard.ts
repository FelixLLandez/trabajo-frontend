import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SolicitanteService } from '../services/solicitante-service/solicitante.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard_solicitante  {

  constructor(private route: Router,
    private serviceSolicitante: SolicitanteService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.serviceSolicitante.isAuth_solicitante()) {
    } else {
      this.route.navigateByUrl('/login');
    }
    return true;
  }

}
