import { Component, inject } from '@angular/core';
import { DetailLandComponent } from "../../Components/detail-land/detail-land.component";
import { ManagementHeaderComponent } from "../../Components/management-header/management-header.component";
import { ManagementFooterComponent } from "../../Components/management-footer/management-footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-land-detail',
  standalone: true,
  imports: [
    DetailLandComponent, 
    ManagementHeaderComponent, 
    ManagementFooterComponent
  ],
  templateUrl: './management-land-detail.component.html',
  styleUrl: './management-land-detail.component.css'
})
export class ManagementLandDetailComponent {

  router = inject(Router);

  backToHome() {
    this.router.navigateByUrl('management-home');
  }
}
