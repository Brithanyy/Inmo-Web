import { Component, inject, OnInit } from '@angular/core';
import { DetailDepartamentComponent } from "../../Components/detail-departament/detail-departament.component";
import { ManagementHeaderComponent } from "../../Components/management-header/management-header.component";
import { ManagementFooterComponent } from "../../Components/management-footer/management-footer.component";
import { Router } from '@angular/router';
import { User } from '../../Models/User.model';
import { UserService } from '../../Services/User/user.service';

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
export class ManagementDepartamentDetailComponent implements OnInit {

  mensajeError? = ''; 
  userBuffer?: User; 
  servicioUsuario = inject(UserService); 
  router = inject(Router);

  ngOnInit(): void { 
    
    this.obtenerUsuarioLogueado();
  }

  backToManagementHome() { 
    this.router.navigateByUrl('management-home');
  }

  redirectToHome() {
    this.router.navigate(['/home']);
  }

  obtenerUsuarioLogueado() { 

    this.servicioUsuario.getAllUsers().subscribe({

      next: (returnedUsers: User[]) => this.userBuffer = returnedUsers.find(user => user.userName === "UserAdmin" && user.password === "passwordUserAdmin2024"),
    
      error: () => {
        this.showErrorMessage("Error al obtener usuario logueado");
      }
    });
  }

  private showErrorMessage(mensaje: string) { 

    this.mensajeError = mensaje;
  
    setTimeout(() => {
      this.mensajeError = '';
    }, 3000);
  }
}
