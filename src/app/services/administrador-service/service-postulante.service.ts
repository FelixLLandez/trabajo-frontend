import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ServicePostulanteService {

  constructor(private http: HttpClient) { }

  agregar_postulante(data: any): Observable<Request> {
    return this.http.post<Request>('http://localhost:3000/api/users/register', data).pipe(
      catchError(error=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Error al registrar al usuario',
          showConfirmButton:true  
        });
        return throwError('');
      })
    )
  }

  get_postulantes() {
    return this.http.get('http://localhost:3000/api/users/postulantes');
  }

  get_postulante(id: any) {
    return this.http.get(`http://localhost:3000/api/users/usuario/${id}`);
  }

  modificar_postulante(id:any, data:any){
    return this.http.patch(`http://localhost:3000/api/users/modificar/${id}`, data);
  }

  desactivar_postulante(data: any) {
    return this.http.patch(`http://localhost:3000/api/users/desactivar_user/${data}`, {});
  }

  get_postulantes_archivados() {
    return this.http.get('http://localhost:3000/api/users/postulantes_archivados');
  }

  activar_postulante(data: any) {
    return this.http.patch(`http://localhost:3000/api/users/activar_user/${data}`, {});
  }
}
