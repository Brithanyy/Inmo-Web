import { Review } from "./Review.model";

export interface Land {

    //*Características básicas que comparten todos los tipos de propiedades
    id?: string;
    idUsuario?: string;
    tipoPropiedad: 'Terreno';
    tituloPropiedad: string;
    descripcionPropiedad: string;
    precioPropiedad: string;
    superficieCubierta: string; 
    superficieTotal: string;
    direccionPropiedad: {
        pais: string;
        provincia: string;
        localidad: string;
        nombre_calle?: string;
        numero_calle?: string;
    };
    ubicacionPropiedad: {
        lat: number;
        lng: number;
    };
    imagenes: string[];
}