import { Review } from "./Review.model";

export interface House {

    //*Características básicas que comparten todos los tipos de propiedades
    id?: number;
    idUsuario?: number;
    tipoPropiedad: 'Casa';
    tituloPropiedad: string;
    descripcionPropiedad: string;
    precioPropiedad: string;
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

    //*Características específicas del tipo: Casa 
    cantidadAmbientes: number;
    cantidadDormitorios: number;
    cantidadBaños: number;
}