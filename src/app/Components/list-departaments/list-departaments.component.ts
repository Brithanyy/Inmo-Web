import { Component, inject, OnInit } from '@angular/core';
import { Departament } from '../../Models/Departament.model';
import { HouseService } from '../../Services/House/house.service';
import { DepartamentService } from '../../Services/Departament/departament.service';
import { CardDepartamentComponent } from "../card-departament/card-departament.component";

@Component({
  selector: 'app-list-departaments',
  standalone: true,
  imports: [CardDepartamentComponent],
  templateUrl: './list-departaments.component.html',
  styleUrl: './list-departaments.component.css'
})
export class ListDepartamentsComponent implements OnInit {


  departaments: Departament[] = [];

  houseService = inject(DepartamentService);

  errorReturned?: string;

  ngOnInit(): void {
    
    this.houseService.getDepartaments().subscribe({

      next: (arrayLands) => this.departaments = arrayLands.slice(0 , 3), //Nos traemos las tres primeras propiedades
      
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