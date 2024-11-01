import { Component } from '@angular/core';
import { ListDepartamentsComponent } from "../../Components/list-departaments/list-departaments.component";
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-departaments-list',
  standalone: true,
  imports: [
    ListDepartamentsComponent, 
    NavbarComponent, 
    FooterComponent,
    RouterLink],
  templateUrl: './departaments-list.component.html',
  styleUrl: './departaments-list.component.css'
})
export class DepartamentsListComponent {

}
