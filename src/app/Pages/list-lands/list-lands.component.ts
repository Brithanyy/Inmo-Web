import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";

@Component({
  selector: 'app-list-lands',
  standalone: true,
  imports: [NavbarComponent, FooterComponent],
  templateUrl: './list-lands.component.html',
  styleUrl: './list-lands.component.css'
})
export class ListLandsComponent {

}
