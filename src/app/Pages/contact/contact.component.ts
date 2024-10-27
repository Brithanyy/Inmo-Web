import { Component } from '@angular/core';
import { EmailService } from '../../Services/EmailJS/email.service.spec';
import { CommonModule } from '@angular/common';
import { FormControl, FormsModule } from '@angular/forms';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    FooterComponent
],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  whatsapp = 'https://wa.me/2235942827?text=Inmo-Web a su Servicio';
  instagram = 'https://www.instagram.com/brithany__o';
  empresa = 'Inmo-Web';

  nombre = '';
  correo = '';
  mensaje = '';

  constructor(private emailService: EmailService) {}

  enviarFormulario() {
    const formData = {
      name : this.nombre,
      email : this.correo,
      message: this.mensaje
    }
  
  this.emailService.sendEmail(formData)
  .then(() => {
    // Limpiar el formulario o mostrar un mensaje de éxito
    this.nombre = '';
    this.correo = '';
    this.mensaje = '';
  })
  .catch(err => {
    // Manejar el error
    console.error('Error al enviar el correo', err);
  });
}
}
