import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HouseService {

  constructor() { }

  urlBase: string = "http://localhost:3000/House";
}
