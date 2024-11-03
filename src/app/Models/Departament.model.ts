import { Review } from "./Review.model";

export interface Departament {

    //*Características básicas que comparten todos los tipos de propiedades
    id?: string;
    idUsuario?: string;
    tipoPropiedad: 'Departamento';
    tituloPropiedad: string;
    descripcionPropiedad: string;
    precioPropiedad: string;
    superficieCubierta: string; 
    superficieTotal?: string;
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

    //*Características específicas del tipo: Departamento    
    cantidadAmbientes: number;
    cantidadDormitorios: number;
    cantidadBanos: number;
}