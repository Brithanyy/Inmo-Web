import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { House } from '../../Models/House.model';
import { HouseService } from '../../Services/House/house.service';
import { CardHouseComponent } from "../card-house/card-house.component";
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-list-houses',
  standalone: true,
  imports: [
    CommonModule,
    CardHouseComponent,
    FooterComponent,
    NavbarComponent,
    HeaderComponent,
    RouterLink
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

      next: (arrayHouses) => this.houses = arrayHouses,
      
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
