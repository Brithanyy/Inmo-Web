import { Component, inject, Input, OnInit } from '@angular/core';
import { DepartamentService } from '../../Services/Departament/departament.service';
import { Departament } from '../../Models/Departament.model';

@Component({
  selector: 'app-card-departament',
  standalone: true,
  imports: [],
  templateUrl: './card-departament.component.html',
  styleUrl: './card-departament.component.css'
})
export class CardDepartamentComponent implements OnInit {

  @Input() departamentID: number | undefined;

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

    //*Direccionar a la ruta details:/id
  }

}
