import { Component } from '@angular/core';
import { ManagementHeaderComponent } from "../../Components/management-header/management-header.component";
import { ManagementFooterComponent } from "../../Components/management-footer/management-footer.component";

@Component({
  selector: 'app-management-modify-house',
  standalone: true,
  imports: [
    ManagementHeaderComponent,
    ManagementFooterComponent
],
  templateUrl: './management-modify-house.component.html',
  styleUrl: './management-modify-house.component.css'
})
export class ManagementModifyHouseComponent {

}
