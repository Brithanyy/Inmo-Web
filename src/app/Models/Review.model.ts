export interface Review {

    id?: string;
    idPropiedad?: string;
    tipoPropiedad?: string;
    usuario?: string;
    comentario?: string;
    estrellas?: number; //De 1 a 5
    fecha?: string; //Se puede usar el formato de fecha ISO
}