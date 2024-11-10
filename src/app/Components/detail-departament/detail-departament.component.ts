import { Component, EventEmitter, inject, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router} from '@angular/router';
import { DepartamentService } from '../../Services/Departament/departament.service';
import { Departament } from '../../Models/Departament.model';
import { CommonModule } from '@angular/common';
import { FormReviewComponent } from '../../Components/form-review/form-review.component';
import { ReviewService } from '../../Services/Review/review.service';
import { Review } from '../../Models/Review.model';

@Component({
  selector: 'app-detail-departament',
  standalone: true,
  imports: [
    CommonModule,
    FormReviewComponent
  ],
  templateUrl: './detail-departament.component.html',
  styleUrl: './detail-departament.component.css'
})
export class DetailDepartamentComponent implements OnInit {

  @Input() siEstasEnGestion?: boolean;

  activatedRoute = inject(ActivatedRoute);
  servicioDepartament = inject(DepartamentService);
  servicioReview = inject(ReviewService);
  router = inject(Router);
  
  departamentID?: string | null;
  departamentBuffer?: Departament;
  currentImageIndex = 0;
  selectedImage: string | null = null;
  errorServicioDepartament?: string;
  mensajeServicioDepartament?: string;
  mensajeResenia?: string = '';
  errorResenia?: string = '';

  reviews?: Review[] = [];
  errorServicioResena?: string;
  isLoading = true;

  ngOnInit(): void {

    this.departamentID = this.activatedRoute.snapshot.paramMap.get('id');
    this.isLoading = true;
  
    this.servicioDepartament.getDepartament(this.departamentID).subscribe({

      next: (returnedDepartament) => {
        this.departamentBuffer = returnedDepartament;
        this.loadReviews();
      },

      error: (returnedError) => {
        this.errorServicioDepartament = returnedError.mesagge;
        this.showErrorMessage(this.errorServicioDepartament);
        this.isLoading = false;
      }
    });
  }

  loadReviews() {

    if (this.departamentBuffer) {

      this.servicioReview.getReviews().subscribe({

        next: (returnedReviews) => {
          this.reviews = returnedReviews
            .filter(review => review.idPropiedad === this.departamentBuffer?.id && review.tipoPropiedad === "Departamento")
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
    if (this.departamentBuffer && this.currentImageIndex > 0) {
      this.currentImageIndex--;
    }
  }

  nextImage() {
    if (this.departamentBuffer && this.currentImageIndex < this.departamentBuffer.imagenes.length - 1) {
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

  eliminarDepartament() {

    this.servicioDepartament.deleteDepartament(String(this.departamentID)).subscribe({

      next: () => {

        this.mensajeServicioDepartament = "Propiedad eliminada con éxito";
        this.showErrorMessage(this.mensajeServicioDepartament);
        this.router.navigate(['management-home']);
      },

      error: () => {
        this.mensajeServicioDepartament = "Error al eliminar la propiedad";
        this.showErrorMessage(this.mensajeServicioDepartament);
      }
    })
  }

  modificarDepartament() {
    this.router.navigate(['modify-departament', this.departamentID]);
  }

  eliminarResenia(idReseña: string | undefined) {

    this.servicioReview.deleteReview(idReseña).subscribe({

      next: () => {
          this.reviews = this.reviews?.filter(review => review.id !== idReseña);
          this.mensajeResenia = "Reseña eliminada con éxito";
          this.showMessageReseña();
      },
      error: (error) => {
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
