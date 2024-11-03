import { Component, inject, Input, OnInit } from '@angular/core';
import { DepartamentService } from '../../Services/Departament/departament.service';
import { Departament } from '../../Models/Departament.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-departament',
  standalone: true,
  imports: [],
  templateUrl: './card-departament.component.html',
  styleUrl: './card-departament.component.css'
})
export class CardDepartamentComponent implements OnInit {

  router = inject(Router);

  @Input() departamentID: string | undefined;

  departament: Departament | undefined;

  departamentService = inject(DepartamentService);

  //*Si es que aparece un error, lo interpolamos y mostramos un mensaje si es que esta variable no está vacía
  errorReturned?: string;

  ngOnInit(): void {
    
    if(this.departamentID) {

      this.departamentService.getDepartament(this.departamentID).subscribe({

        next: (returnedDepartament) => this.departament = returnedDepartament,

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

    this.router.navigate(['departament-detail',  this.departamentID]);
  }

}
