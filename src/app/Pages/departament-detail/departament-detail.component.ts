import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DepartamentService } from '../../Services/Departament/departament.service';
import { Departament } from '../../Models/Departament.model';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { FormReviewComponent } from '../../Components/form-review/form-review.component';

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
  departamentID?: string | null;
  departamentBuffer?: Departament;
  currentImageIndex = 0;
  selectedImage: string | null = null;
  error?: string;

  ngOnInit(): void {
    
    this.departamentID = this.activatedRoute.snapshot.paramMap.get('id');

    this.servicioDepartament.getDepartament(this.departamentID).subscribe({

      next: (returnedDepartament) => this.departamentBuffer = returnedDepartament,
      error: (returnedError) => alert("Error: " + returnedError.mesagge)
    });
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

  showErrorMessage() {
    if (this.error) {
      alert(`Error al agregar una reseña: ${this.error}`);
    }
  }
}
