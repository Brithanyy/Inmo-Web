import { Component, inject, OnInit } from '@angular/core';
import { ManagementHeaderComponent } from "../../Components/management-header/management-header.component";
import { ManagementFooterComponent } from "../../Components/management-footer/management-footer.component";
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../Services/User/user.service';
import { User } from '../../Models/User.model';
import { LandService } from '../../Services/Land/land.service';
import { Land } from '../../Models/Land.model';

@Component({
  selector: 'app-management-add-land',
  standalone: true,
  imports: [
    ManagementHeaderComponent, 
    ManagementFooterComponent, 
    ReactiveFormsModule, 
    CommonModule],
  templateUrl: './management-add-land.component.html',
  styleUrl: './management-add-land.component.css'
})
export class ManagementAddLandComponent implements OnInit {

  userBuffer?: User; 
  mensajeError?: string = ''; 
  mensajeExito?: string = ''; 
  router = inject(Router); 
  servicioUsuario = inject(UserService); 
  landService = inject(LandService);
  
  land: Land = {
    id: '',
    idUsuario: "1",
    tipoPropiedad: 'Terreno',
    tituloPropiedad: '',
    descripcionPropiedad: '',
    precioPropiedad: '',
    superficieCubierta: '',
    superficieTotal: '',
    direccionPropiedad: {
        pais: '',
        provincia: '',
        localidad: '',
        nombre_calle: '',
        numero_calle: '',
    },
    ubicacionPropiedad: {
        lat: 0,
        lng: 0,
    },
    imagenes: [],
    reseñas: []
};
  formularioLand : FormGroup

  constructor(private fb : FormBuilder) {
    this.formularioLand = this.fb.group({
      tituloPropiedad: ['', Validators.required],
      descripcionPropiedad: ['', Validators.required],
      precioPropiedad: ['', [Validators.required, this.positiveNumberValidator()]],
      superficieCubierta:  ['', [Validators.required, Validators.min(0)]],
      superficieTotal: ['', [Validators.required, Validators.min(0)]],
      direccionPropiedad: this.fb.group({
        pais: ['',[ Validators.required, this.noNumbersAllowedValidator()]],
        provincia: ['', [Validators.required, this.noNumbersAllowedValidator()]],
        localidad: ['', [Validators.required, this.noNumbersAllowedValidator()]],
        nombre_calle: ['', [Validators.required, this.noNumbersAllowedValidator()]],
        numero_calle: ['', [Validators.required, this.onlyNumbersValidator()]],
      }),
      ubicacionPropiedad: this.fb.group({
        lat: [0, [Validators.required, this.onlyNegativeValidator()]],
        lng: [0, [Validators.required, this.onlyNegativeValidator()]],
      }),
      imagenes: this.fb.array([], Validators.required), // Para las imágenes se utilizará un array
    });
  }

  get imagenes(): FormArray {
    return this.formularioLand.get('imagenes') as FormArray;
  }
  get tituloPropiedad() {
    return this.formularioLand.get('tituloPropiedad');
  }
  
  get descripcionPropiedad() {
    return this.formularioLand.get('descripcionPropiedad');
  }
  
  get precioPropiedad() {
    return this.formularioLand.get('precioPropiedad');
  }
  
  get superficieCubierta() {
    return this.formularioLand.get('superficieCubierta');
  }
  
  get superficieTotal() {
    return this.formularioLand.get('superficieTotal');
  }
  get direccionPropiedad() {
    return this.formularioLand.get('direccionPropiedad') as FormGroup;
  }
  get ubicacionPropiedad() {
    return this.formularioLand.get("ubicacionPropiedad") as FormGroup;
   }

  addImage(imageUrl: string) {

    const imagesArray = this.formularioLand.get('imagenes') as FormArray;
    imagesArray.push(this.fb.control(imageUrl));
  }

  //! VALIDACIONES PERSONALIZADAS
  //? Solo numeros negativos
  onlyNegativeValidator(): ValidatorFn {

    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      return (typeof value === 'number' && value < 0) ? null : { 'notNegative': { value } };
    };
  }

  //? No numeros, solo letras
  noNumbersAllowedValidator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const hasNumbers = /\d/.test(value);
      return hasNumbers ? { hasNumbers: true } : null;
    };
  }

  //? No letras, solo numeros
  onlyNumbersValidator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const isOnlyNumbers = /^\d+$/.test(value);
      return !isOnlyNumbers ? { nonNumeric: true } : null;
    };
  }

   //? Solo numeros positivos
   positiveNumberValidator(): ValidatorFn {

    return (control: AbstractControl): ValidationErrors | null => {
      const value = control.value;
      const isPositiveNumber = /^[+]?\d+(\.\d+)?$/.test(value) && parseFloat(value) > 0;
      return !isPositiveNumber ? { nonPositiveNumber: true } : null;
    };
  }

  onSubmit() {

    if (this.formularioLand.valid) {

      this.land = this.formularioLand.getRawValue();
      this.land.idUsuario = "1";
      this.land.tipoPropiedad = "Terreno"
      this.land.reseñas = [];
      this.landService.addLand(this.land).subscribe({
        next: () => {

          this.mensajeExito = "Terreno agregado con éxito";
          this.showMessage(this.mensajeExito);

          this.formularioLand.reset();

          setTimeout(() => {
            
            this.redirectToHomeManagement();
          }, 3000);
        },
        error: () => {

          this.mensajeError = "Error al agregar un terreno";
          this.showErrorMessage(this.mensajeError);
        }
      });
    } else {
      
      this.mensajeError = "Formulario no válido. No se puede enviar";
      this.showErrorMessage(this.mensajeError);
    }
  }

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
  
  redirectToHome() { 
    this.router.navigate(['/home']);
  }

  redirectToHomeManagement() { 
    this.router.navigate(['/management-home']);
  }
  
  private showErrorMessage(mensaje: string) { 
  
    this.mensajeError = mensaje;
  
    setTimeout(() => {
      this.mensajeError = '';
    }, 3000);
  }

  private showMessage(mensaje: string) { 
  
    this.mensajeExito = mensaje;
  
    setTimeout(() => {
      this.mensajeExito = '';
    }, 3000);
  }

}
