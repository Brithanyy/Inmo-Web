import { Component, EventEmitter, inject, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
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

  @Input() siEstasEnGestion?: boolean;

  activatedRoute = inject(ActivatedRoute);
  servicioLand = inject(LandService);
  servicioReview = inject(ReviewService);
  router = inject(Router);

  landID?: string | null;
  landBuffer?: Land;
  currentImageIndex = 0;
  selectedImage: string | null = null;
  reviews?: Review[] = [];
  isLoading = true;
  mensajeExito?: string = '';
  mensajeError?: string = '';


  ngOnInit(): void {

    this.landID = this.activatedRoute.snapshot.paramMap.get('id');
    this.isLoading = true;

    this.servicioLand.getLand(this.landID).subscribe({

      next: (returnedLand) => {
        this.landBuffer = returnedLand;
        this.loadReviews();
      },

      error: (returnedError) => {
        this.mensajeError = "Error al obtener la propiedad";
        this.showMessageError();
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

        error: () => {
          this.mensajeError = 'Error al obtener las reseñas para la propiedad';
          this.showMessageError();
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

  eliminarLand() {
    
    this.servicioLand.deleteLand(String(this.landID)).subscribe({

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
    })
  }

  modificarLand() {
    this.router.navigate(['modify-land', this.landID]);
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

