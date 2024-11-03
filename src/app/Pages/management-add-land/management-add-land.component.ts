import { Component } from '@angular/core';
import { ManagementHeaderComponent } from "../../Components/management-header/management-header.component";
import { ManagementFooterComponent } from "../../Components/management-footer/management-footer.component";

@Component({
  selector: 'app-management-add-land',
  standalone: true,
  imports: [ManagementHeaderComponent, ManagementFooterComponent],
  templateUrl: './management-add-land.component.html',
  styleUrl: './management-add-land.component.css'
})
export class ManagementAddLandComponent {

}
