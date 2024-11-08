import { Component, inject, OnInit } from '@angular/core';
import { ManagementHeaderComponent } from "../../Components/management-header/management-header.component";
import { ManagementFooterComponent } from "../../Components/management-footer/management-footer.component";
import { AbstractControl, FormArray, FormBuilder, FormGroup, ReactiveFormsModule, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HouseService } from '../../Services/House/house.service';
import { ActivatedRoute, Router } from '@angular/router';
import { House } from '../../Models/House.model';

@Component({
  selector: 'app-management-modify-house',
  standalone: true,
  imports: [
    ManagementHeaderComponent,
    ManagementFooterComponent,
    ReactiveFormsModule,
    CommonModule,
],
  templateUrl: './management-modify-house.component.html',
  styleUrl: './management-modify-house.component.css'
})
export class ManagementModifyHouseComponent implements OnInit{
  redirec = inject(Router); 
  houseService = inject(HouseService);
  router = inject(ActivatedRoute);
  house: House = {
    id: '',
    idUsuario: "1",
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

constructor(private fb: FormBuilder) {

  this.formulario = this.fb.group({

    "tituloPropiedad": ['', [Validators.required]],
    "descripcionPropiedad": ['', [Validators.required]],
    "precioPropiedad": ['', [Validators.required, this.positiveNumberValidator()]],
    "superficieCubierta": ['', [Validators.required, Validators.min(0)]],
    "superficieTotal": ['', [Validators.required, Validators.min(0)]],
    "direccionPropiedad": this.fb.group({
      "pais": ['', [Validators.required, this.noNumbersAllowedValidator()]],
      "provincia": ['', [Validators.required, this.noNumbersAllowedValidator()]],
      "localidad": ['', [Validators.required, this.noNumbersAllowedValidator()]],
      "nombre_calle": ['', [Validators.required, this.noNumbersAllowedValidator()]],
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
  this.loadDefaultValues();
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

//! VALIDACIONES PERSONALIZADAS

  //? No letras, solo numeros
  noNegativeNumbersValidator(): ValidatorFn {
    return (control: AbstractControl): { [key: string]: any } | null => {
      const value = control.value;
      return value < 0 ? { 'negativeNumber': { value } } : null;
    };
  }

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
      // Verifica si el valor contiene solo dígitos
      const isOnlyNumbers = /^\d+$/.test(value);
      // Si no contiene solo números, retorna un error
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

  addImage(imageUrl: string) {
    const imagesArray = this.formulario.get('imagenes') as FormArray;
    imagesArray.push(this.fb.control(imageUrl));
  }

  onSubmit() {

    if (this.formulario.valid) {
      const id = this.router.snapshot.paramMap.get("id");
      const id_string = String(id);
      this.house = this.formulario.getRawValue();
      this.house.id = id_string;
      this.house.idUsuario = "1";
      this.house.tipoPropiedad = "Casa";
      this.house.reseñas = [];
      this.houseService.modifyHouse(String(this.house.id),this.house).subscribe({
        next: () => {
          alert("Casa modificada con éxito");
          this.formulario.reset();
          this.redirectToHomeManagement();
        },
        error: (err) => console.log("Error: ", err)
      });
    } else {
      console.log("El formulario no es válido, no se puede enviar.");
    }
  }

  redirectToHomeManagement() { 
    this.redirec.navigate(['/management-home']);
  }
  ngOnInit() {
    this.loadDepartament();
  }

  loadDepartament() {
    const id = this.router.snapshot.paramMap.get("id");
    const id_string = String(id);
    this.houseService.getHouse(id_string).subscribe({
      next: (house) => {
        this.house = house;
        this.loadDefaultValues();
      },
      error: (err) => console.log("Error: ", err)
    })
  }
  loadDefaultValues() {
    const defaultValues = {
      tituloPropiedad: this.house.tituloPropiedad,
      descripcionPropiedad: this.house.descripcionPropiedad,
      precioPropiedad: this.house.precioPropiedad,
      superficieCubierta: this.house.superficieCubierta,
      superficieTotal: this.house.superficieTotal,
      direccionPropiedad: {
        pais: this.house.direccionPropiedad.pais,
        provincia: this.house.direccionPropiedad.provincia,
        localidad: this.house.direccionPropiedad.localidad,
        nombre_calle: this.house.direccionPropiedad.nombre_calle,
        numero_calle: this.house.direccionPropiedad.numero_calle
      },
      ubicacionPropiedad: {
        lat: this.house.ubicacionPropiedad.lat,
        lng: this.house.ubicacionPropiedad.lng
      },
      cantidadAmbientes: this.house.cantidadAmbientes,
      cantidadDormitorios: this.house.cantidadDormitorios,
      cantidadBanos: this.house.cantidadBanos,
    };

    this.formulario.patchValue(defaultValues);
  }
}
