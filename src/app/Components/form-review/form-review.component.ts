import { Component, inject, Input } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Review } from '../../Models/Review.model';
import { ReviewService } from '../../Services/Review/review.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-form-review',
  standalone: true,
  imports: [
    CommonModule,
    ReactiveFormsModule
  ],
  templateUrl: './form-review.component.html',
  styleUrl: './form-review.component.css'
})
export class FormReviewComponent {

  @Input() idPropiedad?: string;
  @Input() tipoPropiedad?: string;
  mensaje?: string;
  error?: string;
  reviewService = inject(ReviewService);
  formBuiler = inject(FormBuilder);
  formAdd = this.formBuiler.nonNullable.group({

    usuario: ['', Validators.required],
    comentario: ['', Validators.required],
    estrellas: [1, [Validators.required, Validators.min(1), Validators.max(5)]],
  });

  onSubmit() {

    if(this.formAdd.valid) {

      const fechaActual = new Date().toISOString();

      const newReview: Review = {
        tipoPropiedad: this.tipoPropiedad,
        idPropiedad: this.idPropiedad,
        ...this.formAdd.value,
        fecha: fechaActual, 
      };

      this.reviewService.addReview(newReview).subscribe({

        next: (returnedRview) => alert("Tipo propiedad: " + returnedRview.tipoPropiedad + " ID: " + returnedRview.idPropiedad + " Usuario: " + returnedRview.usuario),

        error: (returnedError) => {
          this.mensaje = returnedError.mesagge;
          this.showErrorMessage();
        }
      });

      this.formAdd.reset();
    }
  }

  showErrorMessage() {
    if (this.error) {
      alert(`Error al agregar una reseña: ${this.error}`);
    }
  }
}