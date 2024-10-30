import { Component } from '@angular/core';
import { EmailService } from '../../Services/EmailJS/email.service.spec';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { FooterComponent } from "../../Components/footer/footer.component";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    NavbarComponent,
    FooterComponent,
    ReactiveFormsModule
],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent {
  whatsapp = 'https://wa.me/2235942827?text=Inmo-Web a su Servicio';
  instagram = 'https://www.instagram.com/brithany__o';
  empresa = 'Inmo-Web';


  formulario : FormGroup;

  constructor(private emailService: EmailService, private fb : FormBuilder) {
    this.formulario = this.fb.group({
      'nombre': ['',[Validators.required]],
      'correo': ['',[Validators.required, Validators.email]],
      'mensaje': ['',[Validators.required]],
    })
  }

  get nombre() {
    return this.formulario.get('nombre');
  }
  get correo() {
    return this.formulario.get('correo');
  }
  get mensaje() {
    return this.formulario.get('mensaje');
  }

  enviarFormulario() {
    const formData = {
      name : this.nombre?.value,
      email : this.correo?.value,
      message: this.mensaje?.value
    }
  
  this.emailService.sendEmail(formData)
  .then(() => {
    // Limpiar el formulario o mostrar un mensaje de éxito
    console.log("Consulta enviada con exito.");
    this.formulario.reset();
  })
  .catch(err => {
    // Manejar el error
    console.error('Error al enviar el correo', err);
  });
}
}
