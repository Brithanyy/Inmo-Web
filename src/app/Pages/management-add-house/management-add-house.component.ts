import { Component, inject } from '@angular/core';
import { House } from '../../Models/House.model';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HouseService } from '../../Services/House/house.service';

@Component({
  selector: 'app-management-add-house',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
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
    cantidadBaños: 0
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
        "nombreCalle": ['', [Validators.required]],
        "numeroCalle": ['', [Validators.required]]
      }),
      "ubicacionPropiedad": this.fb.group({
        "lat": [0, [Validators.required]],
        "lng": [0, [Validators.required]]
      }),
      "imagenes": [[], [Validators.required]],
      "cantidadAmbientes": ['', [Validators.required]],
      "cantidadDormitorios": ['', [Validators.required]],
      "cantidadBanos": ['', [Validators.required]]
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
    return this.formulario.get("imagenes");
  }

  get cantidadAmbientes() {
    return this.formulario.get("cantidadAmbientes");
  }

  get cantidadDormitorios() {
    return this.formulario.get("cantidadDormitorios");
  }

  get cantidadBanos() {
    return this.formulario.get("cantidadBaños");
  }

  onSubmit() {
    if (this.formulario.valid) {
      console.log(this.formulario.value);
      this.house = this.formulario.getRawValue();
      this.houseService.addHouse(this.house).subscribe({
        next: () => alert("House agregada con exito"),
        error: (err) => console.log("Error: ", err)
      })
    }
  }
  

}
