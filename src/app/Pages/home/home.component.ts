import { Component } from '@angular/core';
import { PropertyCardComponent } from "../../Components/property-card/property-card.component";
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { HeaderComponent } from "../../Components/header/header.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [PropertyCardComponent, NavbarComponent, FooterComponent, HeaderComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
