import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostulanteService {

  constructor(private http:HttpClient) { }

    //FUNCIONES DEL MÓDULO DE "POSTULANTES" DEL ROL SOLICITANTE
    getUsuariosByRolId(rolId: number): Observable<any> {
      return this.http.get<any>(`http://localhost:3000/api/users?rolId=${rolId}`);
    }
}
