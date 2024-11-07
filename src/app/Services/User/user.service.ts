import { inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../Models/User.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  peticionesHTTP = inject(HttpClient);
  urlBase = 'http://localhost:3000/Usuario';

  getAllUsers(): Observable<User[]> {
    return this.peticionesHTTP.get<User[]>(this.urlBase);
  }

  getUserByCredentials(username: string, password: string): Observable<User[]> {
    return this.peticionesHTTP.get<User[]>(`${this.urlBase}?userName=${username}&password=${password}`);
  }

  updateUserLoggedStatus(id: string, status: boolean): Observable<User> {
    return this.peticionesHTTP.patch<User>(`${this.urlBase}/${id}`, { estaLogueado: status });
  }
}
