import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HouseService } from '../../Services/House/house.service';
import { House } from '../../Models/House.model';
import { CommonModule } from '@angular/common';
import { FormReviewComponent } from "../../Components/form-review/form-review.component";
import { Review } from '../../Models/Review.model';
import { ReviewService } from '../../Services/Review/review.service';

@Component({
  selector: 'app-detail-house',
  standalone: true,
  imports: [
    CommonModule,
    FormReviewComponent
  ],
  templateUrl: './detail-house.component.html',
  styleUrl: './detail-house.component.css'
})
export class DetailHouseComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  servicioHouse = inject(HouseService);
  servicioReview = inject(ReviewService); 

  tipoPropiedad = 'Casa'; 
  houseID?: string | null;
  houseBuffer?: House;
  currentImageIndex = 0;
  selectedImage: string | null = null;
  errorServicioHouse?: string;

  reviews?: Review[] = [];
  errorServicioResena?: string;
  isLoading = true; 

  ngOnInit(): void {

    this.houseID = this.activatedRoute.snapshot.paramMap.get('id');
    this.isLoading = true;
  
    this.servicioHouse.getHouse(this.houseID).subscribe({

      next: (returnedHouse) => {
        this.houseBuffer = returnedHouse;
        this.loadReviews();
      },

      error: (returnedError) => {
        this.errorServicioHouse = returnedError.mesagge;
        this.showErrorMessage(this.errorServicioHouse);
        this.isLoading = false;
      }
    });
  }

  loadReviews() {

    if (this.houseBuffer) {

      this.servicioReview.getReviews().subscribe({

        next: (returnedReviews) => {
          this.reviews = returnedReviews
            .filter(review => review.idPropiedad === this.houseBuffer?.id && review.tipoPropiedad === "Casa")
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
    if (this.houseBuffer && this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  nextImage() {
    if (this.houseBuffer && this.currentImageIndex < this.houseBuffer.imagenes.length - 1) {
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
      alert(`Error al cargar las reseña: ${error}`);
    }
  }
}

