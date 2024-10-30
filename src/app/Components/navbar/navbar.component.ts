import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  // img : string = 'https://ideogram.ai/assets/progressive-image/balanced/response/4lldEKfXSwiyDSSV5jg0rA';
  img : string = 'assets/IMG/LogoTipo.jpeg'
  whatsapp = 'https://wa.me/2235942827?text=Inmo-Web a su Servicio';
  instagram = 'https://www.instagram.com/brithany__o';
}
