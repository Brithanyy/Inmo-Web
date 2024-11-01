import { CommonModule } from '@angular/common';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { House } from '../../Models/House.model';
import { HouseService } from '../../Services/House/house.service';

@Component({
  selector: 'app-card-property',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink
  ],
  templateUrl: './card-property.component.html',
  styleUrl: './card-property.component.css'
})
export class CardPropertyComponent implements OnInit {

  @Input() houseID: number | undefined;

  house: House | undefined;

  houseService = inject(HouseService);

  //*Si es que aparece un error, lo interpolamos y mostramos un mensaje si es que esta variable no está vacía
  errorReturned?: string;

  ngOnInit(): void {
    
    if(this.houseID) {

      this.houseService.getHouse(this.houseID).subscribe({

        next: (returnedHouse) => this.house = returnedHouse,

        error: (errorReturned) => this.errorReturned = errorReturned.message
      });
    }
  }

  //*Completar la implementación del método
  showErrorMesagge() {

  }

  directToDetails() {

    //*Direccionar a la ruta details:/id
  }

}
