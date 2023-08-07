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
}
