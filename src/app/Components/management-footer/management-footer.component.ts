import { Component } from '@angular/core';

@Component({
  selector: 'app-management-footer',
  standalone: true,
  imports: [],
  templateUrl: './management-footer.component.html',
  styleUrl: './management-footer.component.css'
})
export class ManagementFooterComponent {
  anioEmpresa: number = new Date().getFullYear();   
}
