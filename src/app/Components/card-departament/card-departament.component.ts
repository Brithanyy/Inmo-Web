import { Component, inject, Input, OnInit } from '@angular/core';
import { DepartamentService } from '../../Services/Departament/departament.service';
import { Departament } from '../../Models/Departament.model';
import { Router } from '@angular/router';
import { User } from '../../Models/User.model';
import { UserService } from '../../Services/User/user.service';

@Component({
  selector: 'app-card-departament',
  standalone: true,
  imports: [],
  templateUrl: './card-departament.component.html',
  styleUrl: './card-departament.component.css'
})
export class CardDepartamentComponent implements OnInit {

  @Input() departamentID: string | undefined;
  userBuffer?: User;  
  departament: Departament | undefined;
  errorReturned?: string;
  mensajeUsuarioServicio?: string = ''; 
  router = inject(Router);
  departamentService = inject(DepartamentService);
  servicioUsuario = inject(UserService);

  ngOnInit(): void {
    
    if(this.departamentID) {

      this.departamentService.getDepartament(this.departamentID).subscribe({

        next: (returnedDepartament) => this.departament = returnedDepartament,

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

    this.router.navigate(['departament-detail',  this.departamentID]);
  }

  directToDetailsManagement() { //!Agregué esto
    this.router.navigate(['management-departament-detail',  this.departamentID]);
  }

  showErrorMessageServicioUser(mensaje: string) { //!Agregué esto

    setTimeout(() => {
      
      mensaje = '';
    }, 3000);
  }

  obtenerUsuarioLogueado() { 

    this.servicioUsuario.getAllUsers().subscribe({  //!Agregué esto
  
      next: (returnedUsers: User[]) => this.userBuffer = returnedUsers.find(user => user.userName === "UserAdmin" && user.password === "passwordUserAdmin2024"),
    
      error: () => {
        this.mensajeUsuarioServicio = "Error al obtener usuario logueado";
        this.showErrorMessageServicioUser(this.mensajeUsuarioServicio);
      }
    });
  }
  
}
