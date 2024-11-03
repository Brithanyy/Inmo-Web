import { Component, inject } from '@angular/core';
import { House } from '../../Models/House.model';
import { AbstractControl, FormArray, FormBuilder, FormControl, FormGroup, ReactiveFormsModule, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HouseService } from '../../Services/House/house.service';
import { ManagementHeaderComponent } from "../../Components/management-header/management-header.component";
import { ManagementFooterComponent } from "../../Components/management-footer/management-footer.component";

@Component({
  selector: 'app-management-add-house',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule, ManagementHeaderComponent, ManagementFooterComponent],
  templateUrl: './management-add-house.component.html',
  styleUrl: './management-add-house.component.css'
})
export class ManagementAddHouseComponent {

   house: House = {
    tipoPropiedad: 'Casa',
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
        numero_calle: ''
    },
    ubicacionPropiedad: {
        lat: 0,
        lng: 0
    },
    imagenes: [],
    cantidadAmbientes: 0,
    cantidadDormitorios: 0,
    cantidadBanos: 0
};

  formulario : FormGroup;

  houseService = inject(HouseService);

  
  constructor(private fb: FormBuilder) {
    this.formulario = this.fb.group({
      "tituloPropiedad": ['', [Validators.required]],
      "descripcionPropiedad": ['', [Validators.required]],
      "precioPropiedad": ['', [Validators.required, Validators.min(1)]],
      "superficieCubierta": ['', [Validators.required]],
      "superficieTotal": ['', [Validators.required]],
      "direccionPropiedad": this.fb.group({
        "pais": ['', [Validators.required]],
        "provincia": ['', [Validators.required]],
        "localidad": ['', [Validators.required]],
        "nombre_calle": ['', [Validators.required]],
        "numero_calle": ['', [Validators.required, this.noNegativeNumbersValidator()]]
      }),
      "ubicacionPropiedad": this.fb.group({
        "lat": [0, [Validators.required, this.onlyNegativeValidator()]],
        "lng": [0, [Validators.required, this.onlyNegativeValidator()]]
      }),
      "imagenes":  this.fb.array([], []),
      "cantidadAmbientes": ['', [Validators.required, this.noNegativeNumbersValidator()]],  
      "cantidadDormitorios": ['', [Validators.required, this.noNegativeNumbersValidator()]], 
      "cantidadBanos": ['', [Validators.required, this.noNegativeNumbersValidator()]] 
    });
  }
  get tituloPropiedad() {
    return this.formulario.get("tituloPropiedad");
  }

  get descripcionPropiedad() {
    return this.formulario.get("descripcionPropiedad");
  }

  get precioPropiedad() {
    return this.formulario.get("precioPropiedad");
  }

  get superficieCubierta() {
    return this.formulario.get("superficieCubierta");
  }

  get superficieTotal() {
    return this.formulario.get("superficieTotal");
  }

  get direccionPropiedad() {
    return this.formulario.get('direccionPropiedad') as FormGroup;
  }

 get ubicacionPropiedad() {
  return this.formulario.get("ubicacionPropiedad") as FormGroup;
 }

  get imagenes() {
    return this.formulario.get("imagenes") as FormArray;
  }

  get cantidadAmbientes() {
    return this.formulario.get("cantidadAmbientes");
  }

  get cantidadDormitorios() {
    return this.formulario.get("cantidadDormitorios");
  }

  get cantidadBanos() {
    return this.formulario.get("cantidadBanos");
  }

  noNegativeNumbersValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      return value < 0 ? { 'negativeNumber': { value } } : null;
    };
  }

  onlyNegativeValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      return (typeof value === 'number' && value < 0) ? null : { 'notNegative': { value } };
    };
  }

  addImage(imageUrl: string) {
    const imagesArray = this.formulario.get('imagenes') as FormArray;
    imagesArray.push(this.fb.control(imageUrl));
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      this.house = this.formulario.getRawValue();
      this.houseService.addHouse(this.house).subscribe({
        next: () => {
          alert("House agregada con exito");
          this.formulario.reset();
        },
        error: (err) => console.log("Error: ", err)
      })
    }
  }
  

}
