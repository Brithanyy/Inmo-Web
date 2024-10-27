import { Review } from "./Review.model";

export interface Base_Property {
    id?: number;
    id_usuario?: number;
    type_property: string;
    titulo_propiedad: string;
    descripcion_propiedad: string;
    precio_propiedad: number;
    superficie_cubierta: number; // En m2 superficie de la construcción
    superficie_total: number; // En m2 superficie del terreno
    direccion: {
        pais: string;
        provincia: string;
        localidad: string;
        nombre_calle: string;
        numero_calle: string;
    };
    ubicacion: {
        lat: number;
        lng: number;
    };
    imagenes: string[];
    reseñas?: Review[];
    valoracionPromedio?: number;
}
