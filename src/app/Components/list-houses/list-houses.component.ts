import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { House } from '../../Models/House.model';
import { HouseService } from '../../Services/House/house.service';
import { CardHouseComponent } from "../card-house/card-house.component";

@Component({
  selector: 'app-list-houses',
  standalone: true,
  imports: [
    CommonModule,
    CardHouseComponent
],
  templateUrl: './list-houses.component.html',
  styleUrl: './list-houses.component.css'
})
export class ListHousesComponent implements OnInit {


  houses: House[] = [];

  houseService = inject(HouseService);

  errorReturned?: string;

  ngOnInit(): void {
    
    this.houseService.getHouses().subscribe({

      next: (arrayHouses) => this.houses = arrayHouses.slice(0 , 3), //Nos traemos las tres primeras propiedades
      
      error: (errorReturned) => {

        this.errorReturned = errorReturned.message
        this.showErrorMessage();
      }
    });
    
  }

  showErrorMessage() {
    if (this.errorReturned) {
      alert(`Error al cargar las propiedades: ${this.errorReturned}`);
    }
  }
}
