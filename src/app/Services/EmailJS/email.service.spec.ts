import { Injectable } from '@angular/core';
import emailjs from 'emailjs-com';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  constructor() {
    emailjs.init('nHhAi6OWKKhvjRFd4'); // clave publica
  }

  sendEmail(formData: any) {
    return emailjs.send('service_puep1pr', 'template_deefhn4', formData) // id service e id template
      .then(response => {
        console.log('Correo enviado con éxito', response.status, response.text);
        return response;
      })
      .catch(err => {
        console.log('Error:', err);
        throw err;
      });
  }
}
