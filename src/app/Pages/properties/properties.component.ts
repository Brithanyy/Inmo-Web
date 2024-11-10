import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { ListHousesComponent } from "../../Components/list-houses/list-houses.component";
import { ListDepartamentsComponent } from "../../Components/list-departaments/list-departaments.component";
import { ListLandsComponent } from "../../Components/list-lands/list-lands.component";

@Component({
  selector: 'app-properties',
  standalone: true,
  imports: [
    NavbarComponent, 
    FooterComponent, 
    ListHousesComponent, 
    ListDepartamentsComponent, 
    ListLandsComponent
  ],
  templateUrl: './properties.component.html',
  styleUrl: './properties.component.css'
})
export class PropertiesComponent {

}
