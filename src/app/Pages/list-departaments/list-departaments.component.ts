import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-list-departaments',
  standalone: true,
  imports: [
    NavbarComponent, 
    FooterComponent,
    RouterLink],
  templateUrl: './list-departaments.component.html',
  styleUrl: './list-departaments.component.css'
})
export class ListDepartamentsComponent {

}
