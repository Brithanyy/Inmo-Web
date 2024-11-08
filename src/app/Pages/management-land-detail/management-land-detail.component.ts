import { Component, inject, OnInit } from '@angular/core';
import { DetailLandComponent } from "../../Components/detail-land/detail-land.component";
import { ManagementHeaderComponent } from "../../Components/management-header/management-header.component";
import { ManagementFooterComponent } from "../../Components/management-footer/management-footer.component";
import { Router } from '@angular/router';
import { User } from '../../Models/User.model';
import { UserService } from '../../Services/User/user.service';

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
export class ManagementLandDetailComponent implements OnInit {

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
