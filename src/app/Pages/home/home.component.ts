import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { HeaderComponent } from "../../Components/header/header.component";
import { ListHousesComponent } from "../../Components/list-houses/list-houses.component";
import { ListDepartamentsComponent } from "../../Components/list-departaments/list-departaments.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    NavbarComponent,
    FooterComponent,
    HeaderComponent,
    ListHousesComponent,
    ListDepartamentsComponent
],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
