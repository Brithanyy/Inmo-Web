import { Component, inject, OnInit } from '@angular/core';
import { Departament } from '../../Models/Departament.model';
import { DepartamentService } from '../../Services/Departament/departament.service';
import { CardDepartamentComponent } from "../card-departament/card-departament.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-departaments',
  standalone: true,
  imports: [
    CardDepartamentComponent
],
  templateUrl: './list-departaments.component.html',
  styleUrl: './list-departaments.component.css'
})
export class ListDepartamentsComponent implements OnInit {

  departaments: Departament[] = [];

  departamentService = inject(DepartamentService);

  errorReturned?: string;

  ngOnInit(): void {
    
    this.departamentService.getDepartaments().subscribe({

      next: (arrayDepartaments) => this.departaments = arrayDepartaments,
      
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