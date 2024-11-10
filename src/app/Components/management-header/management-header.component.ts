import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-management-header',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './management-header.component.html',
  styleUrl: './management-header.component.css'
})
export class ManagementHeaderComponent {
  
  img : string = 'assets/IMG/LogoTipo.jpeg'
  whatsapp = 'https://wa.me/2235942827?text=Inmo-Web a su Servicio';
  instagram = 'https://www.instagram.com/brithany__o';
}
