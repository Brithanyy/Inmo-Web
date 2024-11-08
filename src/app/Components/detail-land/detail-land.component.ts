import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute} from '@angular/router';
import { LandService } from '../../Services/Land/land.service';
import { Land } from '../../Models/Land.model';
import { CommonModule } from '@angular/common';

import { FormReviewComponent } from '../../Components/form-review/form-review.component';
import { ReviewService } from '../../Services/Review/review.service';
import { Review } from '../../Models/Review.model';


@Component({
  selector: 'app-detail-land',
  standalone: true,
  imports: [
    CommonModule,
    FormReviewComponent
  ],
  templateUrl: './detail-land.component.html',
  styleUrl: './detail-land.component.css'
})
export class DetailLandComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  servicioLand = inject(LandService);
  servicioReview = inject(ReviewService);

  landID?: string | null;
  landBuffer?: Land;
  currentImageIndex = 0;
  selectedImage: string | null = null;
  errorServicioLand?: string;

  reviews?: Review[] = [];
  errorServicioResena?: string;
  isLoading = true;

  ngOnInit(): void {

    this.landID = this.activatedRoute.snapshot.paramMap.get('id');
    this.isLoading = true;

    this.servicioLand.getLand(this.landID).subscribe({

      next: (returnedLand) => {
        this.landBuffer = returnedLand;
        this.loadReviews();
      },

      error: (returnedError) => {
        this.errorServicioLand = returnedError.message;
        this.showErrorMessage(this.errorServicioLand);
        this.isLoading = false;
      }
    });
  }

  loadReviews() {

    if (this.landBuffer) {

      this.servicioReview.getReviews().subscribe({

        next: (returnedReviews) => {
          this.reviews = returnedReviews
            .filter(review => review.idPropiedad === this.landBuffer?.id && review.tipoPropiedad === "Terreno")
            .map(review => ({
              ...review,
              estrellas: review.estrellas || 0 
            }));
          this.isLoading = false;
        },

        error: (returnedError) => {
          this.errorServicioResena = returnedError.message;
          this.showErrorMessage(this.errorServicioResena);
          this.isLoading = false;
        }
      });
    }
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

  showErrorMessage(error: string | undefined) {
    if (error) {
      alert(`Error: ${error}`);
    }
  }
}

