import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { CardHouseComponent } from "../card-house/card-house.component";
import { FooterComponent } from "../footer/footer.component";
import { NavbarComponent } from "../navbar/navbar.component";
import { Land } from '../../Models/Land.model';
import { LandService } from '../../Services/Land/land.service';
import { CardLandComponent } from "../card-land/card-land.component";

@Component({
  selector: 'app-featured-lands',
  standalone: true,
  imports: [
    CommonModule,
    CardHouseComponent,
    FooterComponent,
    NavbarComponent,
    CardLandComponent
],
  templateUrl: './featured-lands.component.html',
  styleUrl: './featured-lands.component.css'
})
export class FeaturedLandsComponent implements OnInit {


  lands: Land[] = [];

  landService = inject(LandService);

  errorReturned?: string;

  ngOnInit(): void {
    
    this.landService.getLands().subscribe({

      next: (arrayLands) => this.lands = arrayLands.slice(0 , 3), //Nos traemos las tres primeras propiedades
      
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
