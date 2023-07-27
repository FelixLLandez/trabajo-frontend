import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceSolicitanteService {

  constructor() { }

  token_solicitante:any="";
  user_solicitante:any={};
  id_rol:any={};

  isAuth_solicitante():boolean{
    this.token_solicitante = localStorage.getItem('token') || null;
    this.user_solicitante = JSON.parse(localStorage.getItem('user') || 'null') || null;
    try{
      this.id_rol = this.user_solicitante.rol.id;
    }catch (error){
      console.log('error');
      
    }

    if (this.token_solicitante === null || this.user_solicitante === null || this.id_rol !== 1) {
      return false;
    } else {
      return true;
    }
  }
}
