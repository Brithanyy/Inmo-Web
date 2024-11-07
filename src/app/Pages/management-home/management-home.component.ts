import { Component, inject, OnInit } from '@angular/core';
import { UserService } from '../../Services/User/user.service';
import { User } from '../../Models/User.model';
import { NavbarComponent } from "../../Components/navbar/navbar.component";
import { PropertiesComponent } from "../properties/properties.component";
import { ListHousesComponent } from '../../Components/list-houses/list-houses.component';
import { ListDepartamentsComponent } from '../../Components/list-departaments/list-departaments.component';
import { ListLandsComponent } from '../../Components/list-lands/list-lands.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-management-home',
  standalone: true,
  imports: [
    NavbarComponent,
    ListHousesComponent,
    ListDepartamentsComponent,
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

      next: (returnedUsers: User[]) => this.userBuffer = returnedUsers.find(user => user.estaLogueado === true),
    
      error: () => {
        this.showErrorMessage("Error al obtener usuario logueado");
      }
    });
  }

  cerrarSesion() {
    
  }

  private showErrorMessage(mensaje: string) {

    this.mensajeError = mensaje;
  
    setTimeout(() => {
      this.mensajeError = '';
    }, 3000);
  }

}
