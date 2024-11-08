import { Component } from '@angular/core';
import { ManagementHeaderComponent } from "../../Components/management-header/management-header.component";
import { ManagementFooterComponent } from "../../Components/management-footer/management-footer.component";

@Component({
  selector: 'app-management-modify-departament',
  standalone: true,
  imports: [
    ManagementHeaderComponent,
    ManagementFooterComponent
],
  templateUrl: './management-modify-departament.component.html',
  styleUrl: './management-modify-departament.component.css'
})
export class ManagementModifyDepartamentComponent {

}
