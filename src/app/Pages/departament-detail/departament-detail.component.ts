import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { DepartamentService } from '../../Services/Departament/departament.service';
import { Departament } from '../../Models/Departament.model';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { ReviewService } from '../../Services/Review/review.service';
import { Review } from '../../Models/Review.model';
import { DetailDepartamentComponent } from "../../Components/detail-departament/detail-departament.component";

@Component({
  selector: 'app-departament-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    DetailDepartamentComponent
],
  templateUrl: './departament-detail.component.html',
  styleUrl: './departament-detail.component.css'
})
export class DepartamentDetailComponent {


}
