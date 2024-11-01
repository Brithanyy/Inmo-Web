import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { ListHousesComponent } from "../../Components/list-houses/list-houses.component";

@Component({
  selector: 'app-houses-list',
  standalone: true,
  imports: [
    RouterLink,
    NavbarComponent,
    FooterComponent,
    ListHousesComponent
],
  templateUrl: './houses-list.component.html',
  styleUrl: './houses-list.component.css'
})
export class HousesListComponent {

}
