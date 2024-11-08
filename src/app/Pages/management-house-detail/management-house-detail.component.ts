import { Component, inject } from '@angular/core';
import { ManagementHeaderComponent } from "../../Components/management-header/management-header.component";
import { DetailHouseComponent } from "../../Components/detail-house/detail-house.component";
import { ManagementFooterComponent } from "../../Components/management-footer/management-footer.component";
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-house-detail',
  standalone: true,
  imports: [
    ManagementHeaderComponent,
    DetailHouseComponent,
    ManagementFooterComponent,
],
  templateUrl: './management-house-detail.component.html',
  styleUrl: './management-house-detail.component.css'
})
export class ManagementHouseDetailComponent {

  router = inject(Router);

  backToHome() {
    this.router.navigateByUrl('management-home');
  }
}
