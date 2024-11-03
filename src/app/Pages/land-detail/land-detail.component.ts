import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LandService } from '../../Services/Land/land.service';
import { Land } from '../../Models/Land.model';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";

@Component({
  selector: 'app-land-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent
],
  templateUrl: './land-detail.component.html',
  styleUrl: './land-detail.component.css'
})
export class LandDetailComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  servicioLand = inject(LandService);
  landID?: string | null;
  landBuffer?: Land;

  ngOnInit(): void {
    
    this.landID = this.activatedRoute.snapshot.paramMap.get('id');

    this.servicioLand.getLand(this.landID).subscribe({

      next: (returnedLand) => this.landBuffer = returnedLand,
      error: (returnedError) => alert("Error: " + returnedError.mesagge)
    });
  }
}
