import { Base_Property } from "./Base_Property.model";

export interface Commerce extends Base_Property {
    tipo_propiedad: 'Local';
    superficie_total: number;
    tipoLocal: string; // Industrial, Gastronómico, oficina, etc.
    cantidad_ambientes: number;
    cantidad_baños: number;
    cantidad_plantas: number;
    habilitacionComercial?: boolean;
}