import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CardPropertyComponent } from '../card-property/card-property.component';
import { House } from '../../Models/House.model';
import { HouseService } from '../../Services/House/house.service';
import { NotExpr } from '@angular/compiler';

@Component({
  selector: 'app-list-houses',
  standalone: true,
  imports: [
    CommonModule,
    CardPropertyComponent
  ],
  templateUrl: './list-houses.component.html',
  styleUrl: './list-houses.component.css'
})
export class ListHousesComponent implements OnInit {


  houses: House[] = [];
  houseService = inject(HouseService);

  //*Si es que aparece un error, lo interpolamos y mostramos un mensaje si es que esta variable no está vacía
  errorReturned?: string;

  ngOnInit(): void {
    
    this.houseService.getHouses().subscribe({

      next: (arrayHouses) => this.houses = arrayHouses.slice(0 , 3), //Nos traemos las tres primeras propiedades
      
      error: (errorReturned) => this.errorReturned = errorReturned.message

    });
    
  }

  //*Completar la implementación del método
  showErrorMesagge() {

  }
}
