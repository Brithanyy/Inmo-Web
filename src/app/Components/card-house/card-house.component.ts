import { Component, inject, Input, OnInit } from '@angular/core';
import { HouseService } from '../../Services/House/house.service';
import { House } from '../../Models/House.model';
import { Router } from '@angular/router';
import { UserService } from '../../Services/User/user.service';
import { User } from '../../Models/User.model';

@Component({
  selector: 'app-card-house',
  standalone: true,
  imports: [],
  templateUrl: './card-house.component.html',
  styleUrl: './card-house.component.css'
})
export class CardHouseComponent implements OnInit {
  
  @Input() houseID: string | undefined;
  userBuffer?: User;  
  house: House | undefined;
  errorReturned?: string;
  mensajeUsuarioServicio?: string = '';  
  router = inject(Router);
  houseService = inject(HouseService);
  servicioUsuario = inject(UserService); 


  ngOnInit(): void {
    
    if(this.houseID) {

      this.houseService.getHouse(this.houseID).subscribe({

        next: (returnedHouse) => this.house = returnedHouse,

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

    this.router.navigate(['house-detail',  this.houseID]);
  }

  directToDetailsManagement() {
    this.router.navigate(['management-house-detail',  this.houseID]);
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
