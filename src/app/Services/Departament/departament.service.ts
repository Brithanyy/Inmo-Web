import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DepartamentService {

  constructor() { }

  urlBase: string = "http://localhost:3000/Departament";
}
