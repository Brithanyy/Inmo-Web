import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DepartamentService } from '../../Services/Departament/departament.service';
import { Departament } from '../../Models/Departament.model';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { FormReviewComponent } from '../../Components/form-review/form-review.component';
import { ReviewService } from '../../Services/Review/review.service';
import { Review } from '../../Models/Review.model';

@Component({
  selector: 'app-departament-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    FormReviewComponent
],
  templateUrl: './departament-detail.component.html',
  styleUrl: './departament-detail.component.css'
})
export class DepartamentDetailComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  servicioDepartament = inject(DepartamentService);
  servicioReview = inject(ReviewService);

  departamentID?: string | null;
  departamentBuffer?: Departament;
  currentImageIndex = 0;
  selectedImage: string | null = null;
  errorServicioDepartament?: string;

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
}
