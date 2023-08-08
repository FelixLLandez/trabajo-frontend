import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, map, throwError } from 'rxjs';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class ServiceSolicitanteService {

  constructor(private http: HttpClient){}

  agregar_solicitante(data: any): Observable<Request> {
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

  get_solicitantes() {
    return this.http.get('http://localhost:3000/api/users/solicitantes');
  }

  get_solic(id: any) {
    return this.http.get(`http://localhost:3000/api/users/usuario/${id}`);
  }

  modificar_solicitante(id:any, data:any){
    return this.http.patch(`http://localhost:3000/api/users/modificar/${id}`, data);
  }

  desactivar_administrador(data: any) {
    return this.http.patch(`http://localhost:3000/api/users/desactivar_user/${data}`, {});
  }

  get_solicitantes_archivados() {
    return this.http.get('http://localhost:3000/api/users/solicitantes_archivados');
  }

  activar_solicitante(data: any) {
    return this.http.patch(`http://localhost:3000/api/users/activar_user/${data}`, {});
  }
}
