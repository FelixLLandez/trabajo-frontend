import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/solicitante/rutas/postulantes/postulantes.component';

@Injectable({
  providedIn: 'root'
})
export class PostulanteService {

  constructor(private http: HttpClient) { }

  //FUNCIONES DEL MÓDULO DE "POSTULANTES" DEL ROL SOLICITANTE
  getActivePostulantes(): Observable<User[]> {
    return this.http.get<User[]>('http://localhost:3000/api/users/postulantesActivos');
  }  

  get_postulante(id: any) {
    return this.http.get(`http://localhost:3000/api/users/${id}`);
  }

}
