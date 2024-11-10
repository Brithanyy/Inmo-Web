import { Component, inject, OnInit } from '@angular/core';
import { Land } from '../../Models/Land.model';
import { LandService } from '../../Services/Land/land.service';
import { CardLandComponent } from "../card-land/card-land.component";

@Component({
  selector: 'app-list-lands',
  standalone: true,
  imports: [
    CardLandComponent,
],
  templateUrl: './list-lands.component.html',
  styleUrl: './list-lands.component.css'
})
export class ListLandsComponent implements OnInit {


  lands: Land[] = [];

  landService = inject(LandService);

  errorReturned?: string;

  ngOnInit(): void {
    
    this.landService.getLands().subscribe({

      next: (arrayLands) => this.lands = arrayLands,
      
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
