import { Review } from "./Review.model";

export interface Commerce {

    //*Características básicas que comparten todos los tipos de propiedades
    id?: number;
    idUsuario?: number;
    tipoPropiedad: 'Local';
    tituloPropiedad: string;
    descripcionPropiedad: string;
    precioPropiedad: number;
    superficieCubierta: string; 
    superficieTotal: string;
    direccionPropiedad: {
        pais: string;
        provincia: string;
        localidad: string;
        nombre_calle: string;
        numero_calle: string;
    };
    ubicacionPropiedad: {
        lat: number;
        lng: number;
    };
    imagenes: string[];
    reseñas?: Review[];
    valoracionPromedio?: number;

    //*Características específicas del tipo: Local
    tipoLocal: string; //Industrial, Gastronómico, oficina, etc. (Que sea un option)
    cantidadAmbientes: number;
    cantidadBaños: number;
    cantidadPlantas: number;
    habilitacionComercial?: boolean;
}


