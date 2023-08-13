import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostulanteService {

    constructor(private http: HttpClient) { }
  
    apiurl = 'http://localhost:3000/api'; // Ruta global
  
    registro(formData: any): Observable<any> {
      const url = `${this.apiurl}/postulantes/register`;
      return this.http.post<any>(url, formData);
    }
  
    getRoles(): Observable<any> {
      const url = `${this.apiurl}/rol/roles`;
      return this.http.get<any>(url);
    }
  
    token_postulante: any = "";
    user_postulante: any = {};
    id_rol: any = {};
  
    login_postulante(data: any): Observable<Request> {
      return this.http.post<Request>('http://localhost:3000/api/postulantes/login', data);
    }
  
    guardarToken_postulante(token: string) {
      localStorage.setItem('token', token);
    }
  
    guardaruser_postulante(user: any) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  
    isAuth_postulante(): boolean {
      this.token_postulante = localStorage.getItem('token') || null;
      this.user_postulante = JSON.parse(localStorage.getItem('user') || 'null') || null;
      try {
        this.id_rol = this.user_postulante.rol.id;
      } catch (error) {
        console.log('error');
      }
      if (this.token_postulante === null || this.user_postulante === null || this.id_rol !== 3) {
        return true;
      } else {
        return false;
      }
    }
  
    // Resto de los métodos adaptados para los postulantes...

    
  //FUNCIONES DE LA SECCION DE TRABAJOS DEL SOLICITANTE
  getLoggedInUserId(): number {
    const user = JSON.parse(localStorage.getItem('user') || 'null');
    return user ? user.id : 0;
  }

  getTrabajosBySolicitanteId(solicitanteId: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/users/${solicitanteId}`);
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

  desactivar_trabajo(id: number): Observable<any> {
    return this.http.patch<any>(`http://localhost:3000/api/trabajos/desactivar_trabajo/${id}`, { estate: false });
  }

  updateTrabajo(id: number, data: any): Observable<any> {
    return this.http.patch<any>(`http://localhost:3000/api/trabajos/${id}`, data);
  }


  //FUNCIONES DE LA SECCION DE EDITAR PERFIL DEL SOLICITANTE
  updatePerfil(id: number, data: any): Observable<any> {
    return this.http.patch<any>(`http://localhost:3000/api/users/${id}`, data);
  }

  //FUNCIONES DE LA SECCION DE TRABAJOS ARCHIVADOS DEL SOLICITANTE

  activar_trabajo(id: number): Observable<any> {
    return this.http.patch<any>(`http://localhost:3000/api/trabajos/activar_trabajo/${id}`, { estate: true });
  }


  //FUNCIONES DE LA SECCION DE POSTULANTES
  getUsuariosByRolId(rolId: number): Observable<any> {
    return this.http.get<any>(`http://localhost:3000/api/users?rolId=${rolId}`);
  }
  }
