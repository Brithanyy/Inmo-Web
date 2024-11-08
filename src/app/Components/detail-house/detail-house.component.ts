import { Component, EventEmitter, inject, Input, OnInit } from '@angular/core';
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
  errorServicioHouse?: string;
  mensajeServicioHouse?: string; 

  reviews?: Review[] = [];
  errorServicioResena?: string;
  isLoading = true; 
  mensajeResenia?: string = '';
  errorResenia?: string = '';

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

  eliminarHouse() { 

    this.servicioHouse.deleteHouse(String(this.houseID)).subscribe({

      next: () => {

        this.mensajeServicioHouse = "Propiedad eliminada con éxito";
        this.showErrorMessage(this.mensajeServicioHouse);
        this.router.navigate(['management-home']);
      },

      error: () => {
        this.mensajeServicioHouse = "Error al eliminar la propiedad";
        this.showErrorMessage(this.mensajeServicioHouse);
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
          this.mensajeResenia = "Reseña eliminada con éxito";
          this.showMessageReseña();
      },
      error: () => {
          this.errorServicioResena = "Error al eliminar la reseña";
          this.showErrorReseña();
      }
  });
  }

  showMessageReseña() {

    setTimeout(() => {
      
      this.mensajeResenia = '';

    }, 3000);
  }

  showErrorReseña() {

    setTimeout(() => {
      
      this.errorResenia = '';

    }, 3000);
  }
}

