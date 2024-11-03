import { Component, inject, Input, OnInit } from '@angular/core';
import { Land } from '../../Models/Land.model';
import { LandService } from '../../Services/Land/land.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card-land',
  standalone: true,
  imports: [],
  templateUrl: './card-land.component.html',
  styleUrl: './card-land.component.css'
})
export class CardLandComponent implements OnInit {

  router  = inject(Router);

  @Input() landID: string | undefined;

  land: Land | undefined;

  landService = inject(LandService);

  //*Si es que aparece un error, lo interpolamos y mostramos un mensaje si es que esta variable no está vacía
  errorReturned?: string;

  ngOnInit(): void {
    
    if(this.landID) {

      this.landService.getLand(this.landID).subscribe({

        next: (returnedLand) => this.land = returnedLand,

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

    this.router.navigate(['land-detail',  this.landID]);
  }

}
