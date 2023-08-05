import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServiceSolicitanteService {

  constructor(private http: HttpClient) { }

  token_solicitante: any = "";
  user_solicitante: any = {};
  id_rol: any = {};

  login_solicitante(data: any): Observable<Request> {
    return this.http.post<Request>('http://localhost:3000/api/users/login', data);
  }

  guardarToken_solicitante(token: string) {
    localStorage.setItem('token', token);
  }
  
  guardaruser_solicitante(user: any) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  isAuth_solicitante(): boolean {
    this.token_solicitante = localStorage.getItem('token') || null;
    this.user_solicitante = JSON.parse(localStorage.getItem('user') || 'null') || null;
    try {
      this.id_rol = this.user_solicitante.rol.id;
    } catch (error) {
      console.log('error');

    }
    if (this.token_solicitante === null || this.user_solicitante === null || this.id_rol !== 2) {
      return false;
    } else {
      return true;
    }
  }

  addTrabajo(data: any, userId: number): Observable<any> {
    return this.http.post<any>(`http://localhost:3000/api/trabajos/crearTrabajo?usuario=${userId}`, data);
  }  

  getAllTrabajos(): Observable<any> {
    return this.http.get<any>('http://localhost:3000/api/trabajos/allTrabajos');
  }  

  eliminarTrabajo(id: number): Observable<any> {
    return this.http.delete<any>(`http://localhost:3000/api/trabajos/${id}`);
  }  

  getTrabajoByID(id: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/trabajos/${id}`)
  }

  getLoggedInUserId(): number {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    return user ? user.id : 0; // Si no está logueado, retorna 0 o el valor adecuado
  }

  getTrabajosBySolicitanteId(solicitanteId: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/users/${solicitanteId}`);
  }

  desactivar_trabajo(id: number) {
    return this.http.delete(`http://localhost:3000/api/trabajos/${id}`);
  }

  updateTrabajo(id: number, data: any): Observable<any> {
    return this.http.patch<any>(`http://localhost:3000/api/trabajos/${id}`, data);
  }
    
}
