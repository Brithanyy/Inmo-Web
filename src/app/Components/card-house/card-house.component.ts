import { Component, inject, Inject, Input, OnInit } from '@angular/core';
import { HouseService } from '../../Services/House/house.service';
import { House } from '../../Models/House.model';

@Component({
  selector: 'app-card-house',
  standalone: true,
  imports: [],
  templateUrl: './card-house.component.html',
  styleUrl: './card-house.component.css'
})
export class CardHouseComponent implements OnInit {

  @Input() houseID: string | undefined;

  house: House | undefined;

  houseService = inject(HouseService);

  //*Si es que aparece un error, lo interpolamos y mostramos un mensaje si es que esta variable no está vacía
  errorReturned?: string;

  ngOnInit(): void {
    
    if(this.houseID) {

      this.houseService.getHouse(this.houseID).subscribe({

        next: (returnedHouse) => this.house = returnedHouse,

        error: (errorReturned) =>  {

          this.errorReturned = errorReturned.message
          this.showErrorMessage();
        }
      });
    }
  }

  showErrorMessage() {
    if (this.errorReturned) {
      alert(`Error al cargar la propiedad: ${this.errorReturned}`);
    }
  }

  directToDetails() {

    //*Direccionar a la ruta details:/id
  }

}
