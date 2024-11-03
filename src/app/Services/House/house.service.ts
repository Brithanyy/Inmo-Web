import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { House } from '../../Models/House.model';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor() { }

  urlBase: string = "http://localhost:3000/House";
  peticionesHTTP = inject(HttpClient);

  getHouses(): Observable<House[]> {

    return this.peticionesHTTP.get<House[]>(this.urlBase);
  }

  getHouse(id: string | null): Observable<House> {

    return this.peticionesHTTP.get<House>(this.urlBase + "/" + id);
  }

  addHouse(house: House): Observable<House> {

    return this.peticionesHTTP.post<House>(this.urlBase, house);
  }

  deleteHouse(id: string | undefined): Observable<House> {

    return this.peticionesHTTP.delete<House>(this.urlBase + "/" + id);
  }

  modifyHouse(id: string | null, house: House): Observable<House> {

    return this.peticionesHTTP.put<House>(this.urlBase + "/" + id, house);
  } 
}
