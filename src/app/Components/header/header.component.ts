import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    FormsModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

  selectedPropertyType: string = '';

  showError: boolean = false; //Variable que nos va a mostrar un cartel de alerta

  router = inject(Router);

  onSearch() {

    if (this.selectedPropertyType) {

      this.router.navigate([this.selectedPropertyType]);
      this.showError = false; 
    } 
    else {
      this.showError = true;
      this.hideErrorAfterDelay();
    }
  }

  hideErrorAfterDelay() {
    setTimeout(() => {
      this.showError = false;
    }, 3000); //Para que la alerta desaparezca despues de 3seg
  }

}
  