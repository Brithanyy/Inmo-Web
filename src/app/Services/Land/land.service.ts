import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Land } from '../../Models/Land.model';

@Injectable({
  providedIn: 'root'
})
export class LandService {

  constructor() { }

  urlBase: string = "http://localhost:3000/Land";

  peticionesHTTP = inject(HttpClient);

  getLands(): Observable<Land[]> {

    return this.peticionesHTTP.get<Land[]>(this.urlBase);
  }

  getLand(id: string | null): Observable<Land> {

    return this.peticionesHTTP.get<Land>(this.urlBase + "/" + id);
  }

  addLand(land: Land): Observable<Land> {

    return this.peticionesHTTP.post<Land>(this.urlBase, land);
  }

  deleteLand(id: string | undefined): Observable<Land> {

    return this.peticionesHTTP.delete<Land>(this.urlBase + "/" + id);
  }

  modifyLand(id: string | null, land: Land): Observable<Land> {

    return this.peticionesHTTP.put<Land>(this.urlBase + "/" + id, land);
  } 
}
