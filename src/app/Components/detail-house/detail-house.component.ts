import { Component, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
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

  @Input() siEstasEnGestion?: boolean;

  activatedRoute = inject(ActivatedRoute);
  router = inject(Router); 
  servicioHouse = inject(HouseService);
  servicioReview = inject(ReviewService); 

  tipoPropiedad = 'Casa'; 
  houseID?: string | null;
  houseBuffer?: House;
  currentImageIndex = 0;
  selectedImage: string | null = null;

  reviews?: Review[] = [];
  isLoading = true; 
  mensajeExito?: string = '';
  mensajeError?: string = '';

  ngOnInit(): void {

    this.houseID = this.activatedRoute.snapshot.paramMap.get('id');
    this.isLoading = true;
  
    this.servicioHouse.getHouse(this.houseID).subscribe({

      next: (returnedHouse) => {
        this.houseBuffer = returnedHouse;
        this.loadReviews();
      },

      error: () => {
        this.mensajeError = "Error al obtener la propiedad";
        this.showMessageError();
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

        error: () => {

          this.mensajeError = 'Error al obtener las reseñas para la propiedad';
          this.showMessageError();
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

  eliminarHouse() { 

    this.servicioHouse.deleteHouse(String(this.houseID)).subscribe({

      next: () => {

        this.mensajeExito = "Propiedad eliminada con éxito";
        this.showMessage();

        setTimeout(() => {
          this.router.navigate(['management-home']);
        }, 3000);
      },

      error: () => {
        this.mensajeError = "Error al eliminar la propiedad";
        this.showMessageError();

        setTimeout(() => {
          this.router.navigate(['management-home']);
        }, 3000);
      }
    });
  }

  modificarHouse() { 

    this.router.navigate(['modify-house', this.houseID]);
  }

  eliminarResenia(idReseña: string | undefined) {

    this.servicioReview.deleteReview(idReseña).subscribe({

      next: () => {
          this.reviews = this.reviews?.filter(review => review.id !== idReseña);

          this.mensajeExito = "Reseña eliminada con éxito";
          this.showMessage();
      },
      error: () => {
          this.mensajeError = "Error al eliminar la reseña";
          this.showMessageError();
      }
  });
  }

  showMessage() {

    setTimeout(() => {
      
      this.mensajeExito = '';

    }, 3000);
  }

  showMessageError() {

    setTimeout(() => {
      
      this.mensajeError = '';

    }, 3000);
  }
}

