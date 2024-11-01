import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { HeaderComponent } from "../../Components/header/header.component";
import { FeaturedHousesComponent } from "../../Components/featured-houses/featured-houses.component";
import { FeaturedDepartamentsComponent } from "../../Components/featured-departaments/featured-departaments.component";
import { FeaturedLandsComponent } from "../../Components/featured-lands/featured-lands.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    FeaturedHousesComponent,
    FeaturedDepartamentsComponent,
    FeaturedLandsComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
