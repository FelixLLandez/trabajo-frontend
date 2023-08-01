import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiurl = 'http://localhost:3000/api'; // Ruta global

  constructor(private http: HttpClient) { }

  registro(data: any, rolId: string): Observable<any> {
    const url = `${this.apiurl}/users/register`;
    const formData = { ...data, rolId }; // Incluir el ID del rol en el formData
    return this.http.post<any>(url, formData);
  }  

  getRoles(): Observable<any> {
    const url = `${this.apiurl}/rol/roles`;
    return this.http.get<any>(url);
  }  
}
