import { Component } from '@angular/core';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { ListLandsComponent } from "../../Components/list-lands/list-lands.component";
import { FooterComponent } from "../../Components/footer/footer.component";
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-lands-list',
  standalone: true,
  imports: [
    NavbarComponent, 
    ListLandsComponent, 
    FooterComponent,
    RouterLink],
  templateUrl: './lands-list.component.html',
  styleUrl: './lands-list.component.css'
})
export class LandsListComponent {

}
