import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Departament } from '../../Models/Departament.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  constructor() { }

  urlBase: string = "http://localhost:3000/Departament";

  peticionesHTTP = inject(HttpClient);

  getDepartaments(): Observable<Departament[]> {

    return this.peticionesHTTP.get<Departament[]>(this.urlBase);
  }

  getDepartament(id: string | null): Observable<Departament> {

    return this.peticionesHTTP.get<Departament>(this.urlBase + "/" + id);
  }

  addDepartament(departament: Departament): Observable<Departament> {

    return this.peticionesHTTP.post<Departament>(this.urlBase, departament);
  }

  deleteDepartament(id: string | undefined): Observable<Departament> {

    return this.peticionesHTTP.delete<Departament>(this.urlBase + "/" + id);
  }

  modifyDepartament(id: string | null, departament: Departament): Observable<Departament> {

    return this.peticionesHTTP.put<Departament>(this.urlBase + "/" + id, departament);
  } 
}
