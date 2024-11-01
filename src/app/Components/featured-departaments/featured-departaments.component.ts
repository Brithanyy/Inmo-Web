import { Component, inject, OnInit } from '@angular/core';
import { Departament } from '../../Models/Departament.model';
import { DepartamentService } from '../../Services/Departament/departament.service';
import { CardDepartamentComponent } from "../card-departament/card-departament.component";
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-featured-departaments',
  standalone: true,
  imports: [
    CardDepartamentComponent,
    FooterComponent,
    NavbarComponent
  ],
  templateUrl: './featured-departaments.component.html',
  styleUrl: './featured-departaments.component.css'
})
export class FeaturedDepartamentsComponent implements OnInit {


  departaments: Departament[] = [];

  departamentService = inject(DepartamentService);

  errorReturned?: string;

  ngOnInit(): void {
    
    this.departamentService.getDepartaments().subscribe({

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