import { Land } from './../../Models/Land.model';
import { Component, inject, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LandService } from '../../Services/Land/land.service';
import { User } from '../../Models/User.model';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-card-land',
  standalone: true,
  imports: [],
  templateUrl: './card-land.component.html',
  styleUrl: './card-land.component.css'
})
export class CardLandComponent implements OnInit {

  userBuffer?: User;  
  errorReturned?: string;
  mensajeUsuarioServicio?: string = '';  
  @Input() landID: string | undefined;
  land: Land | undefined;
  router  = inject(Router);
  landService = inject(LandService);
  servicioUsuario = inject(UserService);

  ngOnInit(): void {
    
    if(this.landID) {

      this.landService.getLand(this.landID).subscribe({

        next: (returnedLand) => this.land = returnedLand,

        error: (errorReturned) =>  {

          this.errorReturned = errorReturned.message
          this.showErrorMessage();
        }
      });
    }

    this.obtenerUsuarioLogueado(); 
  }

  showErrorMessage() {
    if (this.errorReturned) {
      alert(`Error al cargar la propiedad: ${this.errorReturned}`);
    }
  }

  directToDetails() {

    this.router.navigate(['land-detail',  this.landID]);
  }

  directToDetailsManagement() { 
    this.router.navigate(['management-land-detail',  this.landID]);
  }

  showErrorMessageServicioUser(mensaje: string) { 

    setTimeout(() => {
      
      mensaje = '';
    }, 3000);
  }

  obtenerUsuarioLogueado() { 

    this.servicioUsuario.getAllUsers().subscribe({  
  
      next: (returnedUsers: User[]) => this.userBuffer = returnedUsers.find(user => user.userName === "UserAdmin" && user.password === "passwordUserAdmin2024"),
    
      error: () => {
        this.mensajeUsuarioServicio = "Error al obtener usuario logueado";
        this.showErrorMessageServicioUser(this.mensajeUsuarioServicio);
      }
    });
  }

}
