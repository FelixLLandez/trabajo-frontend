import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ServiceAdministradorService {

  //Variables del login del Administrador
  token_admin: any = "";
  user_admin: any = {};
  id_rol: any = {};
  id_user:any=[];

  constructor(private http: HttpClient) { }

  agregar_administrador(data: any): Observable<Request> {
    return this.http.post<Request>('http://localhost:3000/api/users/register', data);
  }

  login_administrador(data: any) {
    return this.http.post('http://localhost:3000/api/users/login', data);
  }

  guardarToken_admistrador(token: string) {
    localStorage.setItem('token', token);
  }

  guardaruser_administrador(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  isAuth_admin(): boolean {
    this.token_admin = localStorage.getItem('token') || null;
    this.user_admin = JSON.parse(localStorage.getItem('user') || 'null') || null;
    try {
      this.id_rol = this.user_admin.rol.id;
      this.id_user=this.user_admin.id;
    } catch (error) {
      console.log('error');

    }
    if (this.token_admin === null || this.user_admin === null || this.id_rol !== 1) {
      return false;
    } else {
      return true;
    }
  }

  rol_usuario() {
    this.user_admin = JSON.parse(localStorage.getItem('user') || 'null') || null;
    try {
      this.id_rol = this.user_admin.rol.id;
    } catch (error) {
      console.log('error');
    }
    console.log(this.id_rol);
    return this.id_rol;
  }

  get_administradores() {
    return this.http.get('http://localhost:3000/api/users/administradores');
  }

  get_admin(id: any) {
    return this.http.get(`http://localhost:3000/api/users/usuario/${id}`);
  }

  modificar_administrador(data: any): Observable<Request> {
    return this.http.patch<Request>('http://localhost:3000/api/users/modificar/', data);
  }

  desactivar_administrador(data: any) {
    return this.http.patch(`http://localhost:3000/api/users/desactivar_user/${data}`, {});
  }

  get_administradores_archivados() {
    return this.http.get('http://localhost:3000/api/users/administradores_archivados');
  }

  activar_administrador(data: any) {
    return this.http.patch(`http://localhost:3000/api/users/activar_user/${data}`, {});
  }

  get_datos_perfil(){
    return this.http.get(`http://localhost:3000/api/users/usuario/${this.id_user}`);
  }

  modificar_admin(data:any){
    return this.http.patch(`http://localhost:3000/api/users/modificar/${this.id_user}`, data);
  }
  
}
