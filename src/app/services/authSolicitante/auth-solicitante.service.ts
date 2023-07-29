import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  apiurl = 'http://localhost:3000/api/users'; // Ruta global

  constructor(private http: HttpClient) { }

  registro(userData: any) {
    const url = `${this.apiurl}/register`;
    return this.http.post(url, userData);
  }
}
