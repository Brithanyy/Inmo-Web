import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { LandService } from '../../Services/Land/land.service';
import { Land } from '../../Models/Land.model';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { FormReviewComponent } from '../../Components/form-review/form-review.component';

@Component({
  selector: 'app-land-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    FormReviewComponent
],
  templateUrl: './land-detail.component.html',
  styleUrl: './land-detail.component.css'
})
export class LandDetailComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  servicioLand = inject(LandService);
  landID?: string | null;
  landBuffer?: Land;
  currentImageIndex = 0;
  selectedImage: string | null = null;
  error?: string;

  ngOnInit(): void {
    
    this.landID = this.activatedRoute.snapshot.paramMap.get('id');

    this.servicioLand.getLand(this.landID).subscribe({

      next: (returnedLand) => this.landBuffer = returnedLand,
      error: (returnedError) => alert("Error: " + returnedError.mesagge)
    });
  }

  prevImage() {
    if (this.landBuffer && this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  nextImage() {
    if (this.landBuffer && this.currentImageIndex < this.landBuffer.imagenes.length - 1) {
      this.currentImageIndex++;
    }
  }

  openImage(image: string) {
    this.selectedImage = image;
  }

  closeImage() {
    this.selectedImage = null;
  }

  showErrorMessage() {
    if (this.error) {
      alert(`Error al agregar una reseña: ${this.error}`);
    }
  }
}
