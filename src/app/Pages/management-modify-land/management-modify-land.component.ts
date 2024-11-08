import { Component } from '@angular/core';
import { ManagementHeaderComponent } from "../../Components/management-header/management-header.component";
import { ManagementFooterComponent } from "../../Components/management-footer/management-footer.component";

@Component({
  selector: 'app-management-modify-land',
  standalone: true,
  imports: [
    ManagementHeaderComponent,
    ManagementFooterComponent
],
  templateUrl: './management-modify-land.component.html',
  styleUrl: './management-modify-land.component.css'
})
export class ManagementModifyLandComponent {

}
