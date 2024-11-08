import { Component, inject } from '@angular/core';
import { DetailDepartamentComponent } from "../../Components/detail-departament/detail-departament.component";
import { ManagementHeaderComponent } from "../../Components/management-header/management-header.component";
import { ManagementFooterComponent } from "../../Components/management-footer/management-footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-departament-detail',
  standalone: true,
  imports: [
    DetailDepartamentComponent,
    ManagementHeaderComponent,
    ManagementFooterComponent
],
  templateUrl: './management-departament-detail.component.html',
  styleUrl: './management-departament-detail.component.css'
})
export class ManagementDepartamentDetailComponent {

  router = inject(Router);

  backToHome() {
    this.router.navigateByUrl('management-home');
  }
}
