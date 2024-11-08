import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { DetailLandComponent } from "../../Components/detail-land/detail-land.component";

@Component({
  selector: 'app-land-detail',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    NavbarComponent,
    FooterComponent,
    DetailLandComponent
],
  templateUrl: './land-detail.component.html',
  styleUrl: './land-detail.component.css'
})
export class LandDetailComponent {

}
