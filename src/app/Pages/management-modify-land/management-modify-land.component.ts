import { Component, inject } from '@angular/core';
import { ManagementHeaderComponent } from "../../Components/management-header/management-header.component";
import { ManagementFooterComponent } from "../../Components/management-footer/management-footer.component";
import { ActivatedRoute, Router } from '@angular/router';
import { LandService } from '../../Services/Land/land.service';
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Land } from '../../Models/Land.model';

@Component({
  selector: 'app-management-modify-land',
  standalone: true,
  imports: [
    ManagementHeaderComponent,
    ManagementFooterComponent,
    ReactiveFormsModule,
    CommonModule
],
  templateUrl: './management-modify-land.component.html',
  styleUrl: './management-modify-land.component.css'
})
export class ManagementModifyLandComponent {
  
  redirec = inject(Router); 
  landService = inject(LandService);
  router = inject(ActivatedRoute);
  mensajeExito?: string = '';
  mensajeError?: string = '';

  land: Land = {
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
    imagenes: []
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
        numero_calle: ['', [Validators.required]],
      }),
      ubicacionPropiedad: this.fb.group({
        lat: [0, [Validators.required, this.onlyNegativeValidator()]],
        lng: [0, [Validators.required, this.onlyNegativeValidator()]],
      }),
      imagenes: this.fb.array([], Validators.required), 
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
      const id = this.router.snapshot.paramMap.get("id");
      const id_string = String(id);
      this.land= this.formularioLand.getRawValue();
      this.land.id = id_string;
      this.land.idUsuario = "1";
      this.land.tipoPropiedad = "Terreno"
      this.land.reseñas = [];
      this.landService.modifyLand(String(this.land.id),this.land).subscribe({
        next: () => {
          
          this.mensajeExito = "Terreno modificado con éxito";
          this.showMessage(this.mensajeExito);

          setTimeout(() => {
            this.formularioLand.reset();
            this.redirectToHomeManagement();
          }, 4000);
        },
        error: (err) => {

          this.mensajeError = "Error al modificar un terreno";
          this.showErrorMessage(this.mensajeError);
        }
      });
    } else {
          
      this.mensajeError = "Formulario no válido. No se puede enviar";
      this.showErrorMessage(this.mensajeError);
    }
  }

  redirectToHomeManagement() { 
    this.redirec.navigate(['/management-home']);
  }
  loadLand() {
    const id = this.router.snapshot.paramMap.get("id");
    const id_string = String(id);
    this.landService.getLand(id_string).subscribe({
      next: (land) => {
        this.land = land;
        this.loadDefaultValues();
      },
      error: (err) => console.log("Error: ", err)
    })
  }
  ngOnInit() {
    this.loadLand();
  }
 
  loadDefaultValues() {
    const defaultValues = {
      tituloPropiedad: this.land.tituloPropiedad,
      descripcionPropiedad: this.land.descripcionPropiedad,
      precioPropiedad: this.land.precioPropiedad,
      superficieCubierta: this.land.superficieCubierta,
      superficieTotal: this.land.superficieTotal,
      direccionPropiedad: {
        pais: this.land.direccionPropiedad.pais,
        provincia: this.land.direccionPropiedad.provincia,
        localidad: this.land.direccionPropiedad.localidad,
        nombre_calle: this.land.direccionPropiedad.nombre_calle,
        numero_calle: this.land.direccionPropiedad.numero_calle
      },
      ubicacionPropiedad: {
        lat: this.land.ubicacionPropiedad.lat,
        lng: this.land.ubicacionPropiedad.lng
      }
    };

    this.formularioLand.patchValue(defaultValues);

    const imagesArray = this.formularioLand.get('imagenes') as FormArray;
    this.land.imagenes.forEach(image => {
      imagesArray.push(this.fb.control(image));
    });
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
