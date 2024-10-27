import { Base_Property } from "./Base_Property.model";

export interface House extends Base_Property {
    tipo_propiedad: 'House';
    cantidad_ambientes: number;
    cantidad_dormitorios: number;
    cantidad_baños: number;
    cantidad_plantas: number;
    jardin?: boolean;
    piscina?: boolean;
    cochera?: boolean;
    capacidad_cochera?: number;
}