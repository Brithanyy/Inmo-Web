import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../Services/User/user.service';
import { User } from '../../Models/User.model';
import { ListHousesComponent } from '../../Components/list-houses/list-houses.component';
import { ListDepartamentsComponent } from '../../Components/list-departaments/list-departaments.component';
import { ListLandsComponent } from '../../Components/list-lands/list-lands.component';
import { Router } from '@angular/router';
import { ManagementHeaderComponent } from "../../Components/management-header/management-header.component";

@Component({
  selector: 'app-management-home',
  standalone: true,
  imports: [
    ManagementHeaderComponent,
    ListDepartamentsComponent,
    ListHousesComponent,
    ListLandsComponent
],
  templateUrl: './management-home.component.html',
  styleUrl: './management-home.component.css'
})
export class ManagementHomeComponent implements OnInit{

  mensajeError? = '';
  usuarios: User[] = [];
  userBuffer?: User;
  servicioUsuario = inject(UserService);
  router = inject(Router);

  ngOnInit(): void {
    
    this.obtenerUsuarioLogueado();
  }

  obtenerUsuarioLogueado() {

    this.servicioUsuario.getAllUsers().subscribe({

      next: (returnedUsers: User[]) => this.userBuffer = returnedUsers.find(user => user.userName === "UserAdmin" && user.password === "passwordUserAdmin2024"),
    
      error: () => {
        this.showErrorMessage("Error al obtener usuario logueado");
      }
    });
  }

  cerrarSesion() {
    if (this.userBuffer && this.userBuffer.id) {
      
      this.servicioUsuario.updateUserLoggedStatus(String(this.userBuffer.id), false).subscribe({

        next: () => this.router.navigate(['/login']),
        error: () => {
          this.showErrorMessage("Error al cerrar sesión");
        }
      });
    }
  }

  redirectToHome() {
    this.router.navigate(['/home']);
  }

  private showErrorMessage(mensaje: string) {

    this.mensajeError = mensaje;
  
    setTimeout(() => {
      this.mensajeError = '';
    }, 3000);
  }

}
