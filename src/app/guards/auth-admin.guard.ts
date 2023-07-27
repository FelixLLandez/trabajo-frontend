import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';

import { ServiceAdministradorService } from '../services/service-administrador.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard_admin  {

  constructor(private route: Router,
    private serviceAdmin: ServiceAdministradorService) {
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if (this.serviceAdmin.isAuth_admin()) {
      console.log('estamos dentro');
    } else {
      console.log('Estamos fuera');
      this.route.navigateByUrl('/login-administrador');
    }
    return true;
  }

}
