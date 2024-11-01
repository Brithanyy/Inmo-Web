import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FooterComponent } from "../../Components/footer/footer.component";
import { NavbarComponent } from "../../Components/navbar/navbar.component";

@Component({
  selector: 'app-list-houses',
  standalone: true,
  imports: [
    RouterLink,
    FooterComponent,
    NavbarComponent
],
  templateUrl: './list-houses.component.html',
  styleUrl: './list-houses.component.css'
})
export class ListHousesComponent {

}
