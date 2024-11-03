import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { HouseService } from '../../Services/House/house.service';
import { House } from '../../Models/House.model';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { FormReviewComponent } from "../../Components/form-review/form-review.component";

@Component({
  selector: 'app-house-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    FormReviewComponent
],
  templateUrl: './house-detail.component.html',
  styleUrl: './house-detail.component.css'
})
export class HouseDetailComponent implements OnInit {

  activatedRoute = inject(ActivatedRoute);
  servicioHouse = inject(HouseService);
  houseID?: string | null;
  houseBuffer?: House;
  currentImageIndex = 0;
  selectedImage: string | null = null;
  error?: string;

  ngOnInit(): void {
    
    this.houseID = this.activatedRoute.snapshot.paramMap.get('id');

    this.servicioHouse.getHouse(this.houseID).subscribe({

      next: (returnedHouse) => this.houseBuffer = returnedHouse,
      error: (returnedError) => {
        this.error = returnedError.mesagge;
        this.showErrorMessage();
      }
    });
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

  showErrorMessage() {
    if (this.error) {
      alert(`Error al agregar una reseña: ${this.error}`);
    }
  }
}
