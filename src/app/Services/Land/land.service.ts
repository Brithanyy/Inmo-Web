import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LandService {

  constructor() { }

  urlBase: string = "http://localhost:3000/Land";
}
