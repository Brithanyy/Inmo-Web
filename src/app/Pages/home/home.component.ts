import { Component } from '@angular/core';
import { PropertyCardComponent } from "../../Components/property-card/property-card.component";
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PropertyCardComponent, NavbarComponent, FooterComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
